import { FaArrowLeft } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GiBatMask } from "react-icons/gi";
import InputMail from "../components/ui/InputMail";
import InputPass from "../components/ui/InputPass";
import Button from "../components/ui/Button";
import { useState, useContext, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import RegistroContext from "@/contexts/registroContext";

export default function RegisterPage() {
  const { registrar } = useContext(RegistroContext);
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);

  function retornaLogin() {
    navigate("/");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErro(null);

    try {
      await registrar({ nome, email, senha });
      navigate("/");
    } catch (err) {
      console.error("Erro no cadastro:", err);
      setErro("Erro ao registrar. Tente novamente.");
    }
  }
  return (
    <section className="flex flex-col items-end justify-end text-indigo-800 gap-2 w-full max-w-sm">
      <Button
        variant="secondary"
        className="bg-purple-950 mt-4 rounded-xl opacity-90 mr-3 shadow-accent shadow-2xl"
        icon={<FaArrowLeft />}
        onClick={retornaLogin}
      >
        Login
      </Button>
      <div className="card p-4 mb-6 rounded-3xl w-full shrink-0 shadow-xl bg-base-100 opacity-90">
        <div className="card-body">
          <form
            className="w-full space-y-4 flex flex-col justify-center"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold text-center text-indigo-800">
              <div className="justify-items-center text-5xl mb-2 hidden sm:block sm:-rotate-20">
                <GiBatMask />
              </div>
              Cadastro do Herói
            </h2>
            <InputMail
              type="text"
              placeholder="Nome do Herói"
              icon={<MdOutlinePersonOutline />}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <InputMail
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputPass
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            {erro && (
              <p className="text-red-500 text-sm text-center font-bold">
                {erro}
              </p>
            )}
            <Button type="submit" className="btn-block mt-4 rounded-xl">
              Registrar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

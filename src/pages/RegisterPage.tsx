import { FaArrowLeft } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GiBatMask } from "react-icons/gi";
import InputMail from "../components/ui/InputMail";
import InputPass from "../components/ui/InputPass";
import Button from "../components/ui/Button";
import { useState, useContext, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import RegistroContext from "@/contexts/registroContext";
import SelectHero from "@/components/ui/SelectHero";
import type { THeroValue } from "@/types/THero.type";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const { registrar } = useContext(RegistroContext);
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [hero, setHero] = useState<THeroValue | "">("");
  const [erro, setErro] = useState<string | null>(null);

  function retornaLogin() {
    navigate("/");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    try {
      if (!hero) {
        setErro("Selecione um herói.");
        return;
      }

      await toast.promise(registrar({ nome, email, senha, hero }), {
        loading: "Registrando Usuário...",
        success: <b>Usuário registrado com sucesso!</b>,
        error: <b>Não foi possível registrar o usuário.</b>,
      });

      navigate("/");
    } catch (err) {
      console.error("Erro no cadastro:", err);
      setErro("Erro ao registrar. Tente novamente.");
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-indigo-800">
      <div className="self-start mt-4 mb-2">
        <Button
          variant="secondary"
          className="bg-purple-950 text-white rounded-xl opacity-90 ml-2 shadow-accent shadow-xl"
          icon={<FaArrowLeft />}
          onClick={retornaLogin}
        >
          Voltar ao Login
        </Button>
      </div>

      <div className="card p-4 rounded-3xl w-full max-w-md shadow-2xl bg-white opacity-95">
        <div className="card-body p-2">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col gap-4"
          >
            <div className="text-center">
              <div className="w-0 text-5xl text-blue-600 animate-pulse hidden sm:block sm:-rotate-12">
                <GiBatMask />
              </div>
              <h2 className="text-2xl font-bold m-0 p-0">
                Alistamento de Herói
              </h2>
              <p className="text-sm text-gray-600 mt-2 flex gap-1 justify-center">
                <span>Junte-se à Hero Force </span>
                <span className="hidden sm:block"> e transforme o mundo.</span>
              </p>
            </div>
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
              placeholder="E-mail do Herói"
            />
            <InputPass
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha secreta"
            />
            <SelectHero
              value={hero}
              onChange={(e) => setHero(e.target.value as THeroValue)}
            />
            {erro && (
              <p className="text-red-500 text-sm text-center font-bold">
                {erro}
              </p>
            )}
            <Button type="submit" className="btn-block mt-2 rounded-xl">
              Entrar para a Hero Force
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

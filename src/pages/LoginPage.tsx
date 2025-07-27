import { useState, type FormEvent, useContext } from "react";
import { GiBatMask } from "react-icons/gi";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "@/contexts/authContext";
import InputMail from "../components/ui/InputMail";
import InputPass from "../components/ui/InputPass";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErro(null);

    try {
      await toast.promise(login({ email, senha }), {
        loading: "Entrando na base secreta...",
        success: <b>Acesso a base secreta liberado!</b>,
        error: <b>Não foi possível acessar a base secreta.</b>,
      });

      navigate("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErro(err.message);
      } else {
        setErro("Falha no login");
      }
    }
  }

  return (
    <section className="hero min-h-full w-full text-indigo-800 font-semibold p-0 m-0 flex flex-col">
      <div className="hero-content flex-col lg:flex-row-reverse gap-2 sm:gap-8 w-full p-0 m-0 flex lg:justify-content-end">
        <div className="text-center lg:text-left p-4 sm:p-8 bg-white shadow-md rounded-3xl opacity-90 max-w-md">
          <div className="w-0 text-6xl text-blue-700 animate-pulse hidden md:block sm:-rotate-12">
            <GiBatMask />
          </div>
          <h1 className="text-3xl font-bold m-0 p-0">
            Bem-vindo à Hero Force!
          </h1>
          <p className="mt-4 text-gray-700">
            Você está a um passo de entrar para a elite dos heróis digitais.
            Acesse sua conta e continue sua missão.
          </p>
        </div>
        <div className="card bg-white p-3 sm:p-4 mb-6 sm:0 rounded-3xl w-full max-w-sm shrink-0 shadow-xl bg-base-100 opacity-90">
          <div className="card-body">
            <form className="fieldset space-y-2" onSubmit={handleSubmit}>
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
                Entrar na base secreta
              </Button>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-4">
                <span className="text-indigo-600">Novo por aqui?</span>
                <Link to="/register" className="text-blue-600 hover:underline">
                  Cadastre-se como herói
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

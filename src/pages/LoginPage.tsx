import { useState, type FormEvent, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "@/contexts/authContext";
import InputMail from "../components/ui/InputMail";
import InputPass from "../components/ui/InputPass";
import Button from "../components/ui/Button";

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
      await login({ email, senha });
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
    <section className="hero min-w-full min-h-full text-indigo-800 font-semibold p-0 m-0 flex lg:justify-self-start lg:justify-start lg:content-start">
      <div className="hero-content flex-col lg:flex-row-reverse gap-2 w-full p-0 m-0 flex lg:justify-items-start" >
        <div className="opacity-90 text-center lg:text-left bg-emerald-50 p-2 sm:p-4 rounded-xl md:rounded-3xl">
          <h1 className="text-2xl text-center font-bold w-72">Login do Heroi !</h1>
          <p className="pt-6 max-w-72 leading-relaxed hidden lg:block">
            Seja bem-vindo(a) ao HeroForce, onde cada clique é um passo na sua
            jornada de transformação. Faça login e continue sendo o herói da sua
            história.
          </p>
        </div>
        <div className="card p-3 sm:p-4 mb-6 sm:0 rounded-3xl w-full max-w-sm shrink-0 shadow-xl bg-base-100 opacity-90">
          <div className="card-body">
            <form className="fieldset" onSubmit={handleSubmit}>
              <InputMail
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputPass
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <div className="flex gap-2 w-full pt-6 justify-end sm:justify-center">
                <span className="text-indigo-500 hidden sm:block"> Ainda não tem conta?</span>
                <Link to="/register" className="text-blue-500 hover:underline text-center">
                  Cadastre-se
                </Link>
              </div>
              {erro && (
                <p className="text-red-500 text-sm text-center font-bold">
                  {erro}
                </p>
              )}
              <Button
                type="submit"
                value="Submit"
                className="btn-block mt-4 rounded-xl"
              >
                Entrar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

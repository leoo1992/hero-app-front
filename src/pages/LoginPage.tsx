import { useState, type FormEvent, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "@/contexts/authContext";
import InputMail from "../components/ui/Inputs/InputMail";
import InputPass from "../components/ui/Inputs/InputPass";
import Button from "../components/ui/Buttons/Button";
import toast from "react-hot-toast";
import LoginTitle from "@/components/ui/Titles/LoginTitle";

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
      <div
        className="hero-content flex-col lg:flex-row-reverse gap-2 sm:gap-4 w-full p-0 m-0 flex 
      lg:justify-content-end opacity-90 lg:opacity-100"
      >
        <LoginTitle />
        <div className="card bg-white p-3 sm:p-4 sm:0 rounded-3xl w-full max-w-sm shrink-0 shadow-xl">
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

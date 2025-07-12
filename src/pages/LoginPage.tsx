import { useState, type FormEvent, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "@/contexts/authContext";
import Input from "../components/ui/Input";
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
    <section className="flex items-center justify-center min-h-full p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login do Herói</h2>
        <Input
          type="email"
          placeholder="Email"
          required
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          required
          autoComplete="current-password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {erro && <p className="text-red-500 text-sm text-center">{erro}</p>}
        <Button type="submit">Entrar</Button>

        <p className="text-center text-sm text-gray-600">
          <span> Ainda não tem conta? </span>
          <Link to="/register" className="text-blue-500 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>
    </section>
  );
}

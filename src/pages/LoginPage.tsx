import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function LoginPage() {
  return (
    <section className="flex items-center justify-center min-h-full p-4">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Login do Herói</h2>
        <Input
          type="email"
          placeholder="Email"
          required
          autoComplete="username"
        />
        <Input type="password" placeholder="Senha" required />
        <Button type="submit">Entrar</Button>
        <p className="text-center text-sm text-gray-600">
          Ainda não tem conta?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>
    </section>
  );
}

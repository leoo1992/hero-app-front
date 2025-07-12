import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function RegisterPage() {
  return (
    <section className="flex items-center justify-center min-h-full p-4">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Cadastro de Herói</h2>
        <Input type="text" placeholder="Nome do Herói" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Senha" required />
        <Button type="submit">Registrar</Button>
      </form>
    </section>
  );
}

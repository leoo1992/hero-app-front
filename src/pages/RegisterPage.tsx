import { MdOutlinePersonOutline } from "react-icons/md";
import InputMail from "../components/ui/InputMail";
import InputPass from "../components/ui/InputPass";
import Button from "../components/ui/Button";

export default function RegisterPage() {
  return (
    <section className="flex items-center justify-center min-h-full p-4">
      <div className="card p-3 sm:p-4 mb-6 sm:0 rounded-3xl w-full max-w-sm shrink-0 shadow-xl bg-base-100 opacity-90">
        <div className="card-body">
          <form className="w-full max-w-md space-y-4" autoComplete="off">
            <h2 className="text-2xl font-bold text-center">
              Cadastro de Herói
            </h2>
            <InputMail
              type="text"
              placeholder="Nome do Herói"
              icon={<MdOutlinePersonOutline />}
            />
            <InputMail />
            <InputPass />
            <Button type="submit" className="btn-block mt-4 rounded-xl">
              Registrar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

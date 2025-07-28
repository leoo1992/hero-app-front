import batman from "../../../assets/batman.webp";
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-transparent">
      <img
        src={batman}
        alt="Batman"
        className="absolute top-0 right-0 inset-0 w-full h-full object-cover opacity-10"
        style={{ zIndex: -1 }}
      />
      <div
        className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        aria-label="Carregando"
      />
      <span className="ml-2 text-blue-600 font-medium">Carregando...</span>
    </div>
  );
}

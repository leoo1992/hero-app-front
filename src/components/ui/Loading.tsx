export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div
        className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        aria-label="Carregando"
      />
      <span className="ml-2 text-blue-600 font-medium">Carregando...</span>
    </div>
  );
}

export default function MissionsStartedCard() {
  return (
    <div
      className="card rounded-2xl shadow-xl hover:shadow-2xl transition-shadow p-0 flex flex-col min-h-40 
              bg-gradient-to-br from-green-100 to-emerald-300"
    >
      <div className="p-4 w-full">
        <h2 className="text-2xl font-semibold text-emerald-800 text-center">
          Missões em andamento
        </h2>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <p className="text-gray-700 text-sm text-center">
          Nenhuma missão encontrada.
        </p>
      </div>
    </div>
  );
}

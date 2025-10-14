// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
      <div className="flex justify-center">
      <div className="min-w-[24rem] max-w-screen bg-blue-300 p-5 flex-row">
        <h1 className="font-bold">Título do card!</h1>
        <p className="">lorem ipsum sit dolor amet</p>
        <button className="p-1 border-1 rounded-xl mt-3 hover:bg-blue-200 transition-colors duration-300">Clique aqui!</button>
      </div>
      </div>
    </div>
  );
}
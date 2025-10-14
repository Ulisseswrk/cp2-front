// Ex3 — Grid simples

// Crie um `grid` com 2 colunas e 2 linhas, cada célula com fundo cinza claro e altura fixa de `80px`.

export default function Ex3() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex3 - Grid Simples</h1>
      <section className="grid grid-cols-2 grid-rows-2 gap-y-6 ml-5">
        <div className="bg-gray-400 h-[80px] w-40"></div>
        <div className="bg-gray-400 h-[80px] w-40"></div>
        <div className="bg-gray-400 h-[80px] w-40"></div>
        <div className="bg-gray-400 h-[80px] w-40"></div>
      </section>
      
    </div>
  );
}
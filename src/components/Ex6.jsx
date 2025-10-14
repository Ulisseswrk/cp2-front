// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:


// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8">
        <h1 className="grid text-2xl font-bold mb-4">Ex6 - Layout com Grid</h1>
      <div className="h-[20rem]">
        <header className="w-[100%] h-[80px] bg-red-300"></header>
        <main className="bg-red-400 h-[140px]"></main>
        <footer className=" bg-red-500 h-[80px] w-[100%]"></footer>
      </div>
    </div>
  );
}

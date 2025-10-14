// Ex2 — Flexbox básico

// Crie um container com `flex` que alinhe três quadrados coloridos (50x50px) lado a lado e centralizados horizontalmente.

export default function Ex2() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex2 - Flexbox Básico</h1>
      <div className="flex justify-center gap-5 m-3 ">
          <div className="bg-blue-400 h-10 w-10"></div>
          <div className="bg-red-400 h-10 w-10"></div>
          <div className="bg-green-400 h-10 w-10"></div>
      </div>
    </div>
  );
}

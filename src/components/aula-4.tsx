import { useBearStore } from "@/store/immer-devtools-store";

const LessonFour = () => {
  const { bears, increase, reset } = useBearStore();

  return (
    <div>
      {/* Tópico 4: Imutabilidade com Immer e devtools */}
      {/* 🎯 Objetivo: Aprender a usar middlewares do Zustand, como devtools, persist e immer, além de integrar com ferramentas como o Redux DevTools. */}
      {/*
      🧠 Tópicos do Dia
        1. Middleware no Zustand
        Zustand oferece middlewares poderosos que estendem a funcionalidade do store de forma simples e composável.

        Principais middlewares:
        devtools: Integração com Redux DevTools.

        persist: Permite persistir o estado (ex: no localStorage).

        immer: Permite atualizar o estado de forma imutável e mais legível.

        2. Redux DevTools
        Você pode monitorar o estado e suas mutações usando a extensão do Redux DevTools no navegador.
      */}
      <hr className="text-center text-muted-foreground mt-4"></hr>
      <div className="text-center mt-6">
        <h1>📅 Dia 4: Middleware, Imutabilidade com Immer e Devtools</h1>
        <p className="text-muted-foreground whitespace-pre-line">
          <strong>Objetivo</strong>: Aprender como usar middlewares do Zustand
          para melhorar o desenvolvimento e garantir a imutabilidade do estado
          com Immer.{"\n"}
          Também veremos como integrar com o Redux DevTools.{"\n\n"}
          <strong>Tópicos</strong>:{"\n"}- Uso do middleware <code>immer</code>{" "}
          para atualizar estado de forma imutável.
          {"\n"}- Persistência de estado com <code>persist</code>.{"\n"}-
          Integração com Redux DevTools usando <code>devtools</code>.{"\n\n"}
          <strong>Exercício</strong>: Criar um store com <code>immer</code>,
          persistência no <code>localStorage</code> e integração com o Redux
          DevTools.
        </p>
        <div>
          <h1>{bears}</h1>
          <div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
              onClick={increase}
            >
              Add one
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonFour;

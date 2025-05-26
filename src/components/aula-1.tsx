import useCounterStore from "@/store/count-store";

const LessonOne = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      {/* Tópico 1: Ler dados com o hook useStore (ou seu próprio hook) */}
      <div className="text-center mt-6">
        <h1>🗓️ Dia 1: Introdução e Conceitos Básicos</h1>
        <p className="text-muted-foreground whitespace-pre-line">
          <strong>Objetivo</strong>: Entender o que é Zustand e por que usá-lo.
          {"\n"}
          <strong>Tópicos</strong>:{"\n"}- O que é Zustand e comparação com
          Redux/Context API.
          {"\n"}- Instalação (`npm install zustand`).
          {"\n"}- Criar seu primeiro store básico.
          {"\n"}
          <strong>Exercício</strong>: Criar um contador com Zustand.
        </p>
        <h2 className="text-xl mb-4">Contador: {count}</h2>
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Incrementar
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default LessonOne;

import useAuthStore from "@/store/auth-store";
import useCounterStore from "@/store/count-store";

const LessonTwo = () => {
  const { isAuthenticated, login, logout } = useAuthStore();
  return (
    <div>
      {/*   Tópico 2: Ler dados com o hook useStore (ou seu próprio hook) */}
      {/*   Aprender como acessar e modificar o estado usando zustand, com um exemplo prático de autenticação (login/logout). */}
      <hr className="text-center text-muted-foreground mt-4"></hr>
      <div className="text-center mt-6">
        <h2>🗓️ Dia 2: Lendo e Atualizando o Estado</h2>
        <p className="text-muted-foreground whitespace-pre-line">
          <strong>Objetivo</strong>: Aprender a acessar e modificar estado.
          {"\n"}
          {"\n"}
          <strong>Tópicos</strong>:{"\n"}- <code>useStore</code> e como ler
          dados.
          {"\n"}- Funções para atualizar o estado.
          {"\n"}
          {"\n"}
          <strong>Exercício</strong>: Criar um store de autenticação
          (login/logout).
        </p>
        {isAuthenticated ? (
          <div className="text-center mt-4">
            <p className="text-green-500">Usuário autenticado!</p>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Sair
            </button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <p className="text-yellow-500">Usuário não autenticado.</p>
            <button
              onClick={login}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            >
              Entrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonTwo;

import useAuthPersistStore from "@/store/auth-store-persist";

const LessonTree = () => {
  const {
    isAuthenticated: isAutenticatedPersist,
    login: loginPersist,
    logout: logoutPersist,
  } = useAuthPersistStore();
  return (
    <div>
      {/*
      TODO: 3. O que são Middlewares no Zustand?
        Middlewares em Zustand permitem extensões úteis ao comportamento do store, como:

        - Persistência (persist)

        - Debug com Redux Devtools (devtools)

        - Imutabilidade (immer)
      */}
      <hr className="text-center text-muted-foreground mt-4"></hr>
      <div className="text-center mt-6">
        <h1>📅 Dia 3: Middleware e Persistência</h1>
        <p className="text-muted-foreground">
          Aprenda sobre middlewares no Zustand e como persistir o estado.
        </p>
        {isAutenticatedPersist ? (
          <div className="text-center mt-4">
            <p className="text-green-500">Usuário autenticado!</p>
            <button
              onClick={logoutPersist}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Sair
            </button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <p className="text-yellow-500">Usuário não autenticado.</p>
            <button
              onClick={loginPersist}
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

export default LessonTree;

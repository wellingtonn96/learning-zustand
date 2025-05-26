import { useUserStore } from "@/store/user-store";
import { useEffect } from "react";

const LessonFive = () => {
  const { users, loading, error, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) return <p className="text-blue-500">Carregando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <div className="text-center mt-6">
        <hr className="text-center text-muted-foreground mt-4"></hr>
        <h1>🗓️ Dia 5: Zustand com Async</h1>
        <p className="text-muted-foreground whitespace-pre-line">
          <strong>Objetivo</strong>: Aprender a lidar com dados assíncronos no
          Zustand, como buscar dados de uma API e gerenciar estados de
          carregamento e erro.{"\n"}
          <strong>Tópicos</strong>:{"\n"}- Definição de funções assíncronas no
          store Zustand.{"\n"}- Estratégia para carregamento de dados de uma
          API.{"\n"}- Gerenciamento de estado de carregamento (loading) e erros.
        </p>

        <ul className="list-disc pl-5" style={{ textDecoration: "none" }}>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LessonFive;

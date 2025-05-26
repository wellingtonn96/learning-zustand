import LessonOne from "@/components/aula-1";
import LessonTwo from "@/components/aula-2";
import LessonTree from "@/components/aula-3";
import LessonFour from "@/components/aula-4";
import LessonFive from "@/components/aula-5";
import TodoList from "@/components/aula-pratica";
import { useBearStore } from "@/store/immer-devtools-store";

const LearningZustend = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Learning Zustand</h1>
      <p className="text-center text-muted-foreground mb-4">
        Em breve, você poderá aprender sobre Zustand, uma biblioteca de
        gerenciamento de estado para React.
      </p>
      <LessonOne />
      <LessonTwo />
      <LessonTree />
      <LessonFour />
      <LessonFive />
      <TodoList />
    </div>
  );
};

export default LearningZustend;

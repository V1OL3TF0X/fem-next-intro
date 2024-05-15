import TodoList from '@/components/TodoList';
import { db } from '@/db';
import { Prisma } from '@prisma/client';

const getTodos = () => {
  return db.todo.findMany({});
};
const TodosPage = async () => {
  const todos: Prisma.TodoSelect[] = (await getTodos()) as unknown as Prisma.TodoSelect[];
  return (
    <div className='flex size-full items-center justify-center'>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;

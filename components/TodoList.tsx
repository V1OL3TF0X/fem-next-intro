import { Prisma } from '@prisma/client';
import Todo from './Todo';

const TodoList = ({ todos }: { todos: Array<Prisma.TodoSelect> }) => (
  <ul>
    {todos.map((todo) => (
      <Todo as='li' todo={todo} key={todo.id} />
    ))}
  </ul>
);

export default TodoList;

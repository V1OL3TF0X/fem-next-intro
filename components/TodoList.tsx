import { Prisma } from '@prisma/client';
import Todo from './Todo';

const TodoList = ({ todos }: { todos: Array<Prisma.TodoSelect> }) => (
  <ul className='divide-y-2 divide-indigo-600 rounded-md border-2 border-indigo-600'>
    {todos.map((todo) => (
      <Todo as='li' todo={todo} key={todo.id} className='px-2 py-1' />
    ))}
  </ul>
);

export default TodoList;

import { Prisma } from '@prisma/client';
const Todo = <Element extends React.ElementType = 'div'>({
  todo,
  as: El = 'div',
  ...rest
}: { todo: Prisma.TodoSelect; as?: Element } & React.ComponentPropsWithRef<Element>) => (
  <El {...rest}>
    <input type='checkbox' checked={todo.completed} /> {todo.content}
  </El>
);

export default Todo;

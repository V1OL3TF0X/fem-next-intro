import { Prisma } from '@prisma/client';
const Todo = <Element extends React.ElementType = 'div'>({
  todo,
  as: El = 'div',
  ...rest
}: { todo: Prisma.TodoSelect; as?: Element } & React.ComponentPropsWithRef<Element>) => (
  <El {...rest}>
    <pre>{JSON.stringify(todo)}</pre>
  </El>
);

export default Todo;

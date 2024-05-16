'use client';
import { completeTodo } from '@/db';
import { Prisma } from '@prisma/client';
import { useTransition } from 'react';
const Todo = <Element extends React.ElementType = 'div'>({
  todo,
  as: El = 'div',
  ...rest
}: { todo: Prisma.TodoSelect; as?: Element } & React.ComponentPropsWithRef<Element>) => {
  const [isPending, startTransition] = useTransition();
  return (
    <El {...rest}>
      <input type='checkbox' checked={todo.completed} onClick={() => startTransition(() => completeTodo(todo.id))} />{' '}
      <span className={todo.completed ? 'text-gray-600 line-through ' : ''}>{todo.content}</span>
    </El>
  );
};

export default Todo;

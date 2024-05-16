import NewTodoForm from '@/components/NewTodoForm';
import { submitNewTodo } from '@/db/actions';

export default function DashbaordLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='p-4'>
      <h1 className='text-xl text-green-400'>Dashbaord</h1>
      <NewTodoForm action={submitNewTodo} />
      <div className='h-full'>{children}</div>
    </div>
  );
}

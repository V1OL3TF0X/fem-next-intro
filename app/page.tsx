import NewTodoForm from '@/components/NewTodoForm';

export default function Home() {
  return (
    <div className='flex size-full max-w-2xl items-center justify-center p-4'>
      <NewTodoForm />
    </div>
  );
}

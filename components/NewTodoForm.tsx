import Button from './Button';

const NewTodoForm = ({ action }: { action: (data: FormData) => Promise<void> }) => {
  return (
    <div>
      <form action={action} className='flex items-end gap-2'>
        <div>
          <label htmlFor='todo-content' className='block text-sm font-medium leading-6 text-gray-900'>
            New Todo
          </label>
          <div className='relative mt-2 rounded-md shadow-sm'>
            <input
              type='text'
              name='todo-content'
              id='todo-content'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='Content'
            />
          </div>
        </div>
        <Button type='submit'>Add todo</Button>
      </form>
    </div>
  );
};

export default NewTodoForm;

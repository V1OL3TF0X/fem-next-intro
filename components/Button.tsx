export default function Button({ children, ...props }: React.ComponentPropsWithRef<'button'>) {
  return (
    <button
      className='text-md rounded-md bg-indigo-600 px-3 py-[.35rem] font-semibold text-white hover:bg-indigo-500 focus:bg-indigo-500'
      {...props}
    >
      {children}
    </button>
  );
}

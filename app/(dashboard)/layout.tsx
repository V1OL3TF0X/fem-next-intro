export default function DashbaordLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className='text-xl text-green-400'>Dashbaord</h1>
      <div className='h-full'>{children}</div>
    </>
  );
}

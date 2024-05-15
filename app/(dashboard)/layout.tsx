export default function DashbaordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-green-400 text-xl">Dashbaord</h1>
      <div className="h-full">{children}</div>
    </>
  );
}

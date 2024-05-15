const DocsIdPage = ({ params }: { params: { slug: string[] } }) => {
  return (
    <div className="flex items-center justify-center size-full">
      Docs ID page: <pre>{JSON.stringify(params.slug, null, 2)}</pre>
    </div>
  );
};

export default DocsIdPage;

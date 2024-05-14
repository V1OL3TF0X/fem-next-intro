const DocsIdPage = ({ params }: { params: { slug: string[] }}) => {
    return (
        <div>Docs ID page: <pre>{ JSON.stringify(params.slug, null, 2)}</pre></div>
    );
}

export default DocsIdPage;

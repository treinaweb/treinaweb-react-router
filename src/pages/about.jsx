import { useParams, useSearchParams } from 'react-router-dom';

export default function About() {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get('a'));

    return (
        <h2 onClick={() => setSearchParams({ b: 8 })}>About - {params.id}</h2>
    );
}

import { Link, useParams, Outlet } from 'react-router-dom';

export default function Produtos() {
    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                <li>
                    <Link to="1">Produto 1</Link>
                </li>
                <li>
                    <Link to="2">Produto 2</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export function Produto() {
    const params = useParams();
    return (
        <div>
            <h2>Produto - {params.id}</h2>
        </div>
    );
}

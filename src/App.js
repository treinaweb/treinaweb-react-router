import Index from './pages/index';
import About from './pages/about';
import Produtos, { Produto } from './pages/produtos';
import { Routes, Route, Link, useRoutes } from 'react-router-dom';

function App() {
    const element = useRoutes([
        {
            path: '/',
            element: <Index />,
        },
        {
            path: 'produtos/*',
            element: <Produtos />,
            children: [
                {
                    path: ':id',
                    element: <Produto />,
                },
            ],
        },
    ]);

    return (
        <div>
            {element}

            {/* <Link to="/">Home</Link> */}
            {/* <Link to="produtos">Produtos</Link> */}
            <br />
            {/* <Link to="about/ABC">About 1</Link>
            <Link to="about/DEF">About 2</Link> */}
        </div>
    );
}

export default App;

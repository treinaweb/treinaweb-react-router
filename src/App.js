import Index from './pages/index';
import About from './pages/about';
import Produtos, { Produto } from './pages/produtos';
import {
    Routes,
    Route,
    Link,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);

    useEffect(() => {
        if (location.pathname.includes('2')) {
            navigate('/produtos/1');
        }
    }, [location, navigate]);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="about/:id" element={<About />} />
                <Route path="produtos/*" element={<Produtos />}>
                    <Route path=":id" element={<Produto />} />
                </Route>
            </Routes>

            <Link to="/">Home</Link>
            <Link to="produtos">Produtos</Link>
            <br />
            <Link to="about/ABC">About 1</Link>
            <Link to="about/DEF">About 2</Link>
        </div>
    );
}

export default App;

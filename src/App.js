import Index from './pages/index';
import About from './pages/about';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="about/:id" element={<About />} />
            </Routes>

            <Link to="/">Home</Link>
            <br />
            <Link to="about/ABC">About 1</Link>
            <Link to="about/DEF">About 2</Link>
        </div>
    );
}

export default App;

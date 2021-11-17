import Index from './pages/index';
import About from './pages/about';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="about" element={<About />} />
            </Routes>

            <Link to="/">Home</Link>
            <br />
            <Link to="about">About</Link>
        </div>
    );
}

export default App;

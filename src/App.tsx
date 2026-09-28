import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import PlayerBar from './components/layout/PlayerBar';

function App() {
    return (
        <div className="app">
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <PlayerBar />
        </div>
    );
}

export default App;

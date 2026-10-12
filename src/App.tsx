import { Navigate, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import Sidebar from './components/layout/Sidebar';
import PlayerBar from './components/layout/PlayerBar';
import LibraryPage from './pages/LibraryPage';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Navigate to={'/home'} />} />
                <Route index path="/home" element={<HomePage />} />
                <Route path="/library" element={<LibraryPage />} />
            </Routes>
            <PlayerBar />
        </div>
    );
}

export default App;

import './styles/App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {

    return (
        <HashRouter>

            <Routes>

                <Route path='/' element={<Login/>} />

                <Route element={<ProtectedRoutes/>}>
                    <Route />
                </Route>

            </Routes>

        </HashRouter>
    )
}

export default App

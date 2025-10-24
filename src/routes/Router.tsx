import { Routes, Route } from 'react-router-dom'
import Login from '@/components/pages/Login'
import Dashboard from '@/components/pages/Dashboard'
import { useAuth } from '@/contexts/AuthContext';

export function AppRoutes() {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={user ? <Dashboard /> : <Login />} />
        </Routes>
    )
}
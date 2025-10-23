import { Routes, Route } from 'react-router-dom'
import Login from '@/components/pages/Login'
import Dashboard from '@/components/pages/Dashboard'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}
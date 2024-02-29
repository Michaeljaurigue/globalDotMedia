import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const ProtectedRoute = () => {
    const { isLoggedIn } = useContext(CurrentUserContext);

    return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ProtectedRoute from './components/ProtectedRoute';
// import Home from './components/Home';
// import Dashboard from './components/Dashboard';
// // Import other components

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route element={<ProtectedRoute />}>
//                     <Route path="/dashboard" element={<Dashboard />} />
//                     {/* Other protected routes */}
//                 </Route>
//                 {/* Other routes */}
//             </Routes>
//         </BrowserRouter>
//     );
// }

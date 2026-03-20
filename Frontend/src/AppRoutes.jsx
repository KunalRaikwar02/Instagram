// import { Routes,Route, BrowserRouter } from "react-router-dom";
// import Login from './features/auth/pages/Login';
// import Register from './features/auth/pages/Register';
// import Feed from "./features/post/pages/Feed";
// import CreatePost from "./features/post/pages/CreatePost";


// function AppRoutes (){
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<Feed />} />
                
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/create-post" element={<CreatePost />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default AppRoutes; 




import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import React, { useContext } from 'react';
import { AuthContext } from './features/auth/auth.context'; 
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';
import Feed from "./features/post/pages/Feed";
import ProtectedRoute from "./features/shared/components/ProtectedRoute";

function AppRoutes() {
    const { user, loading } = useContext(AuthContext);

    // 1. Sabse pehle loading check karo, taaki galat route render na ho
    if (loading) {
        return (
            <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#000', color: '#fff' }}>
                <div className="loader">Checking Auth...</div>
            </main>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                {/* 2. Agar user logged in hai aur login page kholne ki koshish kare, toh "/" bhej do */}
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
                <Route path="/register" element={!user ? <Register /> : <Navigate to="/" replace />} />

                {/* 3. Protected Home Route */}
                <Route path='/' element={
                    <ProtectedRoute>
                        <Feed />
                    </ProtectedRoute>
                } />

                {/* 4. Catch-all: Direct login or home */}
                <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
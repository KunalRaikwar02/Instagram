// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../../auth/auth.context';

// const ProtectedRoute = ({ children }) => {
//     const { user, loading } = useContext(AuthContext);

//     // Wait for auth verification to complete
//     if (loading) {
//         return (
//             <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//                 <div className="loader">Checking Auth...</div>
//             </main>
//         );
//     }

//     // Redirect to login if user is not authenticated
//     if (!user) {
//         return <Navigate to="/login" replace />;
//     }

//     // Render protected content if authenticated
//     return children;
// };

// export default ProtectedRoute;



import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../auth/auth.context';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return null; // AppRoutes handle kar raha hai

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
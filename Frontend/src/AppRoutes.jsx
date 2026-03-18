import { Routes,Route, BrowserRouter } from "react-router-dom";
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';
import Feed from "./features/post/pages/Feed";


function AppRoutes (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Feed />} />
                
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes; 
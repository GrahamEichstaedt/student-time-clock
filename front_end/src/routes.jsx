import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Attendance from './components/Attendance'
import SignIn from './components/SignIn';

const AppRoutes = () => (
        <Router>
                <Routes>
                        <Route path="/" index element={<Home />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/attendance" element={<Attendance />} />
                </Routes>
        </Router>
);

export default AppRoutes;


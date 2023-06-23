import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/homePage';
import SignInPage from '../components/signin';
import Register from '../components/register';
import ForgetPassword from '../components/signin/forgetPassword';
import Offer from '../components/offer';
import AddProperties from '../components/owener/add-properties';
import MyProperties from '../components/owener/my-properties';
import AllAplication from '../components/owener/all-application';
import AdminDashboard from '../components/admin';
import { useContext } from 'react';
import { SetJWT } from '../store/context';
import RentedCustomers from '../components/admin/renter-customers';
import ManageUsers from '../components/admin/manage-users';

const PageRoutes = () => {
    const { userRole } = useContext(SetJWT);

    return (
        <Routes>
            <Route path="*" element={userRole === "ADMIN" ? <AdminDashboard /> : <HomePage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path='register' element={<Register />} />
            <Route path='forget-password' element={<ForgetPassword />} />
            {userRole === "CUSTOMER" && <Route path='offer/:id' element={<Offer />} />}
            {userRole === "OWNER" && <Route path='add-properties' element={<AddProperties />} />}
            {userRole === "OWNER" && <Route path='my-properties' element={<MyProperties />} />}
            {userRole === "OWNER" && <Route path='all-applications' element={<AllAplication />} />}
            {userRole === "ADMIN" && <Route path='customers' element={<RentedCustomers />} />}
            {userRole === "ADMIN" && <Route path='manage-users' element={<ManageUsers />} />}
            ManageUsers
        </Routes>
    );
}
export default PageRoutes;
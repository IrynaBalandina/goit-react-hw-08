import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectIsRefreshing} from './redux/auth/selectors';
import { apiRefreshUser } from './redux/auth/operations';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';



const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>import('./pages/RegistrationPage/RegistrationPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);


  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegistrationPage />} />}
        />
       
      </Routes>
    </Layout>
  );
};
export default App;
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AuthCallBackPage from "./pages/AuthCallBackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import Details from "./pages/Details";
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallBackPage />} />
      <Route
        path="/search/:city"
        element={
          <Layout>
            <SearchPage />
          </Layout>
        }
      />
      <Route
        path="/details/:restaurantId"
        element={
          <Layout>
            <Details />
          </Layout>
        }
      />
      {/* user-profile-page is protected */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />

        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          }
        />
      </Route>
      <Route path="/user" element={<span>userpage</span>} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoutes;

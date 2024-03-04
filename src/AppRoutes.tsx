import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <span>home page</span>
          </Layout>
        }
      />
      <Route path="/user" element={<span>userpage</span>} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoutes;

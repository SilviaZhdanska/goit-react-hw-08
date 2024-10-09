import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage.jsx";
import ContactsPage from "./pages/contactsPage/ContactsPage.jsx";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import RegistrationPage from "./pages/registrationPage/RegistrationPage.jsx";
import Layout from "./components/layout/Layout";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import RestrictedRoute from "./components/restrictedRoute/RestrictedRoute";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={RegistrationPage} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={LoginPage} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

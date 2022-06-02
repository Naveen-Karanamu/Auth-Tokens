import "../styles/globals.css";
import { store } from "./app/api/store";

import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Public from "../components/Public";
import Login from "./features/auth/Login";
import Welcome from "./features/auth/Welcome";
import RequireAuth from "./features/auth/RequireAuth";
// import UsersList from "../pages/features/";

// Libraries
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="welcome" element={<Welcome />} />
            {/* <Route path="userslist" element={<UsersList />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default MyApp;

import { Route, Routes } from "react-router";
import { Navbar } from "../components/partials/Navbar";
import { About } from "../pages/landing/About";
import { Contact } from "../pages/landing/Contact";
import { Features } from "../pages/landing/Features";
import { Home } from "../pages/landing/Home";
import { Services } from "../pages/landing/Services";
import { TodoLanding } from "../pages/Todo/TodoLanding";
import { DialogDisplayScreen } from "../pages/Todo/DialogDisplayScreen";
import { TodoForm } from "../pages/Todo/TodoForm";
import File from "../pages/file/File";

export const WelcomeLayout = () => {
  const welcomeRoutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/feature", element: <Features /> },
    { path: "/contact", element: <Contact /> },
    { path: "/todo", element: <TodoLanding /> },
    { path: "/dialog", element: <DialogDisplayScreen /> },
    { path: "/form", element: <TodoForm /> },
    { path: "/file", element: <File /> },
    { path: "/*", element: <div>404 not found</div> },
  ];
  return (
    <>
      <Navbar />
      <Routes>
        {welcomeRoutes.map((v, key) => (
          <Route path={v.path} element={v.element} key={key} />
        ))}
      </Routes>
    </>
  );
};

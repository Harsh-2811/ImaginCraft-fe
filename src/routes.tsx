import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Header } from "./components/Header";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "/",
                index: true,
                element: <App />
            }
        ]
    },
], { basename: '/' });
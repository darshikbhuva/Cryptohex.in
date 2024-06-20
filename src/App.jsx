import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Transaction",
    element: <TransactionPage />,
  },
  {
    path: "/Support",
    element: <Support />,
  },
]);
import Dashboard from "./Pages/Dashboard/Dashboard";
import TransactionPage from "./Pages/Transaction/TransactionPage";
import Support from "./Pages/Support/Support";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

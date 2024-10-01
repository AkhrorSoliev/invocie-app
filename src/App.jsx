import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import { Invoices, InvoiceView } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Invoices />,
        },
        {
          path: "/invoice/:id",
          element: <InvoiceView />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;

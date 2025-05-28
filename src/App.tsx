import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "./components/theme-provider";
import Login from "./pages/Login";
import PageWrapper from "./components/PageWrapper";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ProtectedRoute from "./ProtectedRoute";
import { agriSmartRoutes } from "@/routes";
function App() {
  const queryClient = new QueryClient();
  const agriSmartRoutesChildren = agriSmartRoutes.map(
    ({ index, path, element, isWrapped = true, title }) => ({
      ...(index ? { index: true } : { path }),
      element:
        isWrapped !== false ? (
          <PageWrapper title={title ?? ""}>{element}</PageWrapper>
        ) : (
          element
        ),
    })
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "agri-smart/",
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: agriSmartRoutesChildren,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

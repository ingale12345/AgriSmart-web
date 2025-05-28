import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import { ThemeProvider } from "./components/theme-provider";
import { Shops } from "./pages/shops";
import Branches from "./pages/Branches";
import ShopUsers from "./pages/ShopUsers";
import InventoryItems from "./pages/InventoryItems";
import Orders from "./pages/Orders";
import Invoices from "./pages/Invoices";
import Deliveries from "./pages/Deliveries";
import Crops from "./pages/Crops";
import CustomerCrops from "./pages/CustomerCrops";
import ProductApplicaions from "./pages/ProductApplicaions";
import GeoTags from "./pages/GeoTags";
import Users from "./pages/Users";
import Login from "./pages/Login";
import PageWrapper from "./components/PageWrapper";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "agri-smart/",
      // element: <Login />,
      // element: <MainLayout />,
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: (
                <PageWrapper title="Dashboard">
                  <Home />
                </PageWrapper>
              ),
            },
            {
              path: "home",
              element: (
                <PageWrapper title="Dashboard">
                  <Home />
                </PageWrapper>
              ),
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "shops",
              element: (
                <PageWrapper title="Shops">
                  <Shops />
                </PageWrapper>
              ),
            },
            {
              path: "branches",
              element: <Branches />,
            },
            {
              path: "shop-users",
              element: <ShopUsers />,
            },
            {
              path: "inventory",
              element: <InventoryItems />,
            },
            {
              path: "orders",
              element: <Orders />,
            },
            {
              path: "invoices",
              element: <Invoices />,
            },
            {
              path: "deliveries",
              element: <Deliveries />,
            },
            {
              path: "crops",
              element: <Crops />,
            },
            {
              path: "customer-crops",
              element: <CustomerCrops />,
            },
            {
              path: "product-applications",
              element: <ProductApplicaions />,
            },
            {
              path: "geo-tags",
              element: <GeoTags />,
            },
            {
              path: "users",
              element: <Users />,
            },
          ],
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

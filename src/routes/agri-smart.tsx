import type { PageSectionProps } from "@/components/PageWrapper";

import { cn } from "@/lib/utils";
import About from "@/pages/About";
import Branches from "@/pages/Branches";
import Crops from "@/pages/Crops";
import CustomerCrops from "@/pages/CustomerCrops";
import Deliveries from "@/pages/Deliveries";
import GeoTags from "@/pages/GeoTags";
import Home from "@/pages/Home";
import InventoryItems from "@/pages/InventoryItems";
import Invoices from "@/pages/Invoices";
import Orders from "@/pages/Orders";
import ProductApplications from "@/pages/ProductApplications";
import { Shops } from "@/pages/shops";
import CreateShop from "@/pages/shops/CreateShop";
import ShopUsers from "@/pages/ShopUsers";
import Users from "@/pages/Users";

import type { RouteObject } from "react-router-dom";

export type AgriSmartRoutes = { isWrapped?: boolean } & RouteObject &
  Partial<PageSectionProps>;

export const agriSmartRoutes: AgriSmartRoutes[] = [
  { index: true, element: <Home />, title: "Dashboard" },
  { path: "home", element: <Home />, title: "Dashboard" },
  { path: "about", element: <About />, isWrapped: false },
  {
    path: "shops",
    element: <Shops />,
    title: (
      <div className="w-full flex gap-2 justify-start items-center">
        <span
          className={cn("flex text-3xl font-bold tracking-tight   text-start")}
        >
          Shops
        </span>
        <CreateShop />
      </div>
    ),
  },
  { path: "branches", element: <Branches />, title: "Branches" },
  { path: "shop-users", element: <ShopUsers />, title: "Shop Users" },
  { path: "inventory", element: <InventoryItems />, title: "Inventory" },
  { path: "orders", element: <Orders />, title: "Orders" },
  { path: "invoices", element: <Invoices />, title: "Invoices" },
  { path: "deliveries", element: <Deliveries />, title: "Deliveries" },
  { path: "crops", element: <Crops />, title: "Crops" },
  {
    path: "customer-crops",
    element: <CustomerCrops />,
    title: "Customer Crops",
  },
  {
    path: "product-applications",
    element: <ProductApplications />,
    title: "Product Applications",
  },
  { path: "geo-tags", element: <GeoTags />, title: "Geo Tags" },
  { path: "users", element: <Users />, title: "Users" },
];

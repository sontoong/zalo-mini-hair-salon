/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import { App as AntdApp, ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import dayjs from "dayjs";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import { App, Box, SnackbarProvider } from "zmp-ui";

import { getBasePath } from "./presentation/utils/zma";

import { validateMessages } from "./presentation/constants/validate-messages";
import HomePage from "./presentation/pages/HomePage";
import OrderPage from "./presentation/pages/OrderPage";
import OrderSuccessPage from "./presentation/pages/OrderSuccessPage";
import OrderCancelPage from "./presentation/pages/OrderCancelPage";
import SchedulePage from "./presentation/pages/SchedulePage";
import UserPage from "./presentation/pages/UserPage";
import OrderListPage from "./presentation/pages/OrderListPage";
import OrderDetailsPage from "./presentation/pages/OrderDetailsPage";
import RatingPage from "./presentation/pages/RatingPage";
import OrderHistoryPage from "./presentation/pages/OrderHistoryPage";
import AccountInformationPage from "./presentation/pages/AccountInformationPage";
import StoreLocationPage from "./presentation/pages/StoreLocationPage";
import RatingsPage from "./presentation/pages/RatingsPage";

import "dayjs/locale/vi";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
//change to vietnamese
dayjs.locale("vi");
//add plugins
dayjs.extend(utc);
dayjs.extend(timezone);

import { AppProvider } from "./presentation/context/AppContext";

const Layout = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <Box className="flex flex-1 flex-col overflow-hidden">
        <Outlet />
        <ToastContainer style={{ marginTop: "48px" }} />
      </Box>
    </Box>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/order",
          element: <OrderPage />,
        },
        {
          path: "/order-success",
          element: <OrderSuccessPage />,
        },
        {
          path: "/order-cancel",
          element: <OrderCancelPage />,
        },
        {
          path: "/schedule",
          element: <SchedulePage />,
        },
        {
          path: "/profile",
          element: <UserPage />,
        },
        {
          path: "/orders",
          element: <OrderListPage />,
        },
        {
          path: "/orders/:orderId",
          element: <OrderDetailsPage />,
        },
        {
          path: "/rate",
          element: <RatingPage />,
        },
        {
          path: "/ratings",
          element: <RatingsPage />,
        },
        {
          path: "/order-history",
          element: <OrderHistoryPage />,
        },
        {
          path: "/profile/account",
          element: <AccountInformationPage />,
        },
        {
          path: "/store-location",
          element: <StoreLocationPage />,
        },
      ],
    },
  ],
  { basename: getBasePath() },
);

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#92dff3",
              fontFamily:
                "'Inter',-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
            },
          }}
          form={{ validateMessages }}
          locale={viVN}
        >
          <AntdApp>
            <SnackbarProvider>
              <AppProvider>
                <RouterProvider router={router} />
              </AppProvider>
            </SnackbarProvider>
          </AntdApp>
        </ConfigProvider>
      </App>
    </RecoilRoot>
  );
};

export default MyApp;

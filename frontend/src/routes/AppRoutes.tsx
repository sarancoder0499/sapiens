import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import UserLayout from "../layouts/UserLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const HomePage = lazy(() => import("../pages/HomePage"));
const ListUserPage = lazy(() => import("../pages/user/ListUserPage"));
const AddUserPage = lazy(() => import("../pages/user/AddUserPage"));
const Loading = lazy(() => import("../components/common/Loading"));

export default function AppRoutes() {
  return (
    <>
      <Route
        path="/"
        element={
          <>
            <HomeLayout>
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            </HomeLayout>
          </>
        }
      />
      <Route
        path="/users"
        element={
          <>
            <UserLayout>
              <Suspense fallback={<Loading />}>
                <QueryClientProvider client={queryClient}>
                  <ListUserPage />
                </QueryClientProvider>
              </Suspense>
            </UserLayout>
          </>
        }
      />
      <Route
        path="/users/add"
        element={
          <>
            <HomeLayout>
              <Suspense fallback={<Loading />}>
                <QueryClientProvider client={queryClient}>
                  <AddUserPage />
                </QueryClientProvider>
              </Suspense>
            </HomeLayout>
          </>
        }
      />
    </>
  );
}

import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Loading from "../components/common/Loading";

const ServerError = lazy(() => import("../errors/ServerError"));
const NotFound = lazy(() => import("../errors/NotFound"));

export default function FallbackRoutes() {
  return (
    <>
      <Route
        path="/500"
        element={
          <HomeLayout>
            <Suspense fallback={<Loading />}>
              <ServerError />
            </Suspense>
          </HomeLayout>
        }
      />
      <Route
        path="/*"
        element={
          <HomeLayout>
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          </HomeLayout>
        }
      />
    </>
  );
}

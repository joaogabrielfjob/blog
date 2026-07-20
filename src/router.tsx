import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { AppLayout } from "./components/app-layout";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";

const rootRoute = createRootRoute({
  component: AppLayout,
  notFoundComponent: NotFoundPage,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

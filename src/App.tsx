import { Layout } from "./components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CategoriesHome } from "./components/Categories/CategoryHome";
import { ThemeProvider } from "./components/theme-provider";
import Settings from "./components/settings/Settings";
import SettingsProfile from "./components/settings/profile/SettingsProfile";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/categories",
      element: <CategoriesHome />,
    },
    {
      path: "/settings",
      element: <Settings />,
      children: [
        {
          path: "",
          element: <SettingsProfile />,
        },
        {
          path: "account",
          element: <div>Account Settings</div>,
        },
        {
          path: "appearance",
          element: <div>Appearance Settings</div>,
        },
      ],
    },
  ]);

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

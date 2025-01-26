import { Layout } from "./components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CategoriesHome } from "./components/Categories/CategoryHome";
import { ThemeProvider } from "./components/theme-provider";
import Settings from "./components/settings/Settings";
import SettingsProfile from "./components/settings/profile/SettingsProfile";
import SettingsAccount from "./components/settings/account/SettingsAccount";
import SettingsAppearance from "./components/settings/appearance/SettingsAppearance";

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
          element: <SettingsAccount />,
        },
        {
          path: "appearance",
          element: <SettingsAppearance />,
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

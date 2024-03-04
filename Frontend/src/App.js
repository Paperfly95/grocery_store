import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './pages/Root';
import './App.css';
import { Product ,loader as productLoader } from './pages/Product';
import { Home } from './pages/Home';
import { ProductDetail, loader as productDetailsLoader, action as addProductAction } from './pages/ProductDetail';
import Uebertragen from './pages/Uebertragen';
import Abrufen from './pages/Abrufen';
import { loader as basketLoader } from "./pages/Abrufen";



function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: productLoader,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/checkout",
          element: <Uebertragen />
        },
        {
          path: "/abrufen",
          element: <Abrufen />,
          loader: basketLoader
        },
        {
          path: "/products",
          element: <Product />,
          id: "product-overview-loader",
          loader: productLoader,
          children: [
            {
              path: ":id",
              id: "product-loader",
              loader: productDetailsLoader,
              action: addProductAction,
              children: [
                {
                  path: "", element: <ProductDetail />
                }
              ]
            },
          ]
        },
      ]
    }
  ])

  return (
    <div className="d-flex position-relative">
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App;



const manifestUrl =
  "https://raw.githubusercontent.com/vshaltd/kdf/main/public/tonconnect-manifest.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorCom />,
    children:[
      {
        path:"/",
        element: <Plutos />,
      },
      {
        path:"/ref",
        element: <Ref />,
      },
      {
        path:"/tasks",
        element: <Tasks />,
      },
      {
        path:"/boost",
        element: <Boost />,
      },
      {
        path:"/connect",
        element: <Connect />,
      },
    ]

  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(



  <DeviceCheck>
  <TonConnectUIProvider manifestUrl={manifestUrl}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </TonConnectUIProvider>
</DeviceCheck>

);

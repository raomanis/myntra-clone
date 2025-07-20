import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routers/App.jsx';
import {RouterProvider , createBrowserRouter} from "react-router-dom";
import Bag from './routers/Bag.jsx';
import Home from './routers/Home.jsx';
import {Provider} from "react-redux"
import myntraStore from './store/index.js';
import  "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />,/* loader: postLoader */},
      {
        path: "/bag",
        element: <Bag/>,
        /*action: createPostAction,*/
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
   <RouterProvider router={router}/>
   </Provider>
  </StrictMode>,
)

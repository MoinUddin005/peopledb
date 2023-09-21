import { createBrowserRouter } from "react-router-dom";
import DetailsView from "./pages/DetailsView";
import ListView from "./pages/ListView";

const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <ListView/>,
        },
        {
          path: "user/:id",
          element: <DetailsView/>,
        }
      ],
    },
  ]);

  export default router;
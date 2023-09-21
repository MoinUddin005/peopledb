import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './app-routing.jsx'
import MainContext from './context/MainContext.jsx'
import store from './redux/store'
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <MainContext>
      <RouterProvider router={router}/>
    </MainContext>
    </Provider>
  </React.StrictMode>,
)

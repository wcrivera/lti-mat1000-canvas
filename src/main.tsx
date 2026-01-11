// import React from 'react'
import ReactDOM from 'react-dom/client'
// redux
import { Provider } from "react-redux";
import { store } from "./store/store";
// app
import App from './App.tsx'
// css
import './index.css'
import 'katex/dist/katex.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>,
)
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(<App />, document.getElementById("root"));
// import { Provider } from "react-redux";
// import store from "./components/ReduxToolkit/app/store";
// import { makeServer } from "./components/Mirage/Server";

// For mirage
// makeServer();

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// For Auth0 Provider
// ReactDOM.render(
//   <Auth0Provider
//     domain={process.env.DOMAIN}
//     clientId={process.env.CLIENT_ID}
//     redirectUri={window.location.origin}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

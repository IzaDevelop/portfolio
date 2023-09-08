import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/appContext";
import Router from "./routes/router";

export default function () {
  return (
    <BrowserRouter>
      <AppContextProvider>
          <Router />
      </AppContextProvider>
    </BrowserRouter>
  );
}
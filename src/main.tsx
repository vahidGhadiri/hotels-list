// import { registerSW } from "virtual:pwa-register";

import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import queryClient from "./config/react-query";
import "./config/tailwind/styles/tailwind.css";
import { HotelRouter } from "./presentations";

// console.log("virtual:pwa-register loaded");
// registerSW({
//   immediate: true,
//   onNeedRefresh() {
//     console.log("New content available. Refreshing...");
//   },
//   onOfflineReady() {
//     console.log("App is ready to work offline.");
//   },
// });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <HotelRouter />
    </QueryClientProvider>
  </BrowserRouter>
);

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@shared/lib/Tanstack/queryClient.ts";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import "react-loading-skeleton/dist/skeleton.css";
import "react-day-picker/style.css";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

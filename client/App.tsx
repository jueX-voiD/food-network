import "./global.css";
import "lenis/dist/lenis.css";

import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { useLenis, getLenis } from "./hooks/use-lenis";

const queryClient = new QueryClient();

function RouteScroller() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const tryScroll = (attemptsLeft: number) => {
        const target = document.querySelector(hash);
        const lenis = getLenis();
        if (target && lenis) {
          lenis.scrollTo(hash, { offset: -80 });
        } else if (attemptsLeft > 0) {
          requestAnimationFrame(() => tryScroll(attemptsLeft - 1));
        }
      };
      tryScroll(20);
    } else {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]);

  return null;
}

const App = () => {
  useLenis();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <RouteScroller />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);

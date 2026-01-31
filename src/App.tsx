import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PenalPage from "./pages/PenalPage";
import FamilyPage from "./pages/FamilyPage";
import FAQPage from "./pages/FAQPage";
import UrgenceEnfantsPage from "./pages/UrgenceEnfantsPage";
import ViolencesConjugalesPage from "./pages/ViolencesConjugalesPage";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/avocat-penal-marseille" element={<PenalPage />} />
            <Route path="/avocat-droit-famille-marseille" element={<FamilyPage />} />
            <Route path="/faq-avocat-marseille" element={<FAQPage />} />
            <Route path="/avocat-urgence-enfants-marseille" element={<UrgenceEnfantsPage />} />
            <Route path="/avocat-violences-conjugales-marseille" element={<ViolencesConjugalesPage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

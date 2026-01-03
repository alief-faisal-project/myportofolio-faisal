import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ID" | "EN";

interface Translations {
  myProjects: string;
  projectsDescription: string;
  viewProject: string;
  contactViaWhatsapp: string;
  project1Title: string;
  project1Desc: string;
  project2Title: string;
  project2Desc: string;
  project3Title: string;
  project3Desc: string;
  project4Title: string;
  project4Desc: string;
  project5Title: string;
  project5Desc: string;
}

const translations: Record<Language, Translations> = {
  ID: {
    viewProject: "Lihat Project",
    contactViaWhatsapp: "Hubungi via WhatsApp",
    project1Title: "Website Company Profile / Showcase Product",
    project1Desc: "Website company profile untuk Busalime, menampilkan produk sabun cuci piring dengan desain modern dan responsif. Dilengkapi dengan galeri produk, informasi perusahaan, dan fitur interaktif.",
    project2Title: "Pemetaan Kelompok Petani di Kabupaten Pandeglang",
    project2Desc: "Sistem informasi geografis untuk pemetaan kelompok tani di Kabupaten Pandeglang. Membantu visualisasi data pertanian, lokasi poktan, dan analisis sebaran lahan pertanian.",
    project3Title: "Dashboard Analytics E-Commerce",
    project3Desc: "Dashboard analitik untuk platform e-commerce dengan visualisasi data penjualan, tracking inventori, dan laporan performa bisnis secara real-time.",
    project4Title: "Aplikasi Manajemen Tugas",
    project4Desc: "Aplikasi manajemen tugas dan produktivitas dengan fitur kanban board, reminder, dan kolaborasi tim untuk meningkatkan efisiensi kerja.",
    project5Title: "Landing Page Startup Teknologi",
    project5Desc: "Landing page modern untuk startup teknologi dengan animasi interaktif, responsif design, dan optimasi SEO untuk meningkatkan konversi.",
  },
  EN: {
    viewProject: "View Project",
    contactViaWhatsapp: "Contact via WhatsApp",
    project1Title: "Company Profile / Product Showcase Website",
    project1Desc: "Company profile website for Busalime, showcasing dishwashing soap products with modern and responsive design. Complete with product gallery, company information, and interactive features.",
    project2Title: "Farmer Group Mapping in Pandeglang Regency",
    project2Desc: "Geographic information system for mapping farmer groups in Pandeglang Regency. Helps visualize agricultural data, farmer group locations, and agricultural land distribution analysis.",
    project3Title: "E-Commerce Analytics Dashboard",
    project3Desc: "Analytics dashboard for e-commerce platform with sales data visualization, inventory tracking, and real-time business performance reports.",
    project4Title: "Task Management Application",
    project4Desc: "Task management and productivity application with kanban board features, reminders, and team collaboration to improve work efficiency.",
    project5Title: "Tech Startup Landing Page",
    project5Desc: "Modern landing page for tech startup with interactive animations, responsive design, and SEO optimization to increase conversions.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ID");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

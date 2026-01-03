import SocialSidebar from "@/components/SocialSidebar";
import ProjectCarousel from "@/components/ProjectCarousel";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Social Sidebar */}
      <SocialSidebar />

      {/* Main Content */}
      <main className="ml-16 md:ml-20 min-h-screen flex flex-col justify-center px-4 py-8 md:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="mb-6 md:mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3">
            {t.myProjects}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl">
            {t.projectsDescription}
          </p>
        </div>

        {/* Project Carousel */}
        <div className="w-full max-w-4xl">
          <ProjectCarousel />
        </div>
      </main>
    </div>
  );
};

export default Index;

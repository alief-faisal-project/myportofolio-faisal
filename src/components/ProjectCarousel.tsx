import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import bannerBusalime from "@/assets/banner-busalime.png";
import bannerPemetaan from "@/assets/banner-pemetaan.jpeg";

const ProjectCarousel = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: t.project1Title,
      description: t.project1Desc,
      banner: bannerBusalime,
      link: "https://busalime.vercel.app/",
    },
    {
      title: t.project2Title,
      description: t.project2Desc,
      banner: bannerPemetaan,
      link: "https://pemetaanpoktan.vercel.app/",
    },
    {
      title: t.project3Title,
      description: t.project3Desc,
      banner: "https://i.ibb.co.com/r2KzG4wN/blank.jpg",
      link: "#",
    },
    {
      title: t.project4Title,
      description: t.project4Desc,
      banner: "https://i.ibb.co.com/r2KzG4wN/blank.jpg",
      link: "#",
    },
    {
      title: t.project5Title,
      description: t.project5Desc,
      banner: "https://i.ibb.co.com/r2KzG4wN/blank.jpg",
      link: "#",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="w-full relative flex items-center gap-4">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="hidden md:flex w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:bg-accent hover:scale-110 active:scale-95 shadow-sm"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Main Card Container */}
      <div className="flex-1 flex flex-col">
        {/* Main Card */}
        <a
          href={currentProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block w-full bg-card rounded-2xl overflow-hidden border border-border shadow-sm transition-all duration-300 hover:shadow-xl"
        >
          {/* Banner Image */}
          <div className="relative h-[280px] md:h-[400px] lg:h-[450px] overflow-hidden">
            <img
              src={currentProject.banner}
              alt={currentProject.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            
            {/* Project Counter Badge */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground">
              {currentIndex + 1} / {projects.length}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {currentProject.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              {currentProject.description}
            </p>

            {/* View Project Link */}
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              <span>{t.viewProject}</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </a>

        {/* Mobile Navigation + Dots */}
        <div className="flex items-center justify-center gap-4 mt-6 md:mt-4">
          {/* Mobile Left Arrow */}
          <button
            onClick={prevSlide}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:bg-accent active:scale-95"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-foreground"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Right Arrow */}
          <button
            onClick={nextSlide}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:bg-accent active:scale-95"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="hidden md:flex w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:bg-accent hover:scale-110 active:scale-95 shadow-sm"
        aria-label="Next project"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
    </div>
  );
};

export default ProjectCarousel;

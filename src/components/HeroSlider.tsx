import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  buttons: Array<{
    text: string;
    href: string;
  }>;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'WELCOME TO A2K GROUP',
    subtitle: '',
    description:
      'Our team of experts crafts tailored digital solutions that unlock the potential of digitalization for your people, processes, and platforms.',
    backgroundImage:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    buttons: [
      { text: 'SEE WHAT WE DO', href: '#services' },
      { text: 'LEARN WITH US', href: '#academy' },
      { text: 'WORK WITH US', href: '#contact' },
    ],
  },
  {
    id: 2,
    title: 'TRANSFORMING SERVICES',
    subtitle: 'THROUGH DIGITALIZATION',
    description:
      'We develop innovative solutions that transform business processes across mobile, web, and enterprise systems.',
    backgroundImage:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    buttons: [
      { text: 'OUR SOLUTIONS', href: '#divisions' },
      { text: 'GET STARTED', href: '#contact' },
    ],
  },
  {
    id: 3,
    title: 'INNOVATION & EXCELLENCE',
    subtitle: 'IN EVERY PROJECT',
    description:
      'From internships to funding, we provide comprehensive digital innovation support through our specialized divisions.',
    backgroundImage:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    buttons: [
      { text: 'EXPLORE DIVISIONS', href: '#divisions' },
      { text: 'JOIN US', href: '#contact' },
    ],
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
      ))}
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 lg:left-12 top-1/2 transform -translate-y-1/2 text-white hover:text-[#f6ad55] z-20 transition-all duration-300 hover:scale-110 bg-black/50 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-white/30 hover:border-[#f6ad55]/50 hover:bg-black/70"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 lg:right-12 top-1/2 transform -translate-y-1/2 text-white hover:text-[#f6ad55] z-20 transition-all duration-300 hover:scale-110 bg-black/50 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-white/30 hover:border-[#f6ad55]/50 hover:bg-black/70"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center text-white w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 pb-16 sm:pb-20">
            <h1 className="font-heading text-xl leading-tight sm:text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              {currentSlideData.title}
            </h1>
            {currentSlideData.subtitle && (
              <h2 className="font-heading text-base leading-tight sm:text-xl md:text-3xl lg:text-5xl font-semibold text-slate-200 tracking-tight">
                {currentSlideData.subtitle}
              </h2>
            )}

            <p className="font-body text-xs leading-relaxed sm:text-sm md:text-base lg:text-lg text-slate-100 font-light px-2 sm:px-4 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
              {currentSlideData.description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center pt-2 sm:pt-4">
              {currentSlideData.buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 font-semibold text-xs sm:text-sm md:text-base tracking-wide transition-all duration-300 rounded-lg border-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-center ${
                    index === 0
                      ? 'bg-[#f6ad55] border-[#f6ad55] text-black hover:bg-[#ed8936] hover:border-[#ed8936] hover:shadow-[#f6ad55]/30'
                      : 'bg-zinc-900 border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 hover:shadow-zinc-900/30'
                  }`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Slide Indicators */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 md:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-0.5 sm:h-1 md:h-1.5 lg:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#f6ad55] w-4 sm:w-6 md:w-8 shadow-lg shadow-[#f6ad55]/30'
                : 'bg-white/50 hover:bg-[#f6ad55]/70 w-0.5 sm:w-1 md:w-1.5 lg:w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

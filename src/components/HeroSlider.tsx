import React, { useState, useEffect } from 'react';
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
      "We develop innovative solutions that transform business processes across mobile, web, and enterprise systems.",
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
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
        className="absolute left-2 sm:left-6 lg:left-12 top-1/2 transform -translate-y-1/2 text-white hover:text-[#f6ad55] z-20 transition-all duration-300 hover:scale-110 bg-black/40 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-white/30 hover:border-[#f6ad55]/50 hover:bg-black/60"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 lg:right-12 top-1/2 transform -translate-y-1/2 text-white hover:text-[#f6ad55] z-20 transition-all duration-300 hover:scale-110 bg-black/40 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-white/30 hover:border-[#f6ad55]/50 hover:bg-black/60"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="sm:w-7 sm:h-7" />
      </button>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-5xl mx-auto px-4 sm:px-6 pb-20 sm:pb-12">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 transition-all duration-700 tracking-tight leading-tight">
            {currentSlideData.title}
          </h1>
          {currentSlideData.subtitle && (
            <h2 className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 transition-all duration-700 text-slate-200 tracking-tight">
              {currentSlideData.subtitle}
            </h2>
          )}

          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-700 text-slate-100 font-light">
            {currentSlideData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            {currentSlideData.buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold tracking-wide transition-all duration-300 rounded-lg border-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-center ${
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

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#f6ad55] w-6 sm:w-8 shadow-lg shadow-[#f6ad55]/30' 
                : 'bg-white/50 hover:bg-[#f6ad55]/70 w-1.5 sm:w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 sm:top-8 right-2 sm:right-8 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-full backdrop-blur-sm border transition-all duration-300 ${
            isAutoPlaying
              ? 'bg-[#f6ad55]/30 border-[#f6ad55]/50 text-white'
              : 'bg-black/40 border-white/30 text-white hover:bg-black/60 hover:border-[#f6ad55]/50'
          }`}
        >
          {isAutoPlaying ? '● AUTO' : '○ MANUAL'}
        </button>
      </div>
    </section>
  );
}

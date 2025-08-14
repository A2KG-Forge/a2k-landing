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
      title: "WELCOME TO A2K GROUP",
      subtitle: "",
      description: "Our international team of mentors and experts stands ready to collaborate with you in crafting tailored digital solutions that cater to your unique needs. Together, we can unlock the potential of digitalization, extending its benefits to your people, processes, and platforms.",
      backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      buttons: [
        { text: "SEE WHAT WE DO", href: "#services" },
        { text: "LEARN WITH US", href: "#academy" },
        { text: "WORK WITH US", href: "#contact" }
      ]
    },
    {
      id: 2,
      title: "TRANSFORMING SERVICES",
      subtitle: "THROUGH DIGITALIZATION",
      description: "We specialize in developing innovative digital solutions that transform traditional business processes. Our expertise spans across mobile applications, web platforms, and enterprise systems designed to meet your organization's unique requirements.",
      backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttons: [
        { text: "OUR SOLUTIONS", href: "#divisions" },
        { text: "GET STARTED", href: "#contact" }
      ]
    },
    {
      id: 3,
      title: "INNOVATION & EXCELLENCE",
      subtitle: "IN EVERY PROJECT",
      description: "From internship programs to seed funding opportunities, we provide comprehensive support for digital innovation. Our three specialized divisions - ANGAD, ANGAT, and KASAMA - work together to deliver exceptional results.",
      backgroundImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      buttons: [
        { text: "EXPLORE DIVISIONS", href: "#divisions" },
        { text: "JOIN US", href: "#contact" }
      ]
    }
  ];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 lg:left-12 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white z-20 transition-all duration-300 hover:scale-110 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 lg:right-12 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white z-20 transition-all duration-300 hover:scale-110 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-5xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 tracking-tight leading-tight">
            {currentSlideData.title}
          </h1>
          {currentSlideData.subtitle && (
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 transition-all duration-700 text-slate-200 tracking-tight">
              {currentSlideData.subtitle}
            </h2>
          )}
          
          <p className="font-body text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-700 text-slate-100 font-light">
            {currentSlideData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {currentSlideData.buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`px-8 py-4 font-semibold tracking-wide transition-all duration-300 rounded-lg backdrop-blur-sm border-2 ${
                  index === 0 
                    ? 'bg-primary-600 border-primary-600 text-white hover:bg-primary-700 hover:border-primary-700 shadow-lg hover:shadow-xl' 
                    : 'border-white/60 text-white hover:bg-white hover:text-slate-900 hover:border-white'
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/40 hover:bg-white/60 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-8 right-8 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm border transition-all duration-300 ${
            isAutoPlaying
              ? 'bg-primary-600/20 border-primary-400/30 text-primary-200'
              : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
          }`}
        >
          {isAutoPlaying ? '● AUTO' : '○ MANUAL'}
        </button>
      </div>
    </section>
  );
}
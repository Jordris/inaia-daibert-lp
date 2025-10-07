import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "A Inaiá transformou a relação do meu filho com os estudos. Hoje ele vai para a escola com vontade e consegue se concentrar muito melhor. Sou eternamente grata!",
    author: "Maria Silva",
    role: "Mãe do João, 8 anos",
  },
  {
    text: "Profissional extremamente dedicada e empática. Conseguiu identificar as dificuldades da minha filha e trabalhar de forma personalizada. Os resultados são visíveis!",
    author: "Carlos Mendes",
    role: "Pai da Ana, 11 anos",
  },
  {
    text: "O acompanhamento foi essencial para nossa família. A Inaiá não só ajudou nosso filho, mas também nos orientou sobre como apoiá-lo em casa. Recomendo muito!",
    author: "Paula Costa",
    role: "Mãe do Pedro, 13 anos",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            O que dizem as <span className="text-primary">famílias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos de quem confia no meu trabalho
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                
                <div className="min-h-[200px] flex flex-col justify-center">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        index === currentIndex 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-95 absolute'
                      }`}
                    >
                      <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light italic">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex flex-col items-start">
                        <p className="font-semibold text-lg text-primary">
                          {testimonial.author}
                        </p>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

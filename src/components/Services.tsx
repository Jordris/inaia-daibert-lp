import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Avaliação Psicopedagógica",
    description: "Análise completa e detalhada das habilidades cognitivas, emocionais e sociais, identificando potenciais e áreas que precisam de apoio específico.",
  },
  {
    icon: Heart,
    title: "Intervenção Personalizada",
    description: "Acompanhamento individualizado com técnicas e estratégias adaptadas às necessidades de cada estudante, promovendo autonomia e confiança.",
  },
  {
    icon: Users,
    title: "Orientação Familiar e Escolar",
    description: "Suporte para pais e educadores com orientações práticas para potencializar o desenvolvimento e o aprendizado no dia a dia.",
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
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

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Como posso <span className="text-primary">ajudar</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Serviços especializados para transformar desafios em conquistas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-hover cursor-pointer ${
                visibleCards.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

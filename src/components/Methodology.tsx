import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Acolhimento e Anamnese",
    description: "Primeira conversa para conhecer a história, as dificuldades e as expectativas da família e do estudante.",
  },
  {
    number: "02",
    title: "Avaliação Detalhada",
    description: "Aplicação de instrumentos específicos para mapear habilidades cognitivas, emocionais e pedagógicas.",
  },
  {
    number: "03",
    title: "Plano de Intervenção",
    description: "Desenvolvimento de estratégias personalizadas com objetivos claros e mensuráveis para cada caso.",
  },
  {
    number: "04",
    title: "Acompanhamento Contínuo",
    description: "Sessões regulares de intervenção com reavaliação constante do progresso e ajustes quando necessário.",
  },
];

const Methodology = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const scrollProgress = entry.intersectionRatio;
            const stepIndex = Math.min(
              Math.floor(scrollProgress * steps.length * 2),
              steps.length - 1
            );
            setActiveStep(stepIndex);
          }
        });
      },
      { threshold: [0.3, 0.5, 0.7, 0.9] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Minha <span className="text-primary">Metodologia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado e humanizado em quatro etapas
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-accent transform md:-translate-x-1/2" />

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    activeStep >= index ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4'
                  }`}
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Left side (or right for odd items) */}
                    <div className={`${index % 2 === 1 ? 'md:order-2 md:text-left' : 'md:text-right'}`}>
                      <div className="inline-block">
                        <span className="text-6xl font-heading font-bold text-primary/20">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                      <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                        activeStep >= index ? 'bg-primary scale-150 shadow-lg' : 'bg-muted scale-100'
                      }`}>
                        {activeStep > index && (
                          <CheckCircle2 className="w-8 h-8 text-primary -ml-2 -mt-2" />
                        )}
                      </div>
                    </div>

                    {/* Right side (or left for odd items) */}
                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''} pl-16 md:pl-0`}>
                      <div className={`bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-2 ${
                        activeStep >= index ? 'border-primary/30' : 'border-border'
                      }`}>
                        <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

// Methodology.tsx - Versão corrigida
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
          if (entry.isIntersecting) {
            // Animate all steps sequentially
            steps.forEach((_, index) => {
              setTimeout(() => {
                setActiveStep(index + 1); // +1 para incluir o último passo
              }, index * 400);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Minha <span className="text-primary">Metodologia</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado e humanizado em quatro etapas
          </p>
        </div>

        {/* Steps Container */}
        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent transform -translate-x-1/2" />
            
            {/* Steps */}
            <div className="space-y-20">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between gap-8 transition-all duration-500 ${
                    activeStep > index ? 'opacity-100' : 'opacity-50'
                  } ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Left/Right Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-card p-6 rounded-2xl border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all">
                      <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                      activeStep > index
                        ? 'bg-primary border-primary text-white scale-110 shadow-lg'
                        : 'bg-card border-muted text-muted scale-100'
                    }`}>
                      {activeStep > index ? (
                        <CheckCircle2 className="w-8 h-8" />
                      ) : (
                        <span className="text-lg font-bold">{step.number}</span>
                      )}
                    </div>
                  </div>

                  {/* Number on Opposite Side */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <span className="text-6xl font-heading font-bold text-primary/30 hover:text-primary/50 transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex gap-6 items-start transition-all duration-500 ${
                  activeStep > index ? 'opacity-100' : 'opacity-60'
                }`}
              >
                {/* Timeline Column */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {/* Timeline Dot */}
                  <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                    activeStep > index
                      ? 'bg-primary border-primary text-white scale-105 shadow-lg'
                      : 'bg-card border-muted text-muted'
                  }`}>
                    {activeStep > index ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <span className="text-sm font-bold">{step.number}</span>
                    )}
                  </div>
                  
                  {/* Timeline Line (except last) */}
                  {index < steps.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-primary to-primary/30 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="bg-card p-6 rounded-2xl border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-heading font-bold text-primary/50">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
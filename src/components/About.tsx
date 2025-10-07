import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Olá, sou a Inaiá
            </h2>
          </div>

          <div className={`space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p>
              Acredito que cada criança e adolescente tem um potencial único esperando para ser descoberto. 
              Minha paixão é ajudar famílias a identificarem e superarem desafios de aprendizagem, 
              transformando dificuldades em oportunidades de crescimento.
            </p>
            
            <p>
              Com uma abordagem centrada no indivíduo, trabalho de forma personalizada, 
              respeitando o ritmo e as características de cada estudante. Meu objetivo é 
              criar um ambiente acolhedor onde a confiança floresce e o aprendizado acontece 
              de forma natural e prazerosa.
            </p>

            <p>
              Mais do que técnicas e metodologias, ofereço empatia, escuta ativa e um 
              compromisso genuíno com o bem-estar e o desenvolvimento pleno de cada pessoa 
              que passa pelo meu consultório.
            </p>
          </div>

          <div className={`pt-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block">
              <p className="font-heading text-3xl text-primary italic">Inaiá Daibert</p>
              <p className="text-sm text-muted-foreground mt-1">Psicopedagoga Clínica</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

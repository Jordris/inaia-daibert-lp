import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é psicopedagogia?",
    answer: "A psicopedagogia é uma área que estuda o processo de aprendizagem, identificando e tratando dificuldades que podem estar relacionadas a aspectos cognitivos, emocionais, sociais ou pedagógicos. O objetivo é promover um aprendizado eficaz e prazeroso.",
  },
  {
    question: "Quando procurar um psicopedagogo?",
    answer: "É recomendado buscar ajuda quando a criança ou adolescente apresenta dificuldades persistentes na escola, como baixo rendimento, falta de concentração, problemas de leitura ou escrita, desmotivação para estudar, ou quando há queixas frequentes dos professores.",
  },
  {
    question: "Como funciona o processo de avaliação?",
    answer: "A avaliação psicopedagógica envolve entrevistas com a família e o estudante, observação do comportamento, aplicação de testes específicos e análise de materiais escolares. Todo o processo é individualizado e respeita o ritmo de cada pessoa.",
  },
  {
    question: "Quanto tempo dura o acompanhamento?",
    answer: "A duração varia de acordo com cada caso. Após a avaliação inicial, estabelecemos um plano de intervenção com objetivos claros. O acompanhamento é reavaliado periodicamente para garantir os melhores resultados.",
  },
  {
    question: "O atendimento é presencial ou online?",
    answer: "Ofereço atendimento tanto presencial quanto online, sempre buscando a modalidade que melhor se adapta às necessidades da família e do estudante. Ambas as formas são igualmente eficazes quando bem conduzidas.",
  },
];

const FAQ = () => {
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
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre psicopedagogia e meu trabalho
          </p>
        </div>

        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

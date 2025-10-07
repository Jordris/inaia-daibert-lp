// Contact.tsx - Versão ajustada para mobile
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve. Obrigada!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 px-4">
            Vamos conversar sobre o futuro do seu <span className="text-primary">filho(a)</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Entre em contato e agende uma primeira conversa sem compromisso
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6 px-2 sm:px-0">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm sm:text-base">Nome completo</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-2 focus:border-primary h-12 sm:h-14 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-2 focus:border-primary h-12 sm:h-14 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Conte um pouco sobre o que você precisa..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-card border-2 focus:border-primary resize-none text-sm sm:text-base min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-semibold text-base sm:text-lg py-4 sm:py-6 rounded-xl shadow-lg hover:shadow-hover transition-all duration-300 group"
              >
                Enviar mensagem
                <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} px-2 sm:px-0`}>
            <div className="bg-card p-6 md:p-8 rounded-2xl border-2 border-border shadow-md">
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4 md:mb-6">
                Outras formas de contato
              </h3>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground mb-1 text-sm md:text-base">E-mail</p>
                    <a 
                      href="mailto:contato@inaiadaibert.com.br" 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base break-words"
                    >
                      contato@inaiadaibert.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground mb-1 text-sm md:text-base">WhatsApp</p>
                    <p className="text-muted-foreground mb-2 text-sm md:text-base">(11) 99999-9999</p>
                    <Button
                      onClick={handleWhatsApp}
                      variant="outline"
                      size="sm"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-xs md:text-sm"
                    >
                      Iniciar conversa
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary p-6 md:p-8 rounded-2xl text-primary-foreground shadow-lg">
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-3">
                Horário de atendimento
              </h3>
              <p className="opacity-90 text-sm md:text-base">
                Segunda a sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
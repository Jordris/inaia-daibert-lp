const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold">Inaiá Daibert</h3>
          <p className="text-primary-foreground/80">
            Psicopedagoga Clínica
          </p>
          <p className="text-sm text-primary-foreground/60 max-w-2xl mx-auto">
            Desvendando potenciais, construindo futuros. Apoio especializado para crianças e adolescentes.
          </p>
          <div className="pt-6 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Inaiá Daibert. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

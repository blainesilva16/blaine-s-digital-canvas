const Footer = () => (
  <footer className="py-12 border-t border-border/50">
    <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Blaine Silva
      </p>
      <p className="font-mono-data text-xs text-muted-foreground tracking-wider">
        Precisão · Escalabilidade · Dados
      </p>
    </div>
  </footer>
);

export default Footer;

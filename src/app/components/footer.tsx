export default function Footer() {
  return (
    <div>
      <p>&copy; {new Date().getFullYear()} Flickify. Todos os direitos reservados.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="underline">Política de Privacidade</a>
          <a href="#" className="underline">Termos de Uso</a>
          <a href="#" className="underline">Suporte</a>
        </div>
    </div>
  );
}

'use client';

import '@fontsource-variable/geist-mono';
import CopyEmail from "./components/copyEmail";
import CallToAction from "./components/callToAction";
import Footer from "./components/footer";
import Plans from "./components/plans";
import Benefits from "./components/benefits";

export default function PricingPage() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900 font-geist-mono">
      <section id="top">
        <nav  className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
          <a href="#top" onClick={scrollToSection} className="text-2xl font-bold text-w">
            <h1 className="text-2xl font-bold text-w">Flicki
              <span className="text-purple-500">FY</span>
            </h1>
          </a>
          <ul className="flex space-x-6 font-semibold">
            <li><a href="#benefits" onClick={scrollToSection} className="hover:text-purple-500 transition">Benefícios</a></li>
            <li><a href="#plans" onClick={scrollToSection} className="hover:text-purple-500 transition">Planos</a></li>
            <li><a href="#contact" onClick={scrollToSection} className="hover:text-purple-500 transition">Contato</a></li>
          </ul>
        </nav>

        <div className="h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <h1 className="text-5xl font-bold">Gerencie seus agendamentos com facilidade</h1>
          <p className="mt-4 mb-10 text-lg max-w-2xl">
            Flickify simplifica a gestão de horários para barbearias, salões de beleza e mais.
          </p>
          <button className="mt-10 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
            Comece agora
          </button>
        </div>
      </section>

      {/* Benefícios */}
      <section id="benefits" className="py-20 px-6 text-center bg-white">
        <Benefits />
      </section>

      {/* Planos e Preços */}
      <section id="plans" className="py-20 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center">
        <Plans />
      </section>

      <section id="contact" className="py-20 px-6 bg-white text-white text-center">
          <CopyEmail />
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center">
        <CallToAction />
      </section>
      
      <footer className="bg-gray-800 text-white py-6 text-center">
        <Footer />
      </footer>
    </div>
  );
}

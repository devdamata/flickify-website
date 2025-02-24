'use client';

import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import '@fontsource-variable/geist-mono';

export default function PricingPage() {
  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 font-geist-mono">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold text-w">Flicki<span className="text-purple-500">FY</span></h1>
        <ul className="flex space-x-6 font-semibold">
          <li><a href="#benefits" className="hover:text-purple-500 transition">Benefícios</a></li>
          <li><a href="#plans" className="hover:text-purple-500 transition">Planos</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold">Gerencie seus agendamentos com facilidade</h1>
        <p className="mt-4 mb-10 text-lg max-w-2xl">
          Flickify simplifica a gestão de horários para barbearias, salões de beleza e mais.
        </p>
        <button className="mt-10 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
          Comece agora
        </button>
      </section>

      {/* Benefícios */}
      <section id="benefits" className="py-20 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-10">Por que usar o Flicki<span className="text-purple-500">FY?</span></h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Gestão Descomplicada</h3>
            <p className="mt-2">Gerencie serviços e horários com facilidade.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Agendamentos Online</h3>
            <p className="mt-2">Seus clientes marcam horários de forma rápida e intuitiva.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Personalização Total</h3>
            <p className="mt-2">Adapte cores e logo para fortalecer sua marca.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Adeus ao Caderninho</h3>
            <p className="mt-2">Digitalize sua agenda e ganhe mais tempo.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Automação Inteligente</h3>
            <p className="mt-2">Agendamentos automáticos para otimizar seu negócio.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Profissionalização</h3>
            <p className="mt-2">Transforme seu negócio com uma plataforma moderna.</p>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section id="plans" className="py-20 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-10">Escolha o plano ideal para você</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded-lg shadow-md bg-white text-flickifyPretoText flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-flickifyPretoText">Básico</h3>
            <p className="mt-2 text-sm text-gray-600">Ideal para pequenos negócios.</p>
            <div className="border-t border-gray-300 my-6"></div>
            <ul className="text-[12px] text-gray-600 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Até 1 profissional cadastrado
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Até 100 clientes cadastrados
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Link de agendamento com logo FlickiFY
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Confirmação do agendamento via e-mail
              </li>
            </ul>
            <div className="mt-auto">
              <p className="mt-4 text-3xl font-bold">R$37/mês</p>
              <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition">
                Assinar
              </button>
            </div>
          </div>
          <div className="p-6 border rounded-lg shadow-md  bg-indigo-100 text-gray-900 flex flex-col h-full">
            <h3 className="text-2xl font-semibold">Premium</h3>
            <p className="mt-2 text-gray-600">Para grandes empresas.</p>
            <div className="border-t border-gray-300 my-6"></div>
            <ul className="text-[12px] text-gray-600 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Até 10 profissionais cadastrados
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Até 1000 clientes cadastrados
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Link de agend. com logo prórpio
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Confirmação do agendamento via e-mail
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Subdomínio com o seu nome
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Lembrete via e-mail e WhatsApp
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Gestão de clientes
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Gestão de caixa
              </li>
            </ul>
            <div className="mt-auto">
              <p className="mt-4 text-3xl font-bold">R$197/mês</p>
              <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition">
                Assinar
              </button>
            </div>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-white text-gray-900 flex flex-col h-full">
            <h3 className="text-2xl font-semibold">Profissional</h3>
            <p className="mt-2 text-gray-600">Para empresas em crescimento.</p>
            <div className="border-t border-gray-300 my-6"></div>
            <ul className="text-[12px] text-gray-600 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Até 2 profissionais cadastrados
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Até 200 clientes cadastrados
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Link de agendamento com logo próprio
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
                Confirmação do agendamento via e-mail
              </li>
            </ul>
            <div className="mt-auto">
              <p className="mt-4 text-3xl font-bold">R$67/mês</p>
              <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition">
                Assinar
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Flickify. Todos os direitos reservados.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="underline">Política de Privacidade</a>
          <a href="#" className="underline">Termos de Uso</a>
          <a href="#" className="underline">Suporte</a>
        </div>
      </footer>
    </div>
  );
}

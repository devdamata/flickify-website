import { CheckCircle } from "lucide-react";

export default function Plans() {
  return (
    <div>
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
    </div>
  );
}

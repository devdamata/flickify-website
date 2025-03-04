export default function CallToAction() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-gray-900 border border-stone-600 rounded-lg p-10 max-w-2xl text-center">
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-indigo-600 mb-4">
          <span className="text-white text-xl">🚀</span>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-white">
          Ainda não tem certeza?
        </h2>
        <p className="text-gray-400 mb-6">
          Experimente nossos recursos gratuitamente e descubra como podemos
          transformar seus projetos.
        </p>
        <button className="bg-purple-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition">
          Experimentar Agora →
        </button>
        <p className="text-gray-600 mt-4 text-sm">
          Experimente sem compromisso
        </p>
      </div>
    </div>
  );
}

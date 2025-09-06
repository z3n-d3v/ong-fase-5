export const ContactForm = () => {
  return (
    <section className="container mx-auto bg-white py-12 px-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fale Conosco</h2>
      <p className="text-gray-600 mb-8">
        Tem interesse em participar da rede ou quer saber mais? Preencha o
        formulário abaixo:
      </p>

      <form className="space-y-6 max-w-2xl">
        {/* Nome */}
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nome
          </label>
          <input
            type="text"
            id="nome"
            required
            placeholder="Joao Silva"
            pattern="^[A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõç]+ [A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõç]+$"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
          />
          <p className="mt-1 text-sm text-gray-500">
            Nome completo, composto ao menos de nome e sobrenome. Primeira letra
            maiúscula em cada palavra.
          </p>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            placeholder="joao_silva@email.com"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
          />
        </div>

        {/* Categoria */}
        <div>
          <label
            htmlFor="categoria"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Categoria
          </label>

          <div className="relative">
            <select
              id="categoria"
              required
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Selecione...</option>
              <option value="agricultor">Agricultor</option>
              <option value="mercado">Mercado</option>
              <option value="outro">Outro</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>

        {/* Mensagem */}
        <div>
          <label
            htmlFor="mensagem"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mensagem
          </label>
          <textarea
            id="mensagem"
            rows={4}
            minLength={30}
            maxLength={500}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
          ></textarea>
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          Enviar
        </button>
      </form>
    </section>

  )
}
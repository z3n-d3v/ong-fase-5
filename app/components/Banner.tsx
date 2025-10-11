import { ContractorMap } from "./ContractorMap"

export const Banner = () => {
  return (
    <>
      <section className="bg-gray-100 text-center py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-normal text-gray-800 mb-4">
            Conectando quem planta com quem precisa
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fortalecendo a agricultura familiar e combatendo a fome com base na ODS 2.
          </p>
        </div>
      </section>

      <section className="container-flex bg-white text-center py-12 px-16">
        <h2 className="text-4xl text-left font-semibold text-gray-800 mb-6">
          Nossa Missão
        </h2>
        <p className="text-gray-700 text-left leading-relaxed max-w-full">
          A Integra atua com base nos Objetivos de Desenvolvimento Sustentável 2.3
          e 2.4 da ONU, promovendo a conexão entre pequenos produtores, mercados
          locais e programas governamentais. Nosso objetivo é garantir o
          escoamento justo da produção agrícola familiar e combater a mortalidade
          dos pequenos negócios rurais.
        </p>
      </section>

      <section className="bg-gray-100 py-12 px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* <!-- Item 1 --> */}
            <div>
              <h5 className="text-lg font-medium text-gray-800 mb-2">
                Cadastro de Produtores
              </h5>
              <p className="text-gray-600">
                Produtores criam perfis com seus produtos e localizações.
              </p>
            </div>

            {/* <!-- Item 2 --> */}
            <div>
              <h5 className="text-lg font-medium text-gray-800 mb-2">
                Conexão com Clientes
              </h5>
              <p className="text-gray-600">
                Mercados, escolas e programas públicos acessam os catálogos locais.
              </p>
            </div>

            {/* <!-- Item 3 --> */}
            <div>
              <h5 className="text-lg font-medium text-gray-800 mb-2">
                Logística Facilitada
              </h5>
              <p className="text-gray-600">
                A ONG Integra ajuda a conectar e estruturar essa cadeia de valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Benefícios
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>Fortalecimento da economia local</li>
            <li>Redução de desperdício de alimentos</li>
            <li>Estímulo à alimentação saudável</li>
            <li>Valorização da agricultura familiar</li>
          </ul>
        </div>
      </section>
      
      <section className="bg-gray-100 text-center py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-normal text-gray-800 mb-4">
            Mapa de Parceiros
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossos distribuidores e fornecedores atuais
          </p>
        </div>
      </section>

      <ContractorMap  />
    </>
  )
}
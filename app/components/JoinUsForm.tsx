import { useState } from "react";
import axios from "axios";

export const JoinUsForm = () => {
  const [form, setForm] = useState({
    nome: "Joao",
    email: "",
    categoria: "agricultor",
    mensagem: "Olá quero fazer parte",
    location: "",
    dob: "",
    culture: "Milho",
    interest: 'supply',
    cep: "",
  });

  const [address, setAddress] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const fetchAddress = async (value) => {
    const request = await axios.get(`https://brasilapi.com.br/api/cep/v2/${value}`)

    setAddress(request.data)
  };

  const fetchGeoLocation = () => {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          handleChange({ target: { name: 'location', value: `${latitude}, ${longitude}` } });

          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          // You can now use these coordinates, for example, to display on a map.
        },
        (error) => {
          // Handle errors, such as user denying permission or location not available
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.error("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              console.error("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      /* geolocation IS NOT available */
      console.error("Geolocation is not supported by this browser.");
    }
  }

  const getLocation = (args) => {
    fetchAddress(form.cep);
    fetchGeoLocation();
  }

  const handleSubmit = () => {
    if (form.location && typeof form.location === 'string') {
      const records = JSON.parse(localStorage.getItem('stakeholders'));

      const updatedRecords = [...records, form];

      localStorage.setItem('stakeholders', JSON.stringify(updatedRecords));

      alert('Processando cadastro!');
    } else {
      alert('Opa! Falta o campo da localização!');
    }
  }

  return (
    <>
      <section className="container mx-auto bg-white py-12 px-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Crie seu cadastro</h2>
        <p className="text-gray-600 mb-8">
          Tem interesse em participar da rede? Preencha o
          formulário abaixo:
        </p>

        <form className="space-y-6 max-w-2xl" onSubmit={handleSubmit}>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
                onChange={handleChange}
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

          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Data de Nascimento
            </label>

            <input onChange={handleChange} name="dob" type="date" required />
          </div>

          <div>
            <label
              htmlFor="cep"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              CEP
            </label>

            <div className="flex flex-row justify-around gap-2 align-center">
              <input
                type="text"
                id="cep"
                name="cep"
                required
                placeholder="280133-185"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
                onChange={handleChange}
              />

              <button type="button" className="btn bg-emerald-400 px-2 rounded text-white h-11" onClick={getLocation}>Pesquisar</button>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              Insira seu CEP, vamos procurar pela sua localidade. Seu CEP é indispensável no processo.
            </p>
          </div>

          {address && (
            <div>
              <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="border border-gray-400 lg:border lg:border-gray-400 bg-white rounded lg:rounded p-4 flex flex-col justify-between leading-normal">
                  <p className="mt-1 text-sm text-gray-500">Estado: {address.state}</p>
                  <p className="mt-1 text-sm text-gray-500">Cidade: {address.city}</p>
                  <p className="mt-1 text-sm text-gray-500">Localidade: {address.neighborhood}</p>
                  <p className="mt-1 text-sm text-gray-500">Rua: {address.street}</p>
                </div>
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="culture"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tipo de Cultura
            </label>
            <input
              name="culture"
              type="text"
              id="culture"
              onChange={handleChange}
              required
              placeholder="Milho"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
            <p className="mt-1 text-sm text-gray-500">
              O tipo de itens sendo cultivados.
            </p>
          </div>

          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mercado de Interesse
            </label>

            <div className="relative">
              <select
                name="interest"
                id="interest"
                required
                onChange={handleChange}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="">Selecione...</option>
                <option value="local">Local</option>
                <option value="reshare">Redistribuição</option>
                <option value="supply">Fornecimento</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
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
    </>
  )
}
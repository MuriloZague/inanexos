import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { Card } from './components/Card';
import type { Formulario } from './types';
import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from "react";
import Footer from './components/Footer';


const App: React.FC = () =>  {
    const [formularios, setFormularios] = useState<Formulario[]>([]);
    const [busca, setBusca] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
    fetch("/forms.json")
      .then((res) => res.json())
      .then((data) => setFormularios(data))
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  const filtrados = formularios.filter((form) =>
    form.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    form.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className='flex flex-col gap-10 mb-6'>

      <Header subtitle='Todos os formulários/arquivos necessários estão aqui' color='blue-800' />
      <SearchBar onChange={setBusca} value={busca}/>
    
      <a className="text-center text-blue-800 font-bold cursor-pointer hover:underline" onClick={() => navigate("/antigos")}>Acessar formulários antigos</a>

      {filtrados.length === 0 ? (
        <p className="text-gray-500 text-center mt-8">
          Nenhum formulário encontrado.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 sm:mx-24">
          {filtrados.map((form) => (
            <Card color='blue-800' key={form.id} form={form} />
          ))}
        </div>
      )}

      <Footer />
    </section>
  );
};
export default App;
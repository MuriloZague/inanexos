import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import { Card } from '../components/Card';
import type { Formulario } from '../types';

import React, { useEffect, useState } from "react";
import Footer from '../components/Footer';


const Unused: React.FC = () =>  {
    const [formularios, setFormularios] = useState<Formulario[]>([]);
    const [busca, setBusca] = useState("");

    useEffect(() => {
    fetch("/forms-antigos.json")
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

      <Header subtitle='Formulários antigos/em desuso' color='orange-400' />
      <SearchBar onChange={setBusca} value={busca}/>
    
      {filtrados.length === 0 ? (
        <p className="text-gray-500 text-center mt-8">
          Nenhum formulário encontrado.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 sm:mx-24">
          {filtrados.map((form) => (
            <Card color='orange-400' key={form.id} form={form} />
          ))}
        </div>
      )}

      <Footer />
    </section>
  );
};
export default Unused;
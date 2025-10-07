import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { Card } from './components/Card';
import type { Formulario } from './types';

import React, { useEffect, useState } from "react";


const App: React.FC = () =>  {
    const [formularios, setFormularios] = useState<Formulario[]>([]);
    const [busca, setBusca] = useState("");

    useEffect(() => {
    fetch("./public/forms.json")
      .then((res) => res.json())
      .then((data) => setFormularios(data))
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  const filtrados = formularios.filter((form) =>
    form.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    form.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className='flex flex-col gap-10'>

      <Header />
      <SearchBar onChange={setBusca} value={busca}/>

      {filtrados.length === 0 ? (
        <p className="text-gray-500 text-center mt-8">
          Nenhum formulário encontrado.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-60">
          {filtrados.map((form) => (
            <Card key={form.id} form={form} />
          ))}
        </div>
      )}

    </section>
  );
};
export default App;
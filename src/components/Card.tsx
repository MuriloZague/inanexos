import React from "react";
import type { Formulario } from "../types";
import { FileText, Calendar, Download } from "lucide-react";

interface CardProps{
  form: Formulario;
  blue: boolean;
}

export const Card: React.FC<CardProps> = ({ form, blue }) => {
  
  return (
    <div className="bg-white rounded-lg border-2 border-[#5c708a] hover:border-[#bedbff] hover:shadow-lg transition">

      <div className="p-6">
      <div className="flex items-center mb-3">
        <FileText className="h-5 w-5 mr-2 hidden sm:block text-[#004db3]"/>
        <h2 className="text-xl font-semibold text-[#00214d]">{form.titulo}</h2>
      </div>
      <p className="text-[0.75rem] text-[#002c66] font-semibold bg-[#e0e9f5] max-w-max px-3 py-1 rounded-3xl">{form.categoria}</p>

      <p className="text-[#5c708a] text-[1rem] mt-4 sm:h-10">{form.descricao}</p>
      </div>

      <div className="border-t border-gray-300 sm:px-6 px-3 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Calendar className="text-[#5c708a] h-4 w-4 mr-1"/>
          <p className="text-[#5c708a] text-[0.9rem]">Atualizado em {form.date}</p>
        </div>
        <div>
          <a href={`/forms/${form.link}`} download className={`hover:cursor-pointer transition text-white flex py-[0.4rem] px-3 rounded-md items-center`} style={{backgroundColor: blue ? "#193cb8" : "#ff8904"}}>
            <Download className="h-4 w-4 mr-2"/>
            <p>Baixar PDF</p>
          </a>
        </div>
      </div>
    </div>
  );
};
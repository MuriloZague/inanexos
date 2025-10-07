import { FileSpreadsheet} from "lucide-react";

function Header() {
    return (
        <section className="bg-[#004db3] p-10">
            <div className="text-white flex flex-col justify-center items-center">
                <div className="flex text-4xl mb-2">
                    <FileSpreadsheet className="h-10 w-10 mr-3"/>
                    <p className="font-bold">Central de Formulários INSS</p>
                </div>
                <p className="text-lg">Todos os formulários/arquivos necessários estão aqui</p>
            </div>
        </section>
    );
}

export default Header;
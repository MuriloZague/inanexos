import { FileSpreadsheet} from "lucide-react";
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();
    
    return (
        <section className="bg-[#004db3] p-10 text-center">
            <div className="text-white flex flex-col justify-center items-center">
                <div className="flex text-4xl mb-2" onClick={() => navigate("/")}>
                    <FileSpreadsheet className="h-10 w-10 mr-3 hidden sm:block"/>
                    <p className="font-bold">Central de Formulários INSS</p>
                </div>
                <p className="text-lg">Todos os formulários/arquivos necessários estão aqui</p>
            </div>
        </section>
    );
}

export default Header;
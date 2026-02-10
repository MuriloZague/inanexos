import { FileSpreadsheet} from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface HeaderProps{
    subtitle: string;
    blue: boolean;
}

function Header({subtitle, blue}: HeaderProps) {
    const navigate = useNavigate();
    return (
        <section className={`${blue ? "bg-blue-800" : "bg-orange-400"} p-10 text-center`}>
            <div className="text-white flex flex-col justify-center items-center cursor-pointer" onClick={() => navigate("/")}>
                <div className="flex text-4xl mb-2">
                    <FileSpreadsheet className="h-10 w-10 mr-3 hidden sm:block"/>
                    <p className="font-bold">Central de Formulários INSS</p>
                </div>
                <p className="text-lg">{subtitle}</p>
            </div>
        </section>
    );
}
export default Header;
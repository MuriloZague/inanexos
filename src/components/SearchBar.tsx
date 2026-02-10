import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <div className="relative w-full sm:max-w-2xl max-w-72 mx-auto flex items-center">
            <Search className="absolute left-3 h-5 w-5"/>
            <input 
                type="text" 
                placeholder="Digite o nome do formulário"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="cursor-pointer absolute right-3 text-[14px] font-stretch-200% bg-[#0a63d8] rounded-full p-2 pt-0.5 pb-0.5 text-white" onClick={() => onChange("")}>X</p>
        </div>
    );
}
export default SearchBar;
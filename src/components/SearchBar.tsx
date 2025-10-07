import { Search } from "lucide-react";


interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <Search className="absolute left-3 top-[35%] -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input 
                type="text" 
                placeholder="Digite o nome do formulário"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="pl-10 w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default SearchBar;
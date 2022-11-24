import { createContext, useContext } from "react";
import { tableContextType} from "../Types";

const TableContext = createContext<tableContextType | null>(null);

const useTableContext = () =>{
    const context = useContext(TableContext);
    if(!context){
        throw new Error('useTableContext shoudl be used within the TableContext Provider')
    }
    return context;
}

export { TableContext,useTableContext}
import { createContext,ReactNode,useContext } from "react";
import { Note } from "../Interfaces/interface";


interface NoteContextType {
    notes: Note[];
    addNote:(note:Note)=>void;
    updateNote:(id:number,note:Note)=>void;
    deleteNote:(id:number)=>void;
    toggleComplete:(id:number)=>void;
}


const NoteContex = createContext<NoteContextType>({
    notes:[{
        id:1,
        name:"Context API",
        notes:"There are 3 ways to impliment Context API",
        color:"#ffffff",
        completed:false,
    }],
    addNote:(note:Note)=>{},
    updateNote:(id:number,note:Note)=>{},
    deleteNote:(id:number)=>{},
    toggleComplete:(id:number)=>{},
})

export const useNote=()=>{
    return useContext(NoteContex);
}

interface NoteProviderProps {
    value:NoteContextType;
    children:ReactNode;
}

export const NoteContexProvider:React.FC<NoteProviderProps> =({value,children})=>{
    return <NoteContex.Provider value={value}>{children}</NoteContex.Provider>
}
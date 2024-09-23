import React, { useState } from "react";
import { Note } from "../Interfaces/interface";
import { useNote } from "../Context/NoteContext";
interface Prop {
  note: Note;
  id?:number;
}

const NoteItem: React.FC<Prop> = ({ note ,id}) => {
  const [isCompleted,setIsCompleted] = useState<boolean>(false);
  const [isEdit,setIsEdit] = useState<boolean>(false)
  const [noteMess,setNoteMess] = useState<string>(note.notes); 
  const {deleteNote,updateNote} = useNote();
  return (  
    <div style={{ backgroundColor: note.color }} className={`${note.color === "#000000" ?"text-slate-200":"text-slate-800"} w-80 p-2`} key={id}>
      <div className="flex relative">
        <div className="text-2xl"> {note.name}</div>
        <button
          onClick={() => deleteNote(note.id)}
          className="absolute top-0 right-1  text-xs bg-white rounded-full font-bold p-1"
        >
          ❌
        </button>
        <button
          onClick={() => {return (updateNote(note.id,{...note,notes:noteMess}),setIsEdit((pre)=>!pre))}}
          className="absolute top-0 right-14 text-xs bg-white rounded-full font-bold p-1"
        >
          ✏️
        </button>
        <input
          type="checkbox"
          onClick={() => setIsCompleted((pre) => !pre)}
          className="absolute top-[0.15rem] right-8 h-5 w-5"
        />
      </div>
      <textarea
      readOnly={!isEdit}
      value={noteMess}
      onChange={(e)=>setNoteMess(e.target.value)}
      className={`border-black/10 bg-transparent overflow-y-scroll p-1 m-1 h-44 w-72  ${isCompleted ? "line-through" : ""} ${isEdit ? "border-2 rounded-xl pl-1  border-white" : ""}`}
      />
    </div>
  );
};

export default NoteItem;

import React, { useEffect, useState } from "react";
import { Note } from "./Interfaces/interface";
import NoteItem from "./Components/NoteItem";
import { NoteContexProvider, useNote } from "./Context/NoteContext";

const Notes: React.FunctionComponent = () => {
  const [note, setNote] = useState<Note>({
    id: 0,
    name: "",
    notes: "",
    color: "",
    completed: false,
  });
  const [notes, setNotes] = useState<Note[]>([]);
  // const [notes1, setNotes1] = useState<Note1[]>([]);
  const length: number = notes.length;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log({ ...note, [e.target.name]: e.target.value })
  };
  const addNote = () => {
    const newId: number = notes.length > 0 ? notes[0].id + 1 : 1;
    const newNote: Note = { ...note, id: newId };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id: number) => {
     setNotes((prev) => prev.filter((note) => note.id !== id));
  };
  const updateNote = (id:number,note:Note):void => {
    setNotes((preNote)=>preNote.map((noteItem)=>(noteItem.id===id?note:noteItem)))
  };
  const toggleComplete = () => {};


  return (
    <NoteContexProvider
      value={{ notes, addNote, deleteNote, updateNote, toggleComplete }}
    >
      <div className="bg-gray-200 flex flex-col items-center justify-center ">
        <div className="flex flex-col justify-center items-center gap-4 border-2 border-gray-500 rounded-md p-2">
          <h1 className="p-2 text-3xl">Notes Tracker</h1>
          <h2 className=" text-xl">Create A Note </h2>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="name"
            placeholder="Enter Note Name"
            className="rounded-2xl pl-2"
          />
          <textarea
            placeholder="Enter your Note "
            className="rounded-xl w-full pl-2 h-32"
            name="notes"
            onChange={(e) => handleChange(e)}
          />
          <div className="flex w-full justify-evenly">
            <input
              type="color"
              name="color"
              className="  p-0 m-0"
              onChange={(e) => handleChange(e)}
            />
            <button
              onClick={addNote}
              className="rounded-xl border border-white bg-orange-400 p-1 hover:"
            >
              Submit
            </button>
          </div>
        </div>
        {note && (
          <div className={`flex gap-3 flex-wrap w-full m-2 p-2`}>
            {notes.map((note, i) => {
              return <NoteItem note={note} id={note.id} />;
            })}
          </div>
        )}
      </div>
    </NoteContexProvider>
  );
};

export default Notes;

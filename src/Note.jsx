import { useEffect, useRef, useState } from "react";
import "./App.css";
import NoteItem from "./noteitem";
import FormTambah from "./FormTambah";
import FormEdit from "./FormEdit";
import { nanoid } from 'nanoid';
import axios from "axios";
import { addNote, deleteNote, editNote, tampilkan} from './api'


function Note() {
  const [notes, setNotes] = useState([]);
  const [isEditKilik, setIsEditKlik] = useState(null);

  const handleFetchData = async () => {
    const apiFetch = await tampilkan();
    setNotes(apiFetch.data.data ?? null)
  }

  const handleAddData = async (title,content) => {
    await addNote(title,content)
    handleFetchData()
  }

  const handleUpdate = async (id,title,content,writer) => {
    await editNote(id,title,content,writer)
    handleFetchData()
  }

  const handleDelete = async (id) => {
    await deleteNote(id);
    handleFetchData()
  }

  const Edit = (id) => {
    setCurrentNoteId(id)
  }

  const cancelEdit = () => {
    setCurrentNoteId(null);
  }

  useEffect(() => {
    handleFetchData()
  },[])

  const tampilkan = async () => {
    const notes = await axios.get('http://192.168.1.46:8000/api/v1/notes')
    .then((response) => {
      return response
      // console.log(response.data)
    })
    .catch((error) => {
      return error
    })
    console.log(notes.data.data)
    setNotes(notes.data.data) 
  }

  const addNote = async (title, content) => {
  //  setNotes ((oldNote) => {
      const noteBaru = {
        title: title,
        content: content,
        writer: 2,
      };
      // return [...oldNote, noteBaru]
      await axios.post('http://192.168.1.46:8000/api/v1/notes',noteBaru)
      .then((response) => {
        console.log(response.data)
        tampilkan()
        setNotes((oldNote) => [...oldNote, response.data]);
      })
      .catch((error) => {
        console.error('Eror adding note:', error);
      });
  };

const edit = (id) =>{
    setIsEditKlik(id);
}

  const deleteNote = async (id) => {
    const deletes = await axios.delete(`http://192.168.1.46:8000/api/v1/notes/${id}`)
    .then((response) => {
      // console.log(response.data)
      // tampilkan()
      // setNotes((oldNote) => oldNote.filter((note) => note.id !== id));
      return response
    })
    .catch((error) => {
      return error
    });
    console.log(deletes)
    alert(deletes.data)
    tampilkan()
  };

  const editNote = (id, title, content) => {
    setNotes((oldNotes) => 
    oldNotes.map((note) => (note.id === id ? { ...note, title, content } : note))
    );
    setIsEditKlik(null)
    setIsEditKlik(false);
  };

  const cancel = () => {
    setIsEditKlik(null)
  }

  return (
    <>
    <div className="App">
      <h1 className="text-center text-4xl p-5"> Notes App</h1>
      {isEditKilik ? 
      <FormEdit
       targetValue={notes.filter(e => e.id == isEditKilik)[0]}
       onEdit={editNote} 
       onCancel={cancel} 
       currentNoteId={isEditKilik} />
      : <FormTambah onAdd={addNote}/>
      }
      
      <div className="notes-container border-t-2 border-blue-300  m-10 flex flex-wrap "></div>
      <div className="flex flex-wrap">
        {notes.map((note) => (
      <NoteItem key={note.id} id={note.id} title={note.title} content={note.content} onDelete={deleteNote} onEdit={edit}/>
    ))}</div>
     

    </div>

    
    </>
  );
}

export default Note;
// import { useRef} from 'react';

// function FormEdit({onEdit, currentNoteId}) {
//     const titleInput = useRef()
//     const contentInput = useRef()

//     const handleEdit = () => {
//        const title = titleInput.current.value;
//        const content = contentInput.current.value;
//        onEdit(currentNoteId, title, content);

//        titleInput.current.value ="";
//        contentInput.current.value ="";
//     };

//     return (
//         <div className="flex flex-col">
//             <input 
//                 type="text"
//                 placeholder="title"
//                 name="title"
//                 className="border-2 border-blue-200 p-2 mb-2"
//                 ref={titleInput}/>
//             <textarea
//                 name="note"
//                 id=""
//                 cols="30"
//                 rows="5"
//                 placeholder="note"
//                 className="border-2 border-blue-200 p-2"
//                 ref={contentInput}></textarea>
//             <button onClick={handleEdit} className="bg-blue-500 px-5 py-3 text-white mt-4">Edit Note</button>
//         </div>
//     )
// }

// export default FormEdit;

import { useEffect, useRef} from 'react';

function FormEdit({onEdit, currentNoteId,notes, onCancel}) {
    const titleInput = useRef()
    const contentInput = useRef()

    useEffect(() => {
        const noteToEdit = notes.find((note) => note.id === currentNoteId);
        if (noteToEdit) {
            titleInput.current.value = noteToEdit.title;
            contentInput.current.value = noteToEdit.content;
        }
    }, [currentNoteId, notes]);

    const handleEdit = () => {
       const title = titleInput.current.value
       const content = contentInput.current.value
       onEdit(currentNoteId, title, content);

       titleInput.current.value ="";
       contentInput.current.value ="";
    };


    return (
        <div className="flex flex-col">
            <input 
                type="text"
                placeholder="title"
                name="title"
                className="border-2 border-blue-200 p-2 mb-2"
                ref={titleInput}/>
            <textarea
                name="note"
                id=""
                cols="30"
                rows="5"
                placeholder="note"
                className="border-2 border-blue-200 p-2"
                ref={contentInput}></textarea>
            <button onClick={() => handleEdit()} className="bg-blue-500 px-5 py-3 text-white mt-4">Edit</button>
            <button onClick={() => onCancel()} className="bg-blue-500 px-5 py-3 text-white mt-4">Cancel</button>
        </div>
    )
}

export default FormEdit;
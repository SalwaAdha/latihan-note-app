// import { useRef} from 'react';

// function FormTambah({onAdd}) {
//     const titleInput = useRef()
//     const contentInput = useRef()

//     const handleSubmit = () => {
//        const title = titleInput.current.value
//        const content = contentInput.current.value
//        onAdd(title, content);

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
//             <button onClick={() => handleSubmit()} className="bg-blue-500 px-5 py-3 text-white mt-4">Add Note</button>
//         </div>
//     )
// }

// export default FormTambah;

import { useRef} from 'react';

function FormTambah({onAdd}) {
    const titleInput = useRef()
    const contentInput = useRef()

    const handleSubmit = () => {
       const title = titleInput.current.value
       const content = contentInput.current.value
       onAdd(title, content);

       titleInput.current.value=""
       contentInput.current.value=""
    }

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
            <button onClick={() => handleSubmit()} className="bg-blue-500 px-5 py-3 text-white mt-4">Add Note</button>
        </div>
    )
}

export default FormTambah;
import { useState } from "react"

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return(
    <div className="bg-slate-200 space-y-4  p-6 rounded-md shadow flex flex-col">
        <input 
            type="text" 
            placeholder="Digite o título da tarefa"
            className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
           />
        
        
        <input 
            type="text" 
            placeholder="Digite a descrição da tarefa" 
            className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"  
            value={description}
            onChange={(event) => setDescription(event.target.value)}
        />
        
        <button className="bg-slate-500 px-4 py-2 rounded-md font-medium text-white" 
            onClick={() => {
                if(!title.trim() || !description.trim()){
                    return alert("Preencha o título e a descrição da tarefa.")
                }
                onAddTaskSubmit(title, description)
                setTitle("");
                setDescription("");
                }}
                >
                Adicionar
        </button>
    </div>
)}

export default AddTask
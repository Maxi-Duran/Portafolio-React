import { getAllTasks } from "../api/task.api";
import { useEffect ,useState } from "react";
function Contact() {
  const [tasks,setTasks]=useState([])
  useEffect(()=>{
    async function loadTasks(){
      const res= await getAllTasks()
      console.log(res)
    }
    loadTasks()
  },[])
  
  return (
    <div className=" m-4 sm:m-auto   flex flex-col gap-5 ">
      <h1 className="text-center text-4xl mt-10 text-black font-semibold">
        Contactame!
      </h1>
      <input
        type="text"
        placeholder="Nombre"
        className="sm:w-96  input input-bordered w-80 m-auto bg-white dark:border-white   "
      />
      <input
        type="text"
        placeholder="Correo"
        className="input input-bordered w-80 m-auto bg-white sm:w-96"
      />
      <textarea
        className="textarea textarea-bordered w-80 m-auto h-80 sm:w-96   bg-white resize-none "
        placeholder="Cuentame"
      ></textarea>
      <button className="btn btn-success w-32    m-auto mb-10">Enviar</button>
     
          {tasks.map(task=>(
            <div>
            <h1>{task.title}</h1>
            <h2>{task.description}</h2>
            </div>

          ))}
      
    </div>
  );
}

export default Contact;

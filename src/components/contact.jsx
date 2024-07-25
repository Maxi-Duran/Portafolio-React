import { sendEmail } from "../api/email.api";
import { useForm } from "react-hook-form";
import { useState } from "react";
function Contact() {
  const[message,setMessage]=useState(null);
  const{register,handleSubmit, formState:{errors}}=useForm()
 
  const onSubmit = handleSubmit((data) => {
    try{
    sendEmail(data);
    setMessage({type:'success',text:'Correo enviado Exitosamente'})
    }catch(error){
    setMessage({type:'error',text:'Error al enviar el correo'})
    }
   
  });
  return (
    <div >
      <form onSubmit={onSubmit}  className=" m-4 sm:m-auto flex flex-col gap-5 " action="">
        <h1 className="text-center text-4xl mt-10 text-black font-semibold">
          Contactame!
        </h1>
        <input
          type="text"
          placeholder="Nombre"
          className="sm:w-96  input input-bordered w-80 m-auto bg-white dark:border-white"
          {...register("name",{required:true})}
        />
        {errors.name && <span className="text-center text-red-700">Este campo es requerido</span>}
        <input
          type="text"
          placeholder="Correo"
          className="input input-bordered w-80 m-auto bg-white sm:w-96"
          {...register("email",{required:true})}
        />
        {errors.email && <span className="text-center text-red-700">Este campo es requerido</span>}
        <textarea
          className="textarea textarea-bordered w-80 m-auto h-80 sm:w-96   bg-white resize-none "
          placeholder="Cuentame"
          {...register("description",{required:true})}
        ></textarea>
        {errors.description && <span className="text-center text-red-700">Este campo es requerido</span>}
        <button  className="btn btn-success w-32    m-auto mb-10">Enviar</button>
      </form>

      {message && (
        <div className={`text-center mt-4 ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {message.text}
        </div>
       
      )}
      
          
      
    </div>
  );
}

export default Contact;

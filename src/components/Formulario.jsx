import React from 'react'

function Formulario() {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
      <h2 className='font-black text-center text-3xl'>Seguimiento pacientes</h2>
      <p className='text-center'>
        Añade pacientes y <span className='text-indigo-600'>Administralos</span>
      </p>

      <form className='bg-white rounded-lg p-3 w-4/5 m-auto'>
        <div className='mb-5'>
          <label 
            htmlFor="mascota"
            className='block font-bold uppercase w-full'>
            Nombre de la mascota
          </label>
          <input 
            type="text" 
            className='block border-2 rounded-lg p-1 w-full'
            id='mascota'/>
        </div>

        <div className='mb-5'>
          <label 
            htmlFor="dueño"
            className='block font-bold uppercase w-full'>
            Nombre del dueño
          </label>
          <input 
            type="text" 
            className='block border-2 rounded-lg p-1 w-full'
            id='dueño'/>
        </div>

        <div className='mb-5'>
          <label 
            htmlFor="email"
            className='block font-bold uppercase w-full'>
            Email
          </label>
          <input 
            type="text" 
            className='block border-2 rounded-lg p-1 w-full'
            id='email'/>
        </div>

        <div className='mb-5'>
          <label 
            htmlFor="alta"
            className='block font-bold uppercase w-full'>
            Alta
          </label>
          <input 
            type="date" 
            className='block border-2 rounded-lg p-1 w-full'
            id='alta'/>
        </div>

        <div className='mb-5'>
          <label 
            htmlFor="sintomas"
            className='block font-bold uppercase w-full'>
            Sintomas
          </label>
          <textarea 
            className='block border-2 rounded-lg p-1 w-full'
            id='sintomas'/>
        </div>

        <input 
          type="submit" 
          value="Agregar un paciente"
          className='bg-indigo-700 w-full uppercase text-white p-3 hover:bg-indigo-300 hover:cursor-pointer transition-opacity'
          />


      </form>

    </div>
  )
}

export default Formulario

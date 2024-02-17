import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes() {
  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll'> 
      <h2 className='font-black text-center text-3xl'>Listado de pacientes</h2>
      <p className='text-center'>
        Administra tus <span className='text-indigo-600'>pacientes y citas</span>
      </p>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />

    </div>
  )
}

export default ListadoPacientes

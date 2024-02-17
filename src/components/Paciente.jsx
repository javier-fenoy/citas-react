function Paciente() {

    return (
        <div 
        className='bg-white rounded-lg w-5/6 p-3 m-auto mt-1 mb-1'>
            <div>
            <p>
              <span className='uppercase font-bold'>
                Nombre:{' '}
              </span>
                Alfredo
            </p>
            <p>
              <span className='uppercase font-bold'>
                Nombre del dueño:{' '}
              </span>
                Jonny
            </p>
            <p>
              <span className='uppercase font-bold'>
                Email:{' '}
              </span>
                jonny@hotmail.com
            </p>
            <p>
              <span className='uppercase font-bold'>
                Alta:{' '}
              </span>
                01/01/2024
            </p>
            <p>
              <span className='uppercase font-bold'>
                Sintomas:{' '}
              </span>
                Fimosis felina.
            </p>
          </div>
        </div>
    )
}

export default Paciente;
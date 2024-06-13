import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
     <h1 className ='text-5xl font-black text-white'>Pagina no encontrada </h1>
     <p className ='mt-10 text-center text-white'>
        Regresar al {' '}
        <Link className = 'text-fuchsia-500' to ={'/'}></Link>
        </p> 
    </>
  )
}

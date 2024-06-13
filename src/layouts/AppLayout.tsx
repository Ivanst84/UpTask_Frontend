import { Link, Outlet,Navigate } from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Logo from "@/components/Logo"
import NavMenu from "@/components/NavMenu"
import { useAuth } from "@/hooks/useAuth"
export default function AppLayout() {

  const {data,isLoading,isError}=useAuth()
  if(isLoading){
      return <p>Cargando...</p>
  }
  if(isError){

 return <Navigate to='/auth/login'/>
  }
 if(data) 
  return (
    
    <>
    <header
    className= 'bg-gray-800 py-5'
    >
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">

       <div className="w-64 ">
        <Link to='/'>

          <Logo/>
          </Link>

       </div>
       <NavMenu
       name ={data.name}
       
       
       />

        </div>



    </header>

    <section className='max-w-screen-2xl mx-auto p-5 mt-10'>


    <Outlet/>
    </section>
    <footer className='py-5'>
        <p className='text-center'>
            Todos los derechos reservados {new Date().getFullYear()}
        </p>
    </footer>
    <ToastContainer
     pauseOnFocusLoss={false}
      pauseOnHover={false}
    
    />
    </>
  )
}

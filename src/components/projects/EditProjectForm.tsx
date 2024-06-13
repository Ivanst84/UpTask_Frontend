import ProjectForm from './ProjectForm'
import { Link, useNavigate } from 'react-router-dom'
import { Project, ProjectFormData } from '@/types/index'
import { useForm } from 'react-hook-form'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import { updateProject } from '@/api/ProjectAPI'
import { toast } from 'react-toastify'
type EditProjectFormProps = {
    data: ProjectFormData
    projectId: Project['_id']
}

export default function  EditProjectForm({data,projectId}: EditProjectFormProps)  {

 const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: {
        projectName: data.projectName,
        clientName: data.clientName,
        description:data.description
    } })
    console.log('antes de entrar al mutation')
    const queryClient = useQueryClient()
     const {mutate} = useMutation({
       mutationFn: updateProject,
       onError: (error) => {
 toast.error(error.message)       },
       onSuccess: (data) => { 
              queryClient.invalidateQueries({queryKey: ['projects']})
              queryClient.invalidateQueries({queryKey: ['editProject', projectId]})
              toast.success(data)
              navigate('/')

    } 

     })
     

     const handleForm = async (formData: ProjectFormData) => {
        try {
            console.log('Enviando datos al servidor:', formData);
            const data = {
                formData,
                projectId
            }
            await mutate(data)

        } catch (error) {
            console.error('Error en mutación:', error);
            toast.error((error as Error).message);
        } }
    return (

        <>
          <div className ='max-w-3xl mx-auto'>
            <h1 className="text-5xl font-black">Editar  Proyecto </h1>
            <p className='text-2xl font-light text-gray-500 mt-5'>
                Llena el formulario para Editar el proyecto
            </p>

            <nav className='my-5'>

                <Link className='bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors'
                    to='/'>

                    Volver a proyectos </Link>
            </nav>


            <form
                className='mt-10 bg-white shadow-lg p-10 rounded-lg'
                onSubmit={handleSubmit(async (formData) => {
                    await handleForm(formData);
                  })}
                noValidate
            >

                <ProjectForm
                
                register={register}
                errors={errors}
                />
                <input  
                
                type= 'submit'
                value ='Guardar Cambios'
                className = 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white  w-full  p-3 uppercase font-bold  cursor-pointer transition-colors'
                />




            </form>
            </div>
        </>
    )

}

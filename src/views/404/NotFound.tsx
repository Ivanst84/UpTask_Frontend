import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-6xl font-bold text-white mb-4">Página no encontrada</h1>
      <p className="mt-4 text-lg text-center text-gray-300">
        Lo sentimos, la página que buscas no existe.
      </p>
      <p className="mt-6 text-center">
        <Link 
          className="text-fuchsia-500 hover:text-fuchsia-300 transition duration-300 text-lg"
          to="/"
        >
          Regresar al inicio
        </Link>
      </p>
    </div>
  );
}
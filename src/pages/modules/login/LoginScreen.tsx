const LoginScreen = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/background.jpg)',
      }}
    >
      <form
        className="p-6 bg-white rounded-lg shadow-lg w-full max-w-xl"
        style={{ maxWidth: '700px' }}
      >
        <div className="flex justify-center mb-4">
          <img src="/images/logo.png" alt="Logo" className="h-15 w-15" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Correo electrónico:
          </label>
          <input className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Contraseña:
          </label>
          <input className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent" />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;

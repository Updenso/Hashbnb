import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h2 className="text-3xl font-bold">Faça seu login</h2>

        <form action="" className="flex w-full flex-col gap-2">
          <input
            type="email"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite seu Email"
          />
          <input
            type="password"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite sua Senha"
          />

          <button className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-500 px-4 py-2 font-bold text-white">
            Login
          </button>
        </form>
        <p>
          Ainda nao tem uma conta?{" "}
          <Link to="/register" className="font-semibold underline">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};
export default Login;

import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="h-[100vh] flex-col flex justify-center items-center">
      <h1 className="text-5xl ">Welcome To My Website</h1>
      <div className="flex gap-4 mt-4">
        <Link to="/login">
          <button className="text-white py-2 px-5 rounded-md bg-sky-500 ">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="text-white py-2 px-5 rounded-md bg-green-500">
            SignUp
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;

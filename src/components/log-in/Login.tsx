import { Link } from "react-router-dom";
import { Input, Button } from "../Shared";

const Login = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row w-4/5 mx-auto justify-between items-center h-[50%] md:h-[100vh]">
        <div className="w-[100%] md:w-[50%] lg:w-[40%]">
          <h1 className="font-semibold text-center text-2xl mb-4">Welcome Back!</h1>
          <div className="flex gap-2 flex-col">
            <Input text="Username:" />
            <Input type="password" text="Password:" />
            <Button text="login" />
            <p className="text-center mt-1 md:mt-4">
              Dont have and account?
             <Link to="/signup">
               <span className="underline cursor-pointer hover:text-[#656ED3]">Register</span>
              </Link>
            </p>
            <div className="flex gap-3 justify-center mt-4">
              <img className="cursor-pointer" src="/img/social-1.svg" alt="social-1" />
              <img className="cursor-pointer" src="/img/social-2.svg" alt="social-2" />
              <img className="cursor-pointer" src="/img/social-3.svg" alt="social-3" />
            </div>
          </div>
        </div>
          <img className="w-1/2" src="/img/login-pc.svg" alt="login-px" />
      </div>
      <img className="absolute top-0 right-0 -z-10 h-[40vh] md:h-[100vh] md:w-auto md:rotate-0 w-full object-cover rotate-0" src="/img/login-bg-pc.svg" alt="login-bg" />
      <img className="absolute bottom-0 left-0 -z-10" src="/img/login-asba-1.svg" alt="asba-1" />
      <img className="absolute bottom-0 left-0 -z-20" src="/img/login-asba-2.svg" alt="asba-2" />
    </>
  );
};

export default Login;

import { Link } from "react-router-dom";
import { Button, Input } from "../Shared";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between xl:justify-around w-4/5 mx-auto h-[100vh] ">
        <div className="relative">
          <img className="" src="/img/signup-pc.svg" alt="signUp-bg" />
          <img
            className="absolute -top-52 left-0 -z-10"
            src="/img/sign-asba-1.svg"
            alt="asbét"
          />
          <img
            className="absolute -top-52 -left-14 -z-20"
            src="/img/sign-asba-2.svg"
            alt="asbét"
          />
        </div>
        <div className="w-full lg:w-2/3 xl:w-1/3 flex flex-col gap-1 ">
          <h1 className="font-semibold text-center text-2xl mb-4">
            Please Fill out form to Register!
          </h1>
          <Input text="Full name:" />
          <Input text="Username:" />
          <Input text="Email" />
          <Input type="password" text="Password:" />
          <Input type="password" text="Confirm Password:" />
          <br />
          <Button text="Register" />
          <br />
          <p className="text-center mt-1 md:mt-4">
            Yes i have an account?
            <Link to="/login">
              <span className="underline cursor-pointer hover:text-[#656ED3]">
                Login
              </span>
            </Link>
          </p>
          <div className="flex gap-3 justify-center my-4 ">
            <img className="cursor-pointer" src="/img/social-1.svg" alt="social-1" />
            <img className="cursor-pointer" src="/img/social-2.svg" alt="social-2" />
            <img className="cursor-pointer" src="/img/social-3.svg" alt="social-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

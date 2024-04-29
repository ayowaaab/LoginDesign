
const Input = ({text,type}:{text:string;type?:string;}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="text-black font-medium">{text}</label>
        <input className="px-4 py-1 outline-none border-1 border-[#656ED3] rounded-full" type={type==="password"?"password":"text"} />
      </div>
    </>
  );
};

const Button = ({text,handelClick}:{text:string;handelClick?:()=>void}) => {
  return <>
  <button onClick={handelClick} className="hover:opacity-90 transition-all bg-[#656ED3] w-full py-2 rounded-full text-white capitalize mt-2 md:mt-5">{text}</button>
  </>;
};

export { Button,Input };

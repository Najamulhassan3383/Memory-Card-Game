import { MyContext } from "./Context";
import { useContext } from "react";

function Hero() {
  const { message } = useContext(MyContext);
  return <div className="text-4xl text-center text-white">{message}</div>;
}

export default Hero;

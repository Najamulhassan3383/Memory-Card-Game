import { useContext } from "react";
import { MyContext } from "./Context";

function Header() {
  const { score, highScore } = useContext(MyContext);
  return (
    <header className=" border-solid border-2 border-sky-500 text-white py-3">
      <h1 className="text-center text-4xl font-bold">Amphibian Memory Game</h1>

      <div className="flex justify-around">
        <h2 className="text-2xl">Score: {score}</h2>
        <h2 className="text-2xl">High Score: {highScore}</h2>
      </div>
    </header>
  );
}

export default Header;

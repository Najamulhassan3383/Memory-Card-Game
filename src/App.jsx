import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { MyContext } from "./components/Context";
import { useContext } from "react";

function App() {
  const { data, handleClick } = useContext(MyContext);

  return (
    <>
      <div className="bg-[url('./assets/diamond-sunset.svg')] w-full h-full">
        <Header />
        <Hero />
        {/* game instructions */}
        <div className="text-white text-center text-2xl">
          <p>
            Click on an image to earn points, but do not click on any more than
            once!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 my-4">
          {data.map((item) => (
            <Card
              key={item.id}
              CardID={Number(item.id)}
              name={item.name}
              image={item.img}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

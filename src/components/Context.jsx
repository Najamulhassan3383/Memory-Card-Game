import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Anne from "../assets/anne.d9d14c90.jpg";
import Croaker from "../assets/croaker.824ac0d7.png";
import Grime from "../assets/grime.6e597003.png";
import HopPop from "../assets/hoppop.5badcd86.png";
import Sasha from "../assets/sasha.5e94ec83.jpg";
import Loggle from "../assets/loggle.c5790b4e.png";
import Maddie from "../assets/maddie.794635a6.jpg";
import Polly from "../assets/polly.7702daf7.png";
import Toadstool from "../assets/toadstool.2b499bfe.jpg";
import Sylvia from "../assets/sylvia.fc5ee06d.png";
import Sprig from "../assets/sprig.57a1fbf3.png";
import Wally from "../assets/wally.8036609c.png";

const MyContext = createContext();

const cards = [
  {
    id: 1,
    name: "Anne",
    img: Anne,
  },
  {
    id: 2,
    name: "Croaker",
    img: Croaker,
  },
  {
    id: 3,
    name: "Grime",
    img: Grime,
  },
  {
    id: 4,
    name: "Hop Pop",
    img: HopPop,
  },
  {
    id: 5,
    name: "Sasha",
    img: Sasha,
  },
  {
    id: 6,
    name: "Loggle",
    img: Loggle,
  },
  {
    id: 7,
    name: "Maddie",
    img: Maddie,
  },
  {
    id: 8,
    name: "Polly",
    img: Polly,
  },
  {
    id: 9,
    name: "Toadstool",
    img: Toadstool,
  },
  {
    id: 10,
    name: "Sylvia",
    img: Sylvia,
  },
  {
    id: 11,
    name: "Sprig",
    img: Sprig,
  },
  {
    id: 12,
    name: "Wally",
    img: Wally,
  },
];

const MyProvider = ({ children }) => {
  const [data, setData] = useState(cards);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedArr, setClickedArr] = useState([]);
  const [message, setMessage] = useState("Click on a character to begin!");

  const resetGame = () => {
    let newHighScore = highScore > score ? highScore : score;
    setHighScore(newHighScore);
    setScore(0);
    setClickedArr([]);
    shuffleCards();
  };
  const shuffleCards = () => {
    const newDataArr = [...data]; // Create a shallow copy of the data array
    for (let i = newDataArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [newDataArr[i], newDataArr[j]] = [newDataArr[j], newDataArr[i]];
    }
    setData(newDataArr);
  };

  const handleClick = (id) => {
    console.log(id);
    if (clickedArr.includes(id)) {
      setMessage("You guessed incorrectly. Hard luck!");
      resetGame();
    } else {
      shuffleCards();
      setClickedArr([...clickedArr, id]);
      setScore(score + 1);
      setMessage("You guessed correctly!");
    }
  };

  return (
    <MyContext.Provider
      value={{ data, handleClick, score, highScore, message, shuffleCards }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

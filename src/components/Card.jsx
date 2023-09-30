import PropTypes from "prop-types";

function Card({ CardID, name, image, handleClick }) {
  const handleCardClick = (CardID) => {
    handleClick(CardID);
  };
  return (
    <div
      className="flex justify-center bg-emerald-950 w-62 h-62 min-w-full rounded-lg py-4 hover:shadow-lg hover:animate-glow cursor-pointer"
      onClick={() => handleCardClick(CardID)}
    >
      <div className="flex flex-col items-center justify-between">
        <img className="w-48 h-48 rounded " src={image} alt={name} />
        <h2 className="text-2xl text-white">{name}</h2>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  CardID: PropTypes.number.isRequired,
};

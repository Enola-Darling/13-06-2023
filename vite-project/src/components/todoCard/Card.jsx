import "./index.css";

const Card = ({ data }) => {

return (
<h3 className="todo__title">{data.todo}</h3>   
);
};

export default Card;
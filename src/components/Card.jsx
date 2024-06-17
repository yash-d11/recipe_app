import { Link } from "react-router-dom";

const Card = (props) => {
    const { id, title, image, description } = props.recipe;

    return (
        <Link
            to={`/recipes/${id}`}
            className="flex flex-col text-center w-full sm:w-[48%] md:w-[30%] mb-4 p-4 shadow-lg hover:scale-105 transition-transform duration-200"
        >
            <img className="w-full h-48 object-cover rounded-md mb-4" src={image} alt={title} />
            <h1 className="text-xl font-semibold mb-2">{title}</h1>
            <p className="text-sm text-zinc-600 mb-4">{description.slice(0, 100)}...</p>
            <div className="flex justify-between text-zinc-400 mt-auto">
                <div className="text-center flex-1">
                    <i className="ri-timer-line"></i>
                    <br />
                    <span className="text-sm">20min</span>
                </div>
                <div className="text-center flex-1">
                    <i className="ri-thumb-up-line"></i>
                    <br />
                    <span className="text-sm">Easy</span>
                </div>
                <div className="text-center flex-1">
                    <i className="ri-share-line"></i>
                    <br />
                    <span className="text-sm">Share</span>
                </div>
            </div>
        </Link>
    );
};

export default Card;


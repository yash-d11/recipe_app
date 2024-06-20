import { Link } from "react-router-dom";
import {motion} from "framer-motion";
const Card = (props) => {
    const { id, title, image, description } = props.recipe;

    return (
        <motion.div initial={{ opacity: 0, scale: 0.5,x:80,y:80 }}
        whileInView={{ opacity: 1, scale: 1,x:0,y:0 }}
        viewport={{once:true}}
        transition={{
          duration: 0.15,    
        }}
        className="flex flex-col text-center w-full sm:w-[48%] md:w-[30%] mb-4 p-4 ml-2 shadow-lg hover:scale-105 transition-transform duration-200"

>
        <Link
            to={`/recipes/${id}`}
                    >
            <img className="w-full h-48 object-cover rounded-md mb-4" src={image} alt={title} />
            <h1 className="text-xl font-semibold mb-2 truncate" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {title.length > 10 ? `${title.slice(0, 10)}...` : title}
            </h1>
            <p className="text-sm text-zinc-600 mb-4 truncate" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {description.length>15 ?`${description.slice(0,15)}...`:description}
            </p>
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
        </motion.div>
    );
};

export default Card;

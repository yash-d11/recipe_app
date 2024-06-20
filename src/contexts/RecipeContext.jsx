import { createContext, useEffect, useState } from "react";

export const Recipecontext = createContext(null);

const RecipeContext = (props) => {
    const [recipes, setrecipes] = useState([]);
    useEffect(() => {
        setrecipes(JSON.parse(localStorage.getItem("recipes")) || [{
            id: 1,
            title: "Spaghetti Carbonara",
            ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Pepper"],
            instructions: "Cook spaghetti. In a bowl, mix eggs and Parmesan. Cook pancetta until crispy. Combine all with spaghetti. Add pepper.",
        }]);
    }, []);

    return (
        <Recipecontext.Provider value={[recipes, setrecipes]}>
            {props.children}
        </Recipecontext.Provider>
    );
};

export default RecipeContext;

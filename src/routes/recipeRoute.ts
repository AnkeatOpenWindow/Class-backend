import express from "express";
import AppDataSource from "../datasource";
import { Recipe } from "../entity/recipe";

const recipeRouter = express.Router()

recipeRouter.use(express.json())
const appDataSource = AppDataSource
//todo: create CRUD

recipeRouter.get("/", async (req, res) => {
    try {
        const recipe = await appDataSource.getRepository(Recipe).createQueryBuilder("recipe")
            .leftJoinAndSelect("recipe.ingredients", "ingredient")
            .leftJoinAndSelect("ingredient.inventory", "inventory")
            .getMany()
        res.json(recipe);

    } catch (error) {
        console.log("something went wrong")
        return res.status(500).json({ message: error })
    }

})

// update of recipe and inventory into when crafted 

export default recipeRouter
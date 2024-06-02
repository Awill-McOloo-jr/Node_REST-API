import express from "express";
import Car from "../model/car.js";
import {
  createCar,
  deleteCar,
  getCarById,
  getCars,
  updateCar,
} from "../controllers/CarControllers.js";

const router = express.Router();

//Get all cars
router.get("/", getCars);

//Create a car
router.post("/", createCar);

//Get a single car by id
router.get("/:id", getCarById);

//Update a car by id
router.patch("/:id", updateCar);

//Delete car by id
router.delete("/:id", deleteCar);

export default router;

import Car from "../model/car.js";

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCar = async (req, res) => {
  const car = new Car({
    name: req.body.name,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
  });
  
  try {
    const newCar = await car.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (car == null) {
      return res.status(404).json({ message: "Unable to find user" });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (car == null) {
      return res.status(404).json({ message: "Unable to find user" });
    }
    car.name = req.body.name;
    car.make = req.body.make;
    car.model = req.body.model;
    car.price = req.body.price;
    const updatedCar = await car.save();
    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (car == null) {
      return res.status(404).json({ message: "Unable to find user" });
    }
    await car.deleteOne();
    res.status(200).json({ message: "User Deleted Successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

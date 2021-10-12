const express = require("express");
const {
  addNewCar,
  getCarById,
  getCarByuserId,
  updateCarById,
  toggleCarAvailability,
  deleteCarById,
  carsFilter,
  getCarTypes,
  getCarBrands
} = require("../controllers/car");
const { authentication } = require("../middlewares/authentication");
const carRouter = express.Router();

carRouter.post("/",authentication,addNewCar)
carRouter.get("/user",authentication,getCarByuserId)
carRouter.get("/cartypes", getCarTypes);
carRouter.get("/carbrands", getCarBrands);

carRouter.get("/car/:car_id",getCarById)
carRouter.put("/:car_id",authentication,updateCarById)
carRouter.put("/available/:car_id",authentication,toggleCarAvailability)
carRouter.put("/delete/:car_id",authentication,deleteCarById)

carRouter.post("/filter", carsFilter);

module.exports = carRouter;

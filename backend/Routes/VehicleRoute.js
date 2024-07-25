const express = require("express");
const router = express.Router();
const VehicleService = require("../Services/VehicleService");


router
.route("/vehicle/addnew")


// authenticate customer
.post(function (req,res){
    const {vehicleNumber,model,companyID,noOfseats, availablestat,vehicleImage} = req.body;
   
    const vehiService = VehicleService.getVehicleInstance();

    const result = vehiService.addNewVehicle(vehicleNumber,model,companyID,noOfseats, availablestat,vehicleImage);

    result.then((data) => res.send(data)).catch((err) => console.log(err));
});




router
.route("/vehicle")
 // Get all  inquiry
 .get(function (req, res) {
    const vehiService = VehicleService.getVehicleInstance();
    const result = vehiService.getAllVehicleData();
    result.then((data) => res.send(data)).catch((err) => console.log(err));

    // res.send(data);
  })


  
router
.route("/allvehicles")
 // Get all  inquiry
 .get(function (req, res) {
  const companyID = req.query.companyID;
    const vehiService = VehicleService.getVehicleInstance();
    const result = vehiService.getAllVehicles(companyID);
    result.then((data) => res.send(data)).catch((err) => console.log(err));

    // res.send(data);
  })


  router
.route("/deleteVehicle")
 // delete vehicle
 .post(function (req, res) {
  const vid = req.body.vid
    const vehiService = VehicleService.getVehicleInstance();
    const result = vehiService.removeVehicle(vid);
    result.then((data) => res.send(data)).catch((err) => console.log(err));

    // res.send(data);
  })

module.exports = router;
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const{ isLoggedIn,  isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");

const upload = multer({storage});




router
    .route("/")
    .get( wrapAsync(listingController.index)) //index route
    .post(                   //create route
        isLoggedIn,
        validateListing, 
        upload.single('listing[image]'),
        wrapAsync(listingController.createListing)
    );

    
//new route (creating before show route as it will consider /new as id, and error will come)
router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));



router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))//show route
    .put(              //update route
        isLoggedIn, 
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync (listingController.updateListing)
    )
    .delete(           //delete route
    isLoggedIn, 
    isOwner,
    wrapAsync (listingController.destroy)
    );



//edit route
router.get("/:id/edit", 
    isLoggedIn,
    isOwner,
    wrapAsync (listingController.renderEditForm)
);


module.exports = router;
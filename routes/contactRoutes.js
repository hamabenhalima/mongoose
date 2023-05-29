const express = require("express")
const router = express.Router()
const {getContact,addContact,deleteContact,updateContact} = require("../controllers/contactControllers")


router.get("/get" , getContact)
router.post("/post", addContact)
router.delete("/delete/:id" , deleteContact)
router.put("/put/:id", updateContact)


module.exports = router
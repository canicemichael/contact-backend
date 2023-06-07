const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

// a better convention
// router.route("/").get(getContacts).post(createContact);

// now we will use a validateToken fun here but we will use it once
// since we want to validate all the routes
router.use(validateToken);

router.route("/").get(getContacts).post(createContact)

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;

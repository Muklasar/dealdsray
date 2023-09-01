const express = require("express");

const router = express.Router();

// controller
const {
  create,
  list,
  update,
  read,
  remove,
  searchFilter,
} = require("../controller/employee");

// employee route
router.get("/employees", list);
router.get("/employee/:email", read);
router.post("/employee", create);
router.put("/employee/:email", update);
router.delete("/employee/:email", remove);
router.post("/search-filter/:query", searchFilter);

module.exports = router;

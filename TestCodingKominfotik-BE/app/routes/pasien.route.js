
module.exports = (app) => {
    const pasien = require("../controllers/pasien.controller")
    let router = require("express").Router()
    
    router.get("/", pasien.readAll)
    router.post("/", pasien.create)
    router.put("/:id", pasien.update)
    router.delete("/:id", pasien.delete)
    
    router.get("/:id", pasien.readById)
    app.use("/api/pasien" , router)
  }
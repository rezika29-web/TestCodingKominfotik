
module.exports = (app) => {
    const kunjungan = require("../controllers/kunjungan.controller")
    let router = require("express").Router()
    
    router.get("/", kunjungan.readAll)
    router.post("/", kunjungan.create)
    router.put("/:id", kunjungan.update)
    router.delete("/:id", kunjungan.delete)
    
    router.get("/:id", kunjungan.readById)
    app.use("/api/kunjungan" , router)
  }
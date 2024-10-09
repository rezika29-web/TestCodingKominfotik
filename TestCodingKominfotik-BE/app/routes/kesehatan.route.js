
module.exports = (app) => {
    const kesehatan = require("../controllers/kesehatan.controller")
    let router = require("express").Router()
    
    router.get("/", kesehatan.readAll)
    router.post("/", kesehatan.create)
    router.put("/:id", kesehatan.update)
    router.delete("/:id", kesehatan.delete)
    
    router.get("/:id", kesehatan.readById)
    app.use("/api/kesehatan" , router)
  }
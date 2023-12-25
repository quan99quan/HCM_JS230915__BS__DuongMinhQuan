import express from 'express'
import usersController from '../../controller/users.controller'
const router =express.Router();
router.get("/",usersController.getAllUsers)
router.post("/",usersController.createUser)
router.get("/:id",usersController.getIdUsers)
router.put("/:id",usersController.updateUser)
router.delete("/:id",usersController.deleteUser)
export default router

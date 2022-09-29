const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");

router.route("/GET/user/random")
    /**
   * @api {get} /random user
   * @apiDescription Get random user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */    
.get(userController.getRandomUser);
router.route("/GET/user/all").get(userController.allUser);

router.route("/POST/user/save")
    /**
   * @api {post} /save user
   * @apiDescription save user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */ 
.post(userController.saveUser);

router.route("/PATCH/user/update/:id").patch(userController.updateUser);
router.route("/PATCH/user/bulk-update").patch(userController.updateMultipleUser);
router.route("/DELETE/user/delete/:id").delete(userController.deleteUser);

module.exports = router;

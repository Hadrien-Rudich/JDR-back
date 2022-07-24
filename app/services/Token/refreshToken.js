require("dotenv").config();
const ApiError = require("../../errors/apiError");
const jwt = require("jsonwebtoken");
const { generateAccessToken } = require("./generateToken");
const userDatamapper = require("../../models/user");

module.exports = {
  async refreshToken (req, res){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
      throw new ApiError(" Accès non autorisé !", { statusCode : 401 });
    }

    if (!token) {
      throw new ApiError(" Accès non autorisé !", { statusCode : 403 });
    }

    jwt.verify(token, process.env.ACCES_TOKEN_SECRET, async (err, user) =>{
      if (err) {
        throw new ApiError(" Accès non autorisé !", { statusCode : 403 });
      }
      const isUserExist = await userDatamapper.isExist(user);
      if (isUserExist) {
        delete user.iat;
        delete user.exp;
        const refreshedToken = generateAccessToken(user);
        return res.status(200).json(refreshedToken);
      }
      throw new ApiError(" L'utilisateur n'existe pas !", { statusCode : 404 });
    });
  }
};
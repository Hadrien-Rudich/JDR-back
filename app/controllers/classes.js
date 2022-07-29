const debug = require("debug")("controllers:classes");
const ApiError = require("../errors/apiError.js");
const classesDatamapper = require("../models/classes.js");
const classesJSON = require("../../data/seeds/classes.json");

module.exports = {
  /**
    * classes controller pour obtenir une entrée.
    * ExpressMiddleware signature
    * @param {string} req Objet de la requête Express
    * @param {object} res Objet de la reponse Express
    * @returns réponse de la Route API JSON
  */
  async getClassSelected (req, res){
    const classIndex = req.params.index;
    //On requête la BDD si il existe une classe demandé en req.params
    // const foundedClass = await classesDatamapper.findOne(classIndex); //TODO connexion BDD et requête SQL
    
    // if (!foundedClass) {
    //   throw new ApiError("Aucune races trouvées", { statusCode: 404 });
    // }

    return res.status(200).json(classesJSON[0]);
  }
};
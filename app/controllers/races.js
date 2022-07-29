const debug = require("debug")("controllers:races");
const ApiError = require("../errors/apiError.js");
const racesDatamapper = require("../models/races.js");

const racesJSON = require("../../data/seeds/races.json");

module.exports = {
  /**
    * races controller pour obtenir une entrée.
    * ExpressMiddleware signature
    * @param {object} req Objet de la requête Express
    * @param {object} res Objet de la reponse Express
    * @returns réponse de la Route API JSON
  */
  async getRaceSelected (req, res){
    const raceIndex = req.params.index;
    //On requête la BDD si il existe une race demandé en req.params
    // const foundRace = await racesDatamapper.findOne(raceIndex); //TODO connexion BDD et requête SQL

    // if (!foundRace) {
    //   throw new ApiError("Aucune races trouvées", { statusCode: 404 });
    // }

    return res.status(200).json(racesJSON[0]);
  }
};
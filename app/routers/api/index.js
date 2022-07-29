const express = require("express");

const router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const racesRouter = require("./races");
const classesRouter = require("./classes");
const backgroundsRouter = require("./backgrounds");
const { apiController } = require("../../controllers");
const { ApiError } = require("../../services/handlers/errorHandler");
const { verifyToken } = require("../../middleware/verifyJWT");
const controllerHandler = require("../../services/handlers/controllerHandler");
// Route par défaut de l'API qui renvoie le liens de la documention de notre API
router.all("/", apiController.home);


// Toutes les routes de notre API

router.use("/auth", authRouter);

// Middleware qui vérifie le jwt et protège nos routes qui suivent
router.use(controllerHandler(verifyToken));

router.use("/profile", userRouter);

//TODO controller/dataMapper correspondants au routes suivantes :
router.use("/races", racesRouter);
router.use("/classes", classesRouter);
router.use("/backgrounds", backgroundsRouter);

// 404 pour les routes de l'API
router.use(() => {
  throw new ApiError("Route d'API non trouvée", { statusCode: 404 });
});

module.exports = router;
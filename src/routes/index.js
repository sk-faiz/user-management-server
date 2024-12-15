const fs = require("fs");
const path = require("path");
// const verifyToken = require("../middlewares/verifyToken");

const loadModulesRoutes = (app) => {
    const modulesPath = path.join(__dirname, "../modules");
    fs.readdirSync(modulesPath).forEach((module) => {
        const routesPath = path.join(modulesPath, module, "routes", `index.js`);
        if (fs.existsSync(routesPath)) {
            const { router, protected: isProtected } = require(routesPath);
            // if (isProtected) {
            //     app.use(`/api/${module}`, verifyToken, router); // Protected route
            // } else {
                app.use(`/api/${module}`, router); // Public route
            // }
        }
    });
};

module.exports = loadModulesRoutes;
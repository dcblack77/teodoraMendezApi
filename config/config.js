process.env.PORT = process.env.PORT || 80;

//ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//VENCIMIENTO TOKEN
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//SEED DE AUTENTIFICACION
process.env.SEED = process.env.SEED || "developer";

//BASE DE DATOS
let db;
if (process.env.NODE_ENV === "dev") {
    db = "mongodb://localhost:27017/teodora";
} else {
    db = process.env.MONGO_URI;
}
process.env.urlDB = db;

module.exports = {
    port: process.env.PORT
};

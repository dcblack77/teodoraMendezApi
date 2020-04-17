const blogRoute = require('./blog.route');
const {Router} = require('express');
const api = Router();

api.use('/blog', blogRoute);

module.exports = api;

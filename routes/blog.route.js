const { Router } = require('express');
const blogRoute = Router();

const {
    getBlog,
    getBlogs,
    putBlog,
    postBlog,
    deleteBlog
} = require('../controllers/blog.controller');

blogRoute.get('/', getBlogs);
blogRoute.post('/', postBlog);
blogRoute.get('/:id', getBlog);
blogRoute.put('/:id', putBlog);
blogRoute.delete('/:id', deleteBlog);

module.exports = blogRoute;

const Blog = require('../models/blog.model');
const _ = require('underscore');

let getBlogs = (req, res) => {
    Blog.find()
        .then(blogs => res.json({ok: true, blogs}))
        .catch(err => res.json({ok: false, err}));
};

let postBlog = (req, res) => {
    let body = _.pick(req.body, [
        'title',
        'description',
        'body',
        'published',
        'active'
    ]);
    //body.author = req.user._id;

    // TODO
    //If Request container a file, upload file in the server and the cloud (Google Drive, Amazon Cloud, Etc)

    const newBlog = new Blog(body);
    newBlog.save(body)
        .then(blog => res.json({ok:true, blog}))
        .catch(err => res.json({ok:false, err}))
};

let getBlog = (req, res) => {
    let id = _.pick(req.params, 'id');
    Blog.findById(id.id)
        .then(blog => res.json({ok: true, blog}))
        .catch(err => res.json({ok: false, err}))
};

let deleteBlog = (req, res) => {
    let id = _.pick(req.params, 'id');
    Blog.findByIdAndDelete(id)
        .then(blog => res.json({ok: true, blog}))
        .catch(err => res.json({ok: false, err}))
};

let putBlog = (req, res) => {
    let id = _.pick(req.params, 'id');
    let body = _.pick(req.body, [
        'title',
        'description',
        'body',
        'published',
        'active'
    ]);

    Blog.findByIdAndUpdate(id, body)
        .then(blog => res.json({ok: true, blog}))
        .catch(err => res.json({ok:false, err}))
};

module.exports = {
    getBlogs,
    postBlog,
    getBlog,
    deleteBlog,
    putBlog
};

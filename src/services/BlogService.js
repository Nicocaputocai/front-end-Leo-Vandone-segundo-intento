import http from '../http-common.js'

const BlogDataService = {
    getAllNotes:() => http.get('/blog'),
    getById: (id) => http.get(`/blog/show/${id}`),
    geAllCategories: (category) => http.get(`/blog/cat/${category}`)
}

export default BlogDataService
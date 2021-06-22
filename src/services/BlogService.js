import http from '../http-common.js'

const BlogDataService = {
    getAllNotes:() => http.get('/blog'),
    getById: (id) => http.get(`/blog/show/${id}`),
    getAllCategories: (category) => http.get(`/blog/cat/${category}`),
    createNote: (data) => http.post('/blog/create', data),
    deleteNote: (id) => http.delete(`/blog/delete/${id}`),
    editNote: (id, data) => http.put(`/blog/edit/${id}`, data)
}

export default BlogDataService
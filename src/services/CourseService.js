import http from '../http-common.js';

const CoursesDataService = {
    getAll: () => http.get('/courses'),
    getById: (id) => http.get(`/courses/show/${id}`),
    createCourses: (data) => http.post('/courses/create', data),
    deleteNote: (id) => http.delete(`/courses/delete/${id}`),
    editNote: (id, data) => http.put(`/courses/edit/${id}`, data)
}

// const getAll = () => {

//     return http.get('/courses');
// };

// const getById = (id) => {
    
//     return http.get('/courses/show/'+id);
// }

// export default {
//     getAll,
//     getById
// }
export default CoursesDataService
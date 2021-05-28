import http from '../http-common.js';

const CoursesDataService = {
    getAll: () => http.get('/courses'),
    getById: (id) => http.get(`/courses/show/${id}`)
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
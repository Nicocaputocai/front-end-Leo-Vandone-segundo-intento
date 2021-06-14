import { create } from 'istanbul-reports'
import http from '../http-common'

const AuthorDataService = {
    getAll:() => http.get('/authors'),
    getById:(id) =>http.get(`/authors/show/${id}`),
    create:(data) => http.post('/authors/create', data)
}

export default AuthorDataService
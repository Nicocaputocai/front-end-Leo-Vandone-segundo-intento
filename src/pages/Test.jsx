import {useState, useEffect} from 'react';
import CoursesDataService from '../services/CourseService.js';

const Test = () => {

    const [courses, setCourses] = useState([]);

    const retrieveCourses = () => {
        CoursesDataService.getAll()
            .then(response => {
                setCourses(response.data.courses);
                console.log(response.data.courses);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        retrieveCourses();
    }, []);

    return(
        <div>
            {courses.map((course) => (
                <h2>{course.name}</h2>
            ))}
        </div>
    )
}

export default Test;

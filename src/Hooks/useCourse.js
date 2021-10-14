import { useEffect, useState } from "react"

const useCourse = () =>{
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./coursesFile.json')
        .then ( res => res.json())
        .then ( data => setCourses(data));
    }, []);

    // return courses item
    return [courses] ;
}

export default useCourse;
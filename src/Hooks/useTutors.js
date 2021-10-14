import { useEffect, useState } from "react"

const useTutors = () =>{
    const [tutors, setTutors] = useState([]);
    useEffect(() => {
        fetch('./tutors.JSON')
        .then ( res => res.json())
        .then ( data => setTutors(data));
    }, []);

    //retun courses item
    return [tutors] ;
}

export default useTutors;
import { useState, useEffect } from 'react';
import axios from 'axios';

const SeeData = () => {
    const [courseDataArray, setCourseDataArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses/get-temporary-course');
                console.log(response.data?.data); 
                setCourseDataArray(response.data.data); // Assuming the array is stored in `data`
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>See Data</h2>
            {/* Iterate over the array and render each HTML content */}
            {courseDataArray.map((course, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: course.content }} />
            ))}
        </div>
    );
};

export default SeeData;

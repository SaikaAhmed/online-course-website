import React from 'react';
import user from '../../fakeData/user';
import { useState } from 'react';
import Detail from '../Detail/Detail';
import Add from '../Add/Add';
import Order from '../Order/Order';


const Course = () => {
    const [courses, setCourse] = useState(user);
    const [add, setAdd] = useState([]);

    const handleAddCourse = (all) => {
        const newAdd = [...add, all];
        setAdd(newAdd);
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-7">
             <div className="course-detail">
                {
                    courses.map( course => <Detail 
                        handleAddCourse={handleAddCourse}
                        all={course}></Detail>)
                }
      </div>
            </div>
            <div className="col-md-6 col-lg-5">
            <div className="add-container">
               <Order add={add}></Order>
               <hr/>
            {
                add.map(singleadd => <Add add={singleadd}></Add>)
            }
            
            </div>
             </div>
         </div> </div>
    );
};

export default Course;
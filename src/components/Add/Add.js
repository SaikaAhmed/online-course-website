import React from 'react';
import './Add.css';

const Add = (props) => {
    const {title, cost, img} = props.add;
    return (
        <div>
              <div className="course">
          <div>
            <img src={img} alt=""/>
          </div>

          <div className="course-detail">
          <h2>Course Name: {title} </h2>  
          <h3>Cost: ${cost}</h3>
          </div>
          
        </div>
        </div>
    );
};

export default Add;
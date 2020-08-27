import React from 'react';
import './Detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Detail = (props) => {
    const {title, cost, img} = props.all;
    return (
      // <div className="all">
      //   <div className="course">
      //     <div className="image">
      //       <img src={img} alt=""/>
      //     </div>

      //     <div className="course-detail"> 
      //     <h2> {title} </h2>  
      //     <h3>Cost: ${cost}</h3>
      //     <button className="btn btn-dark" onClick={() => props.handleAddCourse(props.all)}
      //    ><FontAwesomeIcon icon={faPlusCircle} />Enroll Now</button>
      //     </div>
      //   </div></div>

      <div className="card">
  <img src={img} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-title"> {title}</h2>
    <h4 className="card-text">Interest is a powerful motivational process that energizes learning.</h4>
    <h3>Cost: ${cost}</h3>
    <button className="btn btn-dark" onClick={() => props.handleAddCourse(props.all)}
        ><FontAwesomeIcon icon={faPlusCircle} />Enroll Now</button>
  </div>
</div>
      
    );
};

export default Detail;
import React from 'react';

const Order = (props) => {
   const add = props.add;
   const totalCost = add.reduce((totalCost, enroll) => totalCost + enroll.cost, 0);
    return (
        <div>
            <h2 style={{color: 'red'}}>Your Order Details:</h2>
            <h3>Courses Ordered: {add.length}</h3> 
            <h3>Total Cost: ${totalCost}</h3>
        </div>
    );
};

export default Order;
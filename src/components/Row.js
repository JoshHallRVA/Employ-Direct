import React from 'react';


function Row(props){


    return(
    <div>
        
    <tr>
       <th scope="row"> {props.id} </th>
        <td>{props.firstName} </td>
        <td>{props.lastName} </td>
        <td>{props.department} </td>
        <td>{props.email} </td>
    </tr>
      
    </div>
    )

}

export default Row;
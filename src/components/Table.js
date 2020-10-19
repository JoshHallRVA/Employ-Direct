import React from 'react';


const useSortableData = (employees, config = null)=>{
    const [sortConfig, setSortConfig] = React.useState(null);

    const sortedSampleEmployees = React.useMemo(() =>{
        let sortableEmployees = [...employees];
        if (sortConfig !== null) {
            sortableEmployees.sort((a,b) => {
                if (a[sortConfig.key]<b[sortConfig.key]){
                    return sortConfig.direction === 'ascending'? -1 : 1;
                }
                if (a[sortConfig.key]>b[sortConfig.key]){
                    return sortConfig.direction === 'ascending'? 1 : -1;
            }
            return 0;
        });
        }
    
        return sortableEmployees;
    }, [employees, sortConfig]);

    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending'){
            direction = 'descending';
        }
        setSortConfig({key, direction});
    }

    return {employees: sortedSampleEmployees, requestSort, sortConfig};
};


  const Table = props =>{     

    const { employees, requestSort, sortConfig } = useSortableData(props.employees);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };




return (
<div>
    <table className="table">
  <thead className="thead-dark">
    <tr>
      < th scope="col"> <button className="btn" onClick={() => requestSort('id')} className={getClassNamesFor('id')}> Employee ID </button></th>
      <th scope="col"> <button className="btn" onClick={() => requestSort('firstName')} className={getClassNamesFor('firstName')}>First Name </button></th>
      <th scope="col"> <button className="btn" onClick={() => requestSort('lastName')} className={getClassNamesFor('lastName')}>Last Name </button> </th>
      <th scope="col"> <button className="btn" onClick={() => requestSort('department')}className={getClassNamesFor('department')}>Department </button></th>
      <th scope="col"> <button className="btn" onClick={() => requestSort('email')} className={getClassNamesFor('email')}>Email </button></th>
    </tr>
  </thead>
  <tbody>

  {employees.map(employee =>{
      return(
      
      <tr key={employee.id}>

        <td>{employee.id}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.department}</td>
        <td>{employee.email} </td>
     
        </tr>  
        )
   
      })}      
   
    
  </tbody>
</table>
</div>
)
}


export default Table;

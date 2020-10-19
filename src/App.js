import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import sampleEmployees from './sampleEmployees.json';


function App(){
 
 
  
const [employeeResults] = React.useState(sampleEmployees);
const [searchValue, setSearchValue] = React.useState('');

const handleSearch = event => {
  setSearchValue(event.target.value);
}


const searchResults = employeeResults.filter(result =>{
  const searchfirstName = result.firstName.toLowerCase().includes(searchValue.toLowerCase());
  const searchlastName = result.lastName.toLowerCase().includes(searchValue.toLowerCase());
  const searchDepartment = result.department.toLowerCase().includes(searchValue.toLowerCase());
  const searchEmail = result.email.toLowerCase().includes(searchValue.toLowerCase());
  
  return searchfirstName || searchlastName || searchDepartment || searchEmail;
})

  return(
    <div>
<Header/>
<SearchBar onInput={handleSearch}  />

<Table employees= {searchResults}  />


</div>

)
    
}


export default App;

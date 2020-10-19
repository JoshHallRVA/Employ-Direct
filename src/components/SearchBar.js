import React from "react";

function SearchBar(props) {
 

      return (
      
    <div>
        <form className="form">
          <input
            value={props.searchValue}
            name="searchValue"
            onChange={props.onInput}
            type="text"
            placeholder="Search Employees"
          />
         
        </form>

        </div>
        

     
    );
      }


export default SearchBar;

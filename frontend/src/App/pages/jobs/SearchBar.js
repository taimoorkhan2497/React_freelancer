import React from 'react';
import SearchIcon from '../../../img/Search.svg';




function SearchBar (props) {
    return (
        <>
        
        <div class="form-group has-search job-search">
            <span class="ui-search-icon form-control-feedback pl-3"><img src={SearchIcon} alt="no img"/></span>
            <input type="text" class="form-control pl-5" placeholder="Search"></input>
        </div>
        
        
        </>
        
            
        
    );
};

export default SearchBar
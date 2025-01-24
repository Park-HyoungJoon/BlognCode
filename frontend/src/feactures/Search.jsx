import React from "react";

const Search = ({ onSubmit }) => {
    return(
        <form onSubmit={onsubmit} id="search" className="Search">
            <input type="search" placeholder="Search for a title..."/>
        </form>
    )
}

export default Search;
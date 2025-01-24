import React from "react";
import ListToggle from './ListToggle';

const Item = ({ title, backdrop }) => {
    const backdropUrl = `http://image.tmdb.org/t/p/original${backdrop}`;
    return(
        <div className="Item" style={{backgroundImage : `url(${backdropUrl})` }}>
            <div className="overlay">
                <div className="title">{title}</div>
                <ListToggle />
            </div>
        </div>
    )
}

export default Item;
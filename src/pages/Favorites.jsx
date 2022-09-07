import React from "react";
import axios from "axios";

function Favorites({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart}) {
    return (
        <div className="content p-40">
            <div className={"d-flex align-center mb-40 justify-between"}>
                <h1>{searchValue ? searchValue : "Мои закладки"}</h1>
            </div>
            <div className={'d-flex flex-wrap'}>
            </div>
        </div>
    )
}
export default Favorites
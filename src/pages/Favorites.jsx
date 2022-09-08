import React from "react";
import Card from "../components/Card";

function Favorites({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart}) {
    return (
        <div className="content p-40">
            <div className={"d-flex align-center mb-40 justify-between"}>
                <h1>{"Мои закладки"}</h1>
            </div>
            <div className={'d-flex flex-wrap'}>
                {
                    items.map((obj, index) =>
                        <Card
                            key={index}
                            titleSneakers={`${obj.titleSneakers}`}
                            priceSneakers={`${obj.priceSneakers}`}
                            imgSneakers={`${obj.imgSneakers}`}
                            onFavorite={(sneakersObj) => onAddToFavorite(sneakersObj)}
                            onPlus={(sneakersObj) => onAddToCart(sneakersObj)}
                            favorited={true}
                        />
                    )}
            </div>
        </div>
    )
}
export default Favorites
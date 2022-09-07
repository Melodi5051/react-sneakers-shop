import Card from "../components/Card";
import React from "react";
import axios from "axios";

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart}) {
    return (
        <div className="content p-40">
            <div className={"d-flex align-center mb-40 justify-between"}>
                <h1>{searchValue ? searchValue : "Все кросовки"}</h1>
                <div className="search_block d-flex">
                    <img src="/img/search.svg" alt="search"/>
                    {searchValue && <img onClick={() => {setSearchValue('')}} className={'remove_btw cu-p clear'} src="/img/btw_remove.svg" alt="close"/>}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск...."/>
                </div>
            </div>
            <div className={'d-flex flex-wrap'}>
                {
                    items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index) =>
                        <Card
                            key={index}
                            titleSneakers={`${obj.title}`}
                            priceSneakers={`${obj.price}`}
                            imgSneakers={`${obj.img}`}
                            onFavorite={(sneakersObj) => onAddToFavorite(sneakersObj)}
                            onPlus={(sneakersObj) => onAddToCart(sneakersObj)}
                        />
                    )}
            </div>
        </div>
    )
}
export default Home
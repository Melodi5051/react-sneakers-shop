import {Route, Routes, Link} from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
    //хуки
    const [cartOpened, setCartOpened] = React.useState(false)
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')


    //получение данных с бэка
    React.useEffect(() => {
        axios.get("https://6314ad13fc9dc45cb4f19e8c.mockapi.io/items").then(res => {
            setItems(res.data)
        })
        axios.get("https://6314ad13fc9dc45cb4f19e8c.mockapi.io/cart").then(res => {
            setCartItems(res.data)
        })
    }, [])
    const onAddToCart = (sneakersObj) => {
        axios.post("https://6314ad13fc9dc45cb4f19e8c.mockapi.io/cart", sneakersObj)
        setCartItems(prev => [...prev, sneakersObj])
    }
    const onRemoveItem = (id) => {
        axios.delete(`https://6314ad13fc9dc45cb4f19e8c.mockapi.io/cart/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id))
    }
    const onAddToFavorite = (sneakersObj) => {
        axios.post("https://6314ad13fc9dc45cb4f19e8c.mockapi.io/Favorites", sneakersObj)
        setFavorites(prev => [...prev, sneakersObj])
    }
    const onChangeSearchInput = event => {
        setSearchValue(event.target.value)
    }
    return (
    <div className="wrapper clear">
        {
            cartOpened && <Drawer onRemove={onRemoveItem} items={cartItems} onClickClose={() => setCartOpened(false)}/>
        }
            <Header items={cartItems} onClickCart={() => setCartOpened(true)} />

            <Routes>
                <Route path={'/Home'} element={
                    <Home
                        items={items}
                        searchValue={searchValue}
                        onAddToCart={onAddToCart}
                        setSearchValue={setSearchValue}
                        onAddToFavorite={onAddToFavorite}
                        onChangeSearchInput={onChangeSearchInput}
                    />
                }/>
                <Route path={'favorites'} element={<Favorites/>}/>
            </Routes>
    </div>
  );
}

export default App
//TODO сделаь отображение при перезагрузки страницы, какие товары есть в корзине
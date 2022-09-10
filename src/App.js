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
        axios.get("https://6314ad13fc9dc45cb4f19e8c.mockapi.io/Favorites").then(res => {
            setFavorites(res.data)
        })
    }, [])
    const onAddToCart = (sneakersObj) => {
        axios.post("https://6314ad13fc9dc45cb4f19e8c.mockapi.io/cart", sneakersObj).then(
            res => setCartItems(prev => [...prev, res.data])
        )
    }
    const onRemoveItem = (sneakersObj) => {
        axios.delete(`https://6314ad13fc9dc45cb4f19e8c.mockapi.io/cart/${sneakersObj.id}`)
        setCartItems(prev => prev.filter(item => item.id !== sneakersObj.id))
    }
    const onAddToFavorite = async (sneakersObj) => {
        try{
            if(favorites.find(favObj => favObj.id === sneakersObj.id)){
                axios.delete(`https://6314ad13fc9dc45cb4f19e8c.mockapi.io/Favorites/${sneakersObj.id}`)
            }else{
                const {data} = await axios.post(`https://6314ad13fc9dc45cb4f19e8c.mockapi.io/Favorites`, sneakersObj)
                setFavorites(prev => [...prev, data])
            }
        } catch (error){
            alert('Error')
        }
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
                <Route path={''} element={
                    <Home
                        items={items}
                        searchValue={searchValue}
                        onAddToCart={onAddToCart}
                        setSearchValue={setSearchValue}
                        onAddToFavorite={onAddToFavorite}
                        onChangeSearchInput={onChangeSearchInput}
                    />
                }/>
                <Route path={'/favorites'} element={
                    <Favorites
                        items={favorites}
                        onAddToFavorite={onAddToFavorite}
                        onAddToCart={onAddToCart}
                    />}
                />
            </Routes>
    </div>
  );
}

export default App
//TODO сделаь отображение при перезагрузки страницы, какие товары есть в корзине, и избранном
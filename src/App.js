import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";

function App() {
    //хуки
    const [cartOpened, setCartOpened] = React.useState(false)
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
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

    const onChangeSearchInput = event => {
        setSearchValue(event.target.value)
    }
    return (
    <div className="wrapper clear">
        {cartOpened && <Drawer onRemove={onRemoveItem} items={cartItems} onClickClose={() => setCartOpened(false)}/>}
        <Header items={cartItems} onClickCart={() => setCartOpened(true)} />
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
                          onFavorit={() => console.log('Enter in favorit')}
                          onPlus={(sneakersObj) => onAddToCart(sneakersObj)}
                      />
                  )}
          </div>
      </div>
    </div>
  );
}

export default App

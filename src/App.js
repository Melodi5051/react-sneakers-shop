import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";


function App() {
    //хуки
    const [cartOpened, setCartOpened] = React.useState(false)
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    //получение данных с бэка
    React.useEffect(() => {
        fetch("https://6314ad13fc9dc45cb4f19e8c.mockapi.io/items").then(res => {
            return res.json()
        }).then(json => {
            setItems(json)
        })
    }, [])

    const onAddToCart = (sneakersObj) => {
        if(!sneakersObj.isAdded){
            setCartItems(prev => [...prev, sneakersObj])
        }
        else if(sneakersObj.isAdded){
            cartItems.pop()
        }
    }
    return (
    <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClickClose={() => setCartOpened(false)}/>}
        <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
          <div className={"d-flex align-center mb-40 justify-between"}>
            <h1>Все кроссовки</h1>
              <div className="search_block d-flex">
                  <img src="/img/search.svg" alt="search"/>
                  <input placeholder="Поиск...."/>
              </div>
          </div>
          <div className={'d-flex flex-wrap'}>
              {
                  items.map((obj) =>
                      <Card
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

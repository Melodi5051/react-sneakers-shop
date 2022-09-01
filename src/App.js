import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const array = [
    {
        title:'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999,
        img: '/img/sneakers/1.jpg'
    },
    {
        title:'Мужские Кроссовки Nike Air Max 270',
        price: 12999,
        img: '/img/sneakers/2.jpg'
    },
    {
        title:'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 8499,
        img: '/img/sneakers/3.jpg'
    },
    {
        title:'Кроссовки Puma X Aka Boku Future Rider',
        price: 8999,
        img: '/img/sneakers/4.jpg'
    }
]


function App() {
  return (
    <div className="wrapper clear">
        {<Drawer/>}
        <Header/>
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
                  array.map((obj) =>
                      <Card
                      title={`${obj.title}`}
                      price={`${obj.price}`}
                      img={`${obj.img}`}
                      />
                  )}
          </div>
      </div>
    </div>
  );
}

export default App

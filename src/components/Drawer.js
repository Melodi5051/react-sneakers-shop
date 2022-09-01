function Drawer(){
    return(
        <div style={{display:'none'}} className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className={'mb-30 d-flex justify-between'}>Корзина <img className={'remove_btw cu-p'} src="/img/btw_remove.svg" alt="remove"/></h2>
                <div className="items">
                    <div className="cart_item d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cart_item_img">
                        </div>
                        <div className={'mr-20 flex'}>
                            <p className={'mb-5'}>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className={'remove_btw'} src="/img/btw_remove.svg" alt="remove"/>
                    </div>
                </div>
                <div className="cart_total_block">
                    <ul>
                        <li className={'d-flex align-end'}>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className={'d-flex align-end'}>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className={'green_button'}>Оформить заказ
                        <img src="/img/arrow.svg" alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer
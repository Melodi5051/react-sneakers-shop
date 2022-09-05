import styles from './Header.modules.scss'
import App from "../../App";
import React from "react";
function Header({onClickCart, items = []}){
    return(
        <header className={"d-flex justify-between align-center p-40"}>
            <div className={"d-flex align-center"}>
                <img width={40} height={40} src="/img/logo.png" alt=""/>
                <div>
                    <h3 className={"text-uppercase"}>React Sneakers</h3>
                    <p className={'opacity-5'}>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className={"d-flex"}>
                <li onClick={onClickCart} className={"mr-30 d-flex flex-row align-center cu-p"}>
                    <img width={18} height={18} src="/img/cart.svg" alt=""/>
                    <p>
                        {items.reduce((sum, elem) => {
                            return sum + Number(elem.priceSneakers)
                        }, 0)} руб.
                    </p>
                </li>
                <li className={'d-flex flex-row align-center'}>
                    <img width={18} height={18} src="/img/user.svg" alt=""/>
                </li>
            </ul>
        </header>
    )
}

export default Header
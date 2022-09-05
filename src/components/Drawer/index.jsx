import styles from './Drawer.module.scss'
function Drawer({onClickClose, items = []}){
    return(
        <div className={`${styles.overlay}`}>
                <div className={`${styles.drawer} d-flex flex-column`}>
                    <h2 className={'mb-30 d-flex justify-between'}>Корзина
                        <img  onClick={onClickClose} className={'remove_btw cu-p'} src="/img/btw_remove.svg" alt="close"/>
                    </h2>
                    <div className={`${styles.items}`}>
                        {
                            items.map((obj) => (
                                <div className={`${styles.cart_item} d-flex align-center mb-20`}>
                                    <div style={{ backgroundImage: `url(${obj.imgSneakers})`}} className={`${styles.cart_item_img}`}>
                                    </div>
                                    <div className={'mr-20 flex'}>
                                        <p className={'mb-5'}>{obj.titleSneakers}</p>
                                        <b>{obj.priceSneakers} руб.</b>
                                    </div>
                                    <img className={`${styles.remove_btw}`} src="/img/btw_remove.svg" alt="remove"/>
                                </div>
                            ))
                        }
                    </div>
                    <div className={`${styles.cart_total_block}`}>
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
                        <button className={`${styles.green_button}`}>Оформить заказ
                            <img src="/img/arrow.svg" alt="arrow"/>
                        </button>
                    </div>
                </div>
            </div>

    )
}

export default Drawer
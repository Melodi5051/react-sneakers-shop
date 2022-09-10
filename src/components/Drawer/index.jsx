import styles from './Drawer.module.scss'
import React from "react";
function Drawer({onClickClose, onRemove, items = []}){
    return(
        <div className={`${styles.overlay}`}>
            { items.length > 0 ? (
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
                                        <img onClick={() => onRemove(obj)} className={`${styles.remove_btw}`} src="/img/btw_remove.svg" alt="remove"/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`${styles.cart_total_block}`}>
                            {
                                <ul>
                                    <li className={'d-flex align-end'}>
                                        <span>Итого:</span>
                                        <div></div>
                                        <b> 1005руб.</b>
                                    </li>
                                    <li className={'d-flex align-end'}>
                                        <span>Налог 5%: </span>
                                        <div></div>
                                        <b>1005руб.</b>
                                    </li>
                                </ul>
                            }
                            <button className={`${styles.green_button}`}>Оформить заказ
                                <img className={styles.rightArrow} src="/img/arrow.svg" alt="arrow"/>
                            </button>
                        </div>
                    </div>
                ) : (
                <div className={`${styles.drawer} d-flex flex-column`}>
                    <h2 className={'mb-30 d-flex justify-between'}>Корзина
                        <img  onClick={onClickClose} className={'remove_btw cu-p'} src="/img/btw_remove.svg" alt="close"/>
                    </h2>
                    <div className={'d-flex justify-center flex-column align-center'}>
                        <img className={styles.mt300} width={120} height={120} src="/img/box.svg" alt=""/>
                        <h2>Корзина пустая</h2>
                        <p className={'text-center mt-5'}>Добавьте хотя бы одну пару<br/> кроссовок, чтобы сделать заказ.</p>
                        <button onClick={onClickClose} className={`${styles.green_button} mt-10`}>Вернуться назады
                            <img className={styles.leftArrow} src="/img/arrow.svg" alt="arrow"/>
                        </button>
                    </div>
                </div>
            )
            }
        </div>

    )
}

export default Drawer
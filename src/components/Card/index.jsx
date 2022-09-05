import styles from './Card.module.scss'
import React from "react";
function Card({onFavorit, imgSneakers, titleSneakers, priceSneakers, onPlus}) {

    const [isAdded, setIsAdded] = React.useState(false)

    const handleClick = () => {
        onPlus({imgSneakers, titleSneakers, priceSneakers, isAdded})
        setIsAdded(!isAdded)
    }
    return (
<div className={`${styles.card} mb-40`}>
    <div onClick={onFavorit} className={`${styles.favorite}`}>
        <img src="/img/heart_enactive.svg" alt="unlike"/>
    </div>
    <img width={133} height={112} src={imgSneakers} alt="Sneakers"/>
    <h5>{titleSneakers}</h5>
    <div className={"d-flex justify-between align-center"}>
        <div className={'d-flex flex-column'}>
            <span>Цена:</span>
            <b>{priceSneakers} руб.</b>
        </div>
            <img
                className={`${styles.cursor_pointer}`}
                onClick={handleClick}
                src={isAdded
                    ? "/img/bt_checked.svg"
                    : "/img/pluse.svg"}
                alt="Plus"/>
        </div>
</div>
)}

export default Card
import styles from './Card.module.scss'
import React from "react";
function Card({onFavorite, imgSneakers, titleSneakers, priceSneakers, onPlus}) {

    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavorite, setIsFavorite] = React.useState(false)

    const handleClickFavorite = () => {
        onFavorite({imgSneakers, titleSneakers, priceSneakers})
        setIsFavorite(!isFavorite)
    }
    const handleClickAdd = () => {
        onPlus({imgSneakers, titleSneakers, priceSneakers})
        setIsAdded(!isAdded)
    }
    return (
<div className={`${styles.card} mb-40`}>
    <div onClick={onFavorite} className={`${styles.favorite}`}>
        <img
            onClick={handleClickFavorite}
            src={isFavorite
            ? "/img/heart_active.svg"
            : "/img/heart_enactive.svg"}
              alt="Plus"/>
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
                onClick={handleClickAdd}
                src={isAdded
                    ? "/img/bt_checked.svg"
                    : "/img/pluse.svg"}
                alt="Plus"/>
        </div>
</div>
)}

export default Card
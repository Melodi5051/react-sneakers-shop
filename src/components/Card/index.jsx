import styles from './Card.module.scss'

function Card(props) {
    return (
<div className={`${styles.card} mb-40`}>
    <div className={`${styles.favorite}`}>
        <img onClick={props.onClick} src="/img/heart_enactive.svg" alt="unlike"/>
    </div>
    <img width={133} height={112} src={props.img} alt="Sneakers"/>
    <h5>{props.title}</h5>
    <div className={"d-flex justify-between align-center"}>
        <div className={'d-flex flex-column'}>
            <span>Цена:</span>
            <b>{props.price} руб.</b>
        </div>
        <button className={`${styles.button}`}>
            <img width={30} height={30} src="/img/pluse.svg" alt="Plus"/>
        </button>
    </div>
</div>
)}

export default Card
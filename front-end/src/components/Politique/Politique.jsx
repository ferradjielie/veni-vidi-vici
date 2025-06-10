import styles from "./Politique.module.css"


function Politique(props) {
    return (
        <div className={styles.container}>
           
          
          
        <span> Mot : {props.mot}</span>
        <p>Traduction : {props.traduction}</p>
        <p> Etymologie : {props.etymologie}</p>
        <p> Contexte : {props.contexte}</p>
        </div>
    )
}

export default Politique
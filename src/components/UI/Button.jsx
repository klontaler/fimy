import styles from "./Button.module.css"

export default function Button({children, type="none", onClick, disabled=false}) {
  return (
    <button
        type={type}
        onClick={onClick ? onClick : void 0}
        className={styles.button}
        disabled= {disabled ? true : false}
    >
        {children}
    </button>
  )
}

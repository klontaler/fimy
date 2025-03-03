import styles from "./TransactionDisplay.module.css"

export default function TransactionDisplay({k, date, amount, category, type}) {
  return (
    <li className={[styles.container, type == "income" ? styles.income : ' '].join(' ')} key={k}>
        <div className={styles.date}>{date}</div>
        <div className={styles.amount}>{amount} ₽</div>
        <div className={styles.category}>{category}</div>
    </li>
  )
}

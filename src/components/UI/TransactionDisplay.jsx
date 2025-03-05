import styles from "./TransactionDisplay.module.css"
import Button from "./Button";

export default function TransactionDisplay({transaction, onDelete}) {

  return (
    <li className={[styles.container, transaction.type == "income" ? styles.income : ' '].join(' ')} key={transaction.id}>
        <div className={styles.date}>{transaction.date}</div>
        <div className={styles.amount}>{transaction.amount} ₽</div>
        <div className={styles.category}>{transaction.category}</div>
        <Button onClick={() => onDelete(transaction.id)}>Удалить</Button>
    </li>
  )
}

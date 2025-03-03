import styles from "./DateInput.module.css"

export default function DateInput({value, onChange}) {
  return (
    <input
        className={styles.date}
        type="date"
        value={value}
        onChange={onChange}
    />
    )
}

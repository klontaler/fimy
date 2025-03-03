import styles from "./InputField.module.css"

export default function InputField({value, onChange, placeholder, inputmode="none", pattern="text"}) {
  return (
    <input
      className={styles.input}
      type="text"
      inputMode={inputmode}
      pattern={pattern}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
)
}

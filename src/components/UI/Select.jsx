import styles from "./Select.module.css"

export default function Select({value, onChange, options}) {
  return (
    <select 
        value={value}
        onChange={onChange}
        className={styles.select}
    >
        {options.map((option, index) => (
                <option value={option.value} key={index+1} className={styles.option}>
                    {option.text}
                </option>
            )
        )}
    </select>
  )
}

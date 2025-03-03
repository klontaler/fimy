import styles from "./AddTransaction.module.css"
import DateInput from "../../components/UI/DateInput"
import Select from "../../components/UI/Select"
import InputField from "../../components/UI/InputField"
import Button from "../../components/UI/Button"

export default function AddTransaction({onSubmit, amount, setAmount, date, setDate, type, setType, description, setDescription}) {

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <InputField 
        inputmode="numeric"
        pattern="\d*"
        value={amount}
        onChange={setAmount}
        placeholder="Введите сумму"
      />

      <DateInput 
        value={date}
        onChange={setDate}
      />

      <Select 
        value={type}
        onChange={setType}
        options={[{value: "expense", text: "Расход"}, {value: "income", text: "Доход"}]}
      />

      <InputField
        value={description} 
        onChange={setDescription}
        placeholder="Что это было?"
      />


      <Button type="submit" disabled={amount ? false : true}>
        Добавить
      </Button>

    </form>
    
  )
}

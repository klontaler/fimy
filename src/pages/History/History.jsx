import { useEffect, useState } from "react";
import TransactionDisplay from "../../components/UI/TransactionDisplay";
import styles from "./History.module.css"
import { addTransaction, deleteTransaction, getTransactions } from "../../api/supabase/transactions";
import Button from "../../components/UI/Button";
import AddTransaction from './AddTransaction';
import { getBudget, updateBudget } from "../../api/supabase/budget";

function History() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString());
  const [type, setType] = useState('expense');
  const [description, setDescription] = useState('');
  const [i, setI] = useState(10);

  useEffect(() => {
    async function fetchTransactions() {
      const data = await getTransactions(0)
      setTransactions(data);
    }
  
    fetchTransactions();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      user_id: 1,
      amount: Number(amount),
      currency: 'RUB', 
      type,
      category: 'new',
      date: date,
      description,
    };

    // чекнуть, нужен ли гетБюджет
    const cur_budget = await getBudget();

    if (newTransaction.type == 'expense') {
      await updateBudget(cur_budget.amount - newTransaction.amount);
    } else if ((newTransaction.type == 'income')) {
      await updateBudget(cur_budget.amount + newTransaction.amount);
    }

    const addedTransaction = await addTransaction(newTransaction);

    setTransactions((prev) => [addedTransaction, ...prev]);
    
    setAmount('');
    setDate(new Date().toISOString())
    setDescription('');
    setType('expense');
  }
  
  async function getMore() {
    const data = await getTransactions(i)
    setTransactions([...transactions, ...data]);
    setI(i+10);
  }

  async function handleDelete(id) {
    const deleted = await deleteTransaction(id);
    setTransactions((prev) => prev.filter((item) => item.id != id));
    const cur = await getBudget();

    if (deleted.type == 'expense') {
      updateBudget(cur.amount + deleted.amount)
    } else if (deleted.type == 'income') {
      updateBudget(cur.amount - deleted.amount)
    }
  }

  return (
    <main className={styles.main}>

      <AddTransaction 
        onSubmit={handleSubmit}
        amount={amount}
        setAmount={(e) => setAmount(e.target.value)}
        date={date}
        setDate={(e) => setDate(e.target.value)}
        type={type}
        setType={(e) => setType(e.target.value)}
        desctiption={description}
        setDescription={(e) => setDescription(e.target.value)}
      />

      <ul className={styles.list}>
        {transactions.map((transaction) => (
          <TransactionDisplay key={transaction.id}
            transaction={transaction}
            onDelete={handleDelete}
          />
        ))}
      </ul>

      <div className={styles.button}>
        <Button onClick={getMore}>Больше</Button>
      </div>

    </main>
  );
}

export default History;

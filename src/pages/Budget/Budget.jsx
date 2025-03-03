import { useState } from "react";
import styles from "./Budget.module.css"
import { getBudget, updateBudget } from "../../api/supabase/budget"
import { useEffect } from "react";
import Button from "../../components/UI/Button";
import { getAllTransactions } from "../../api/supabase/transactions";

export default function Budget() {
    const [budget, setBudget] = useState([])
    
    useEffect(() => {
        async function fetchBudget() {
            const data = await getBudget();
            setBudget(data);
        }
        
        fetchBudget();

    }, []);
        
    async function calculate() {
        const transactions = await getAllTransactions(1);
        console.log(transactions)
        let amount = 0

        for (let i in transactions) {
            if (transactions[i].type == "expense") {
                amount -= Number(transactions[i].amount)
            } else {
                amount += Number(transactions[i].amount)
            }
        }

        const data = await updateBudget(amount);
        setBudget(data)
    }

  return (
    <div>
        <h1>{budget.amount}</h1>
        <Button onClick={calculate}>update</Button>
    </div>
  )
}

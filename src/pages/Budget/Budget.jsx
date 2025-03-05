import { useState } from "react";
import styles from "./Budget.module.css"
import { getBudget } from "../../api/supabase/budget"
import { useEffect } from "react";

export default function Budget() {
    const [budget, setBudget] = useState([])
    
    useEffect(() => {
        async function fetchBudget() {
            const data = await getBudget();
            setBudget(data);
        }
        
        fetchBudget();

    }, []);
        
  return (
    <div>
        <h1>{budget.amount}</h1>
    </div>
  )
}

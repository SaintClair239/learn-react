import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpenseData }) => {
  const saveExpenseDataHandler = (expenseData) => {
    const result = {
      ...expenseData,
      id: Math.random().toString(),
    };
    onAddExpenseData(result);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

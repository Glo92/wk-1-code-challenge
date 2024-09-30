import React, { useEffect, useState } from "react";
import AccountContainer from "./components/AccountContainer";


function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  const addTransaction = (newTransaction) => {
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => res.json())
      .then((data) => {
        setTransactions((prevTransactions) => [...prevTransactions, data]);
      })
      .catch((error) => console.error('Error adding transaction:', error));
  };

  return (
    <div className="ui raised segment">
        
      <div className="bg-blue-600 mx-4 rounded-md mt-3 mb-2 p-2 ">
        <h2 className="text-white text-xl ">The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer transactions={transactions} addTransaction={addTransaction} />
    </div>
  );
}

export default App

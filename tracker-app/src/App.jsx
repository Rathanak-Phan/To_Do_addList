import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import Home from './page/Home';
import Add from './page/Add';
import Show from './page/Show';
import { Details } from './page/Details';

import Income from './page/Income';
import Outcome from './page/Outcome';
import IncomeDetails from './page/IncomeDetails';
import OutcomeDetails from './page/OutcomeDetails';

function App() {
  // Initialize state with data from localStorage or an empty array
  const [expenses, setExpenses] = useState(() => {
    try {
      const expenses_item = JSON.parse(localStorage.getItem('expenses'));
      return expenses_item ? expenses_item : [];
    } catch (error) {
      console.error("Error parsing expenses from localStorage:", error);
      return [];
    }
  });
  

  // Update localStorage whenever `expenses` changes
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add expenses={expenses} setExpenses={setExpenses} />} />
          <Route path="/show" element={<Show expenses={expenses} setExpenses={setExpenses} />} />
          <Route path="/details/:id" element={<Details expenses={expenses} setExpenses={setExpenses} />} />
          <Route path="/income" element={<Income expenses={expenses} setExpenses={setExpenses} />} />
          <Route path="/outcome" element={<Outcome expenses={expenses} setExpenses={setExpenses} />} />
          <Route path="/income/:id" element={<IncomeDetails expenses={expenses} setExpenses={setExpenses} />} />
          <Route path="/outcome/:id" element={<OutcomeDetails expenses={expenses} setExpenses={setExpenses} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

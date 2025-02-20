import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';




const Add = ({ expenses, setExpenses }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [remark, setRemark] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(''); // New field
  const [date, setDate] = useState(''); // New field

  const incomeCategories = ['Salary', 'Freelance', 'Investment', 'Gift'];
  const outcomeCategories = ['Food', 'Travel', 'Shopping', 'Bills'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: expenses.length + 1,
      title,
      type,
      category,
      amount: parseFloat(amount),
      remark,
      paymentMethod,
      date,
    };

    if (newExpense.title === '' || newExpense.type === '' || newExpense.category === '' || newExpense.amount === '' || newExpense.remark === '' || newExpense.paymentMethod === '' || newExpense.date === '') {
      toast.error('Please fill in all fields', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    

    setExpenses([...expenses, newExpense]);

    localStorage.setItem('expenses', JSON.stringify([...expenses, newExpense]));

    setTitle('');
    setType('');
    setCategory('');
    setAmount('');
    setRemark('');
    setPaymentMethod('');
    setDate('');
  };

  return (
    <div>
      <p className="text-center text-3xl mt-20">Add Your New Expense Here</p>
      <form className="w-1/2 mx-auto mt-10" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          className="border-2 border-gray-300 w-full"
        />

        <div className="flex">
          <div className="w-full">
            <label htmlFor="type">Type:</label>
            <select
              id="type"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                setCategory('');
              }}
              className="border-2 border-gray-300 w-full"
            >
              <option value="">Select Type</option>
              <option value="income">Income</option>
              <option value="outcome">Outcome</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-2 border-gray-300 w-full"
              disabled={!type}
            >
              <option value="">Select Category</option>
              {type === 'income' &&
                incomeCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              {type === 'outcome' &&
                outcomeCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount  $"
          className="border-2 border-gray-300 w-full"
        />

        <label htmlFor="remark">Remark:</label>
        <textarea
          id="remark"
          placeholder="Enter Remark"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          className="border-2 border-gray-300 w-full"
        ></textarea>

        {/* Additional Fields */}
        <label htmlFor="paymentMethod">Payment Method:</label>
        <input
          type="text"
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          placeholder="Enter Payment Method (e.g., Credit Card, Cash)"
          className="border-2 border-gray-300 w-full"
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border-2 border-gray-300 w-full"
        />

        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;

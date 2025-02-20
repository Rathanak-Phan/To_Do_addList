import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Show = ({ expenses, setExpenses }) => {
  const [selectedExpense, setSelectedExpense] = useState(null);

  // Function to handle deleting an expense by ID
  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  // Function to close the details view
  const closeDetails = () => {
    setSelectedExpense(null);
  };

  return (
    <div>
      <p className="text-center text-3xl mt-20">Information List</p>
      <table className="w-3/4 mx-auto bg-white border border-gray-300 text-xl mt-10">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Id</th>
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Type</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Amount</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr
                key={expense.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{expense.id}</td>
                <td className="py-3 px-6 text-left">{expense.title}</td>
                <td className="py-3 px-6 text-left">{expense.type}</td>
                <td className="py-3 px-6 text-left">{expense.category}</td>
                <td className="py-3 px-6 text-left">{expense.amount} $</td>
                <td className="py-3 px-6 text-center flex justify-center">
                  <Link 
                    to={`/details/${expense.id}`} 
                    onClick={() => setSelectedExpense(expense)}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Details
                  </Link>
                  <div
                    onClick={() => handleDelete(expense.id)}
                    className="text-white px-3 py-1 rounded"
                  >
                    <i className="fa-regular fa-trash-can text-red-600"></i>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="py-3 px-6 text-center text-gray-500"
              >
                No expenses found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      
    </div>
  );
};

export default Show;

import React from "react";
import { Link } from "react-router-dom";

const Income = ({ expenses, setExpenses }) => {
  // Filter the expenses to only show items with the type 'income'
  const incomeItems = expenses.filter((expense) => expense.type === "income");

  // Function to handle deleting an income by ID
  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <p className="text-center text-3xl mt-20">Income List</p>
      <table className="w-3/4 mx-auto bg-white border border-gray-300 text-xl mt-10">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Id</th>
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Amount</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {incomeItems.length > 0 ? (
            incomeItems.map((income) => (
              <tr
                key={income.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{income.id}</td>
                <td className="py-3 px-6 text-left">{income.title}</td>
                <td className="py-3 px-6 text-left">{income.category}</td>
                <td className="py-3 px-6 text-left">{income.amount} $</td>
                <td className="py-3 px-6 text-center flex justify-center">
                  <Link
                    to={`/income/${income.id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Details
                  </Link>
                  <div
                    onClick={() => handleDelete(income.id)}
                    className="cursor-pointer text-white px-3 py-1 rounded"
                  >
                    <i className="fa-regular fa-trash-can text-red-600"></i>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="py-3 px-6 text-center text-gray-500"
              >
                No income found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Income;

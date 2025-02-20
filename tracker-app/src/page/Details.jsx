import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Details = ({ expenses }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for navigation

  const expense = expenses.find((expense) => expense.id === parseInt(id));

  if (!expense) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-2xl text-red-600">Expense not found!</p>
          <button
            onClick={() => navigate("/")}
            className="mt-5 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Back to All List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/3 md:w-1/2 p-5 border border-gray-300 bg-white rounded shadow-lg">
        <h1 className="text-3xl text-center mb-5">Expense Details</h1>
        <div className="text-lg space-y-4">
          <p><strong>Id:</strong> {expense.id}</p>
          <p><strong>Title:</strong> {expense.title}</p>
          <p><strong>Type:</strong> {expense.type}</p>
          <p><strong>Category:</strong> {expense.category}</p>
          <p><strong>Amount:</strong> {expense.amount} $</p>
          <p><strong>Remark:</strong> {expense.remark || "No remarks provided"}</p>
          <p><strong>Payment Method:</strong> {expense.paymentMethod}</p>
          <p><strong>Date:</strong> {expense.date}</p>
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/show")} // Navigate back to the list page
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Back to All List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;

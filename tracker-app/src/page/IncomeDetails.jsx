import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const IncomeDetails = ({ expenses }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const income = expenses.find((expense) => expense.id === parseInt(id) && expense.type === "income");

  if (!income) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-2xl text-red-600">Income not found!</p>
          <button
            onClick={() => navigate("/income")}
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
        <h1 className="text-3xl text-center mb-5">Income Details</h1>
        <div className="text-lg space-y-4">
          <p><strong>Id:</strong> {income.id}</p>
          <p><strong>Title:</strong> {income.title}</p>
          <p><strong>Type:</strong> {income.type}</p>
          <p><strong>Category:</strong> {income.category}</p>
          <p><strong>Amount:</strong> {income.amount} $</p>
          <p><strong>Remark:</strong> {income.remark || "No remarks provided"}</p>
          <p><strong>Payment Method:</strong> {income.paymentMethod}</p>
          <p><strong>Date:</strong> {income.date}</p>
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/income")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Back to income List
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeDetails;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const OutcomeDetails = ({ expenses }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const outcome = expenses.find((expense) => expense.id === parseInt(id) && expense.type === "outcome");

  if (!outcome) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-2xl text-red-600">Outcome not found!</p>
          <button
            onClick={() => navigate("/outcome")}
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
        <h1 className="text-3xl text-center mb-5">Outcome Details</h1>
        <div className="text-lg space-y-4">
          <p><strong>Id:</strong> {outcome.id}</p>
          <p><strong>Title:</strong> {outcome.title}</p>
          <p><strong>Type:</strong> {outcome.type}</p>
          <p><strong>Category:</strong> {outcome.category}</p>
          <p><strong>Amount:</strong> {outcome.amount} $</p>
          <p><strong>Remark:</strong> {outcome.remark || "No remarks provided"}</p>
          <p><strong>Payment Method:</strong> {outcome.paymentMethod}</p>
          <p><strong>Date:</strong> {outcome.date}</p>
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/outcome")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Back to outcome  List
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutcomeDetails;

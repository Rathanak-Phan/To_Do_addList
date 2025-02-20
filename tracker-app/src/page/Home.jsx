import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [incomeCount, setIncomeCount] = useState(0);
  const [outcomeCount, setOutcomeCount] = useState(0);
  const [incomeCategories, setIncomeCategories] = useState({});
  const [outcomeCategories, setOutcomeCategories] = useState({});

  useEffect(() => {
    // Fetch expenses from localStorage
    const storedExpenses = localStorage.getItem('expenses');
    const expenses = storedExpenses ? JSON.parse(storedExpenses) : [];

    // Filter data for income and outcome types
    const incomeItems = expenses.filter((item) => item.type === 'income');
    const outcomeItems = expenses.filter((item) => item.type === 'outcome');

    // Set total counts
    setIncomeCount(incomeItems.length);
    setOutcomeCount(outcomeItems.length);

    // Group by categories
    const groupByCategory = (items) =>
      items.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      }, {});

    setIncomeCategories(groupByCategory(incomeItems));
    setOutcomeCategories(groupByCategory(outcomeItems));
  }, []); // Run once when the component mounts

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Expense Tracker
          </h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            Keep track of your income and expenses.
          </p>
          <div className="flex justify-center gap-5">
            {/* Income Section */}
            <Link to="/income" className="w-full sm:w-1/2">
              <div className="border-2 border-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md text-xl flex flex-col justify-between p-4">
                <h1 className="text-2xl font-bold text-blue-600">Income</h1>
                <p className="text-gray-800 dark:text-gray-300">Total Count: {incomeCount}</p>
                <div>
                  <h2 className="font-semibold mt-4 text-gray-800 dark:text-gray-300">Categories:</h2>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400">
                    {Object.entries(incomeCategories).map(([category, count]) => (
                      <li key={category}>
                        {category}: {count}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>

            {/* Outcome Section */}
            <Link to="/outcome" className="w-full sm:w-1/2">
              <div className="border-2 border-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md text-xl flex flex-col justify-between p-4">
                <h1 className="text-2xl font-bold text-red-600">Outcome</h1>
                <p className="text-gray-800 dark:text-gray-300">Total Count: {outcomeCount}</p>
                <div>
                  <h2 className="font-semibold mt-4 text-gray-800 dark:text-gray-300">Categories:</h2>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400">
                    {Object.entries(outcomeCategories).map(([category, count]) => (
                      <li key={category}>
                        {category}: {count}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add New Expense
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

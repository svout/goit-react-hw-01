import React from "react";
import "./Transaction.css"

const Transaction = ({transactions}) => {
  return (
    <table>
      <thead>
        <tr className="transaction-categories">
          <th className="transaction-item">Type</th>
          <th className="transaction-item">Amount</th>
          <th className="transaction-item">Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transaction;

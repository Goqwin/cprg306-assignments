export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-white p-4 rounded-md shadow-md mb-4">
        <div className="text-gray-600">Name: {name}</div>
        <div className="text-gray-600">Quantity: {quantity}</div>
        <div className="text-gray-600">Category: {category}</div>
      </li>
    );
  }
  
  
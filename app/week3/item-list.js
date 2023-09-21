import Item from './item';

const itemData = [
  {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  },
  {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  },
  {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  },
  {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  },
  {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  },
  {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  },
  {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  },
  {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  },
  {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  },
  {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  },
  {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  },
  {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  },
];

function ItemList() {
    return (
      <div className="container mx-auto mt-8">
        <ul>
          {itemData.map((item, index) => (
            <li
              key={index}
              className="bg-dark-slate p-4 rounded-md shadow-md mb-4 border-white border hover:scale-105 transition-transform duration-300"
            >
              <div className="text-lg font-semibold text-white">Name: {item.name}</div>
              <div className="text-white">
                Buy {item.quantity} in {item.category}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  


export default ItemList;
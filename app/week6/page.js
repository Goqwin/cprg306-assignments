"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';


function Page() {
  const [items, setItems] = useState(itemsData); // Initialize state with itemsData

  const handleAddItem = (newItem) => {
    const updatedItems = [...items, newItem];
    console.log(updatedItems); // Log the updated items
    setItems(updatedItems);
  };

  const mainStyle = {
    backgroundImage: 'url("https://66.media.tumblr.com/21b573c9786d06964fae51e7e48fc974/tumblr_nhn4ovPCcc1r2inbto1_500.gif")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
  };

  return (
    <main style={mainStyle} className="min-h-screen flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-white mb-4 group">
        <a
          href="https://github.com/Goqwin"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 relative group"
        >
          Godwin's Shopping List 🛒
  <span className="absolute opacity-0 group-hover:opacity-100 text-gray-400 transition-opacity duration-300 ml-2">
    my github profile surprise ( ͡° ͜ʖ ͡°)
  </span>
</a>
      </h1>
      <div className="bg-black p-6 rounded-md shadow-md w-full md:w-3/4 lg:w-1/2 border border-gray-400">
      <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
      <Link href="/" className="text-white hover:underline mt-5">
        Back to Home
      </Link>
    </main>
  );
}

export default Page;
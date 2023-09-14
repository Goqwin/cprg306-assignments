import Link from 'next/link';

export default function ShoppingList() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl">My Shopping List</h1>
        <div>
          <p>Name: Godwin JB Mercado</p>
          <p>Course section: CPRG 306B</p>
          <p>
            <a href="https://github.com/Goqwin" target="_blank" rel="noopener noreferrer">
              Github: Godwin
            </a>
          </p>
        </div>
      </div>
      <Link href="/">Home</Link>
    </main>
  );
}


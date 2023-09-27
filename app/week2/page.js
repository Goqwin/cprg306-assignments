import Link from 'next/link';

export default function ShoppingList() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <Link href="/week3">
  <h1 className="text-4xl">My Shopping List</h1>
  <span className="absolute opacity-70 group-hover:opacity-100 text-gray-400 transition-opacity duration-300 ml-2">
    Click Me ( ͡° ͜ʖ ͡°)
  </span>
</Link>
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
      <div>
        <p> There's NOTHING?!</p>
        <p> Wait a second... </p>
        <p className="relative">
  <Link href="/week3">
    <span className="text-black hover:text-white hover:text-4xl transition-all duration-300">
      SURPRISE
    </span>
  </Link>
  <span className="absolute top-0 left-0 w-0 h-0 bg-black hover:bg-white transform scale-0 hover:scale-100 origin-top-left transition-all duration-300"></span>
</p>
      </div>
      <Link href="/">Home</Link>
    </main>
  );
}


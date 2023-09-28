import Link from 'next/link';
import ItemsList from './item-list';

function Page() {
  const mainStyle = {
    backgroundImage: 'url("https://i.pinimg.com/originals/ab/90/cd/ab90cd665a40678eb76c3b80a2d5a83f.gif")',
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
          className="relative text-3xl hover:text-5xl"
        >
          Godwin's Shopping List 🛒 
          <span className="absolute opacity-0 group-hover:opacity-100 text-gray-400 transition-opacity duration-300 ml-2">
            my github profile surprise ( ͡° ͜ʖ ͡°)
          </span>
        </a>
      </h1>
      <div className="bg-slate-900 p-6 rounded-md shadow-md w-full md:w-3/4 lg:w-1/2">
        <ItemsList />
        <p className="text-white text-center mt-4"> Add an item? 
        <Link href="/week4"> Right here → Week 4</Link>
        </p>
      </div>
      <Link href="/" className="text-white hover:underline mt-4">
        Back to Home
      </Link>
    </main>
  );
}

export default Page;

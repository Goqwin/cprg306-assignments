import StudentInfo from '../app/StudentInfo.jsx';
import Link from 'next/link';

export default function Home() {
  const containerStyle = {
    backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/81bb4b165684019.640b6038d133e.gif")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24' style={containerStyle}>
      <div className="bg-black text-white border border-white p-4 rounded-lg text-center">
        <h1 className="text-6xl text-white mb-6">CPRG-306: Web Development 2 - Assignments</h1>
        <div className="group hover:text-green-500">
          <StudentInfo />
        </div>
        <ul className="list-none p-0">
          <div className="list-horizontal mt-4">
            <ul className="list-none p-0 flex">
              <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                  <Link href="/week2">Week 2</Link>
                </button>
              </li>
              <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                  <Link href="/week3">Week 3</Link>
                </button>
              </li>
              <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                  <Link href="/week4">Week 4</Link>
                </button>
              </li>
              <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                  <Link href="/week5">Week 5</Link>
                </button>
              </li>
              <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                  <Link href="/week6">Week 6</Link>
                </button>
              </li>
              <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                  <Link href="/week7">Week 7</Link>
                </button>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </main>
  );
}

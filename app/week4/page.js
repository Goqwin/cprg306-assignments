import Link from 'next/link';
import NewItem from './new-item';

const Page = () => {
  return (
    <div className="bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://i2.wp.com/halcyonrealms.com/blogpics/japgifF.gif?resize=500%2C374&ssl=1")' }}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 class="bg-black rounded-lg text-5xl text-orange-500 font-semibold text-center mb-8 shadow-lg p-4 hover:opacity-80 transition-opacity">
  Godwin's Item Generator
</h1>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-[calc(100% - 40px)]">
            <div className="flex justify-end items-center bg-[#333] text-white p-2">
              <div className="text-lg cursor-pointer">🔴</div>
              <div className="text-lg cursor-pointer ml-2">🟡</div>
              <div className="text-lg cursor-pointer ml-2">🟢</div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl mb-4 text-black">Week 4: Assignment</h2>
              <NewItem />
              <Link href="/" className="mt-4 text-blue-500 hover:underline">
                Back to Home
              </Link>
              <div>
              <Link
  href="/week5/"
  className="bg-blue-500 rounded-lg mt-3 text-black hover:bg-yellow-500 hover:text-white hover:shadow-md hover:scale-105 transition duration-300 ease-in-out transform hover:w-48"
>
  Week 5: Assignment
</Link>

            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;


import Link from 'next/link';
import NewItem from './new-item';

const Page = () => {
  const containerStyle = {
    backgroundImage: 'url("https://i.pinimg.com/originals/05/51/7e/05517ebd2de835de4f408e686a2206c8.gif")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24' style={containerStyle}>
      <h1 className="text-4xl text-orange-500 font-semibold text-center mb-8">
  Godwin's Item Generator
</h1>
    <div className=" min-h-screen flex items-center justify-center">
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
        </div>
      </div>
    </div>
    </main>
  );
};
export default Page;

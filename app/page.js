import Image from 'next/image'
import StudentInfo from '../app/StudentInfo.jsx';
import Link from 'next/link';


export default function Home() {
  return (
    <main className= 'flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className="text-4xl">CPRG-306: WebDevelopment 2 - Assignments</h1>
      <StudentInfo />
      <li> <Link href="/week2"> Week 2</Link></li>
     <li> <Link href="/week3"> Week 3</Link></li>
    </main>
  );
}

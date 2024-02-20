import Link from "next/link";

export default function About() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<ul className='w-full flex flex-row'>
				<li className='m-1 px-4 py-2 text-xl text-white bg-slate-700'>
					<Link href='/'>Home</Link>
				</li>
				<li className='m-1 px-4 py-2 text-xl text-white bg-slate-700'>
					<Link href='products'>Products</Link>
				</li>
			</ul>
			;
			<h1 className='text-8xl font-extrabold text-center text-red-700'>
				AboutPage
			</h1>
		</main>
	);
}

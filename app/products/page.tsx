import Link from "next/link";

export default function Products() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<ul className='w-full flex flex-row'>
				<li className='m-1 px-4 py-2 text-xl text-white bg-slate-700'>
					<Link href='/'>Home</Link>
				</li>
				<li className='m-1 px-4 py-2 text-xl text-white bg-slate-700'>
					<Link href='about'>About</Link>
				</li>
			</ul>
			;
			<h1 className='text-8xl font-extrabold text-center text-red-700'>
				ProductsPage
			</h1>
		</main>
	);
}

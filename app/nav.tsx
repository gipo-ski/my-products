import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/giposkilogoSMALL.png";

export default function Nav() {
	return (
		<nav className='flex h-20 items-center justify-between bg-slate-400 px-10 sticky'>
			<div className='flex gap-2 items-center'>
				<Image
					alt='logo'
					src={logo}
					width={150}
					height={51}
					className='m-h-full min-w-full'
				/>
				<h2 className='text-3xl'>[Logo]</h2>
			</div>

			<ul className='w-full flex flex-row justify-end'>
				<li className='m-1 px-4 py-2 text-xl text-white bg-slate-700'>
					<Link href='/'>Home</Link>
				</li>
				<li className='m-1 px-4 py-2 text-xl text-white bg-slate-700'>
					<Link href='/products'>Products</Link>
				</li>
				<li className='m-1 px-4 py-2 text-xl text-white bg-slate-700'>
					<Link href='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
}

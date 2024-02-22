import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import getAllProducts from "@/lib/getAllProducts";

export const metadata: Metadata = {
	title: "My Products",
	description: "A collection of our products",
};
export default async function Products() {
	const productsData: Promise<Product[]> = getAllProducts();

	const allProducts = await productsData;
	const products = allProducts.slice(0, 10);

	console.log("hello");

	const content = (
		<section className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-8xl font-extrabold text-center text-red-700'>
				ProductsPage
			</h1>
			<h2 className='mt-10'>
				<Link href='/'>Back to Home</Link>
			</h2>
			<div className='flex flex-col gap-2 m-4 p-4 mx-auto w-10/12 rounded bg-slate-200'>
				{products.map((product) => (
					<>
						<p key={product.id}>
							<Link href={`/products/${product.id}`}>
								<span>{product.id}</span><br />
								<span>{product.title}</span> 
							</Link>
						</p>
					</>
				))}
			</div>
		</section>
	);
	return content;

	// return (
	// 	<main className='flex min-h-screen flex-col items-center justify-between p-24'>
	// 		<h1 className='text-8xl font-extrabold text-center text-red-700'>
	// 			ProductsPage
	// 		</h1>
	// 	</main>
	// );
}

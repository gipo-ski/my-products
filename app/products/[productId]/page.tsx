import { Suspense } from "react";
import Image from "next/image";

import Loading from "../loading";
import getProduct from "@/lib/getProduct";
import getProductDetails from "@/lib/getProductDetails";
import ProductDetails from "./components/ProductDetails";

type Params = {
	params: {
		productId: string;
		userId: string;
		id: string;
	};
};

export default async function ProductPage({
	params: { productId, userId },
}: Params) {
	const productData: Promise<Product> = getProduct(productId);
	const productDetailsData: Promise<Post[]> = getProductDetails(userId);

	// const [product, productDetails] = await Promise.all([
	// 	productData,
	// 	productDetailsData,
	// ]);

	const product = await productData;

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='flex flex-col gap-2 m-4 p-4 mx-auto w-10/12 rounded bg-slate-400'>
				<h2 className='text-3xl px-4 py-2 mx-10 bg-slate-300'>
					<span className='text-xl font-semibold'>This is Product </span>
					{product.id}{" "}
					<span className='text-xl font-semibold'> with title: </span>
					<br />
					{product.title.toUpperCase()}
				</h2>
				<p className='text-xl px-4 py-2 mx-10 bg-slate-300'>
					{product.albumId}
				</p>
				<p className='text-xl px-4 py-2 mx-10 bg-slate-300'>{product.id}</p>
				<p className='text-2xl px-4 py-2 mx-10 bg-slate-300'>
					{product.thumbnailUrl}
				</p>
				<br />
				<Image
					src={product.thumbnailUrl.toString()}
					alt='product image'
					width={150}
					height={150}
					// className='m-h-full min-w-full'
				></Image>
				<p className='text-2xl px-4 py-2 mx-10 bg-slate-300'>{product.url}</p>
				<br />
				<Image
					src={product.url.toString()}
					alt='product image'
					width={600}
					height={600}
					// className='m-h-full min-w-full'
				></Image>
			</div>
			<Suspense fallback={<Loading />}>
				<ProductDetails promise={productDetailsData} />
			</Suspense>
			On ProductPage
		</main>
	);
}

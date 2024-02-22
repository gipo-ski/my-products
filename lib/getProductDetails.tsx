import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default async function getProductDetails(userId: string) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?productId=${userId}`
	);

	if (!res.ok) {
		throw new Error("failed to fetch product detail");
	}
	return res.json();
}

// `https://jsonplaceholder.typicode.com/posts?productId=${productId}?userId=${userId}?id=${id}`;
export default async function getProduct(productId: string) {

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/photos/${productId}`
	);
	console.log("Response status:", res.status);

	if (!res.ok) {
		throw new Error("failed to fetch product");
	}
	return res.json();
}

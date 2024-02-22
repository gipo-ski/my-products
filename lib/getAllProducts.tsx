export default async function getAllProducts() {
	const res = await fetch("https://jsonplaceholder.typicode.com/photos");

	if (!res.ok) throw new Error("failed to fetch products data");

	return res.json();
}

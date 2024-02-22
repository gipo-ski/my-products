type Props = { promise: Promise<Post[]> };

export default async function ProductDetails({ promise }: Props) {
	const details = await promise;

	const content = details.map((detail) => {
		return (
			<article
				key={detail.id}
				className='flex flex-col gap-2 m-4 p-4 mx-auto w-10/12 rounded bg-slate-200'
			>
				<h2 className='text-2xl'>
					<span className='font-bold'>Details Title: </span>
					{detail.title}
				</h2>
				<p>
					<span className='font-bold'>Details Body: </span>
					{detail.body}
				</p>
				<br />
			</article>
		);
	});

	return content;
}

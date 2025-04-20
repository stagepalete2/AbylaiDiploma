import BookCard from '@/app/(main)/home/components/BookCard'

export default function Page() {
	return (
		<div className="w-100 bg-white py-5 px-3">
			<div className="container">
				<BookCard />
				<BookCard />
			</div>
		</div>
	)
}

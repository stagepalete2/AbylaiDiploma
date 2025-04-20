
import CardCarousel from '@/app/components/CardCarousel'


const DiscoverPublication = () => {
	return (
		<div className='w-100 bg-white p-5 text-center'>
			<div className="container mx-auto">
				<h1>From crypto to cooking, & everything in between</h1>
				<p className="fw-lighter">Discover what writers, thinkers, and storytellers are talking about today.</p>
				<CardCarousel />
			</div>
		</div>
	)
}

export default DiscoverPublication
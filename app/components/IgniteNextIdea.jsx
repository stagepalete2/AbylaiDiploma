import styles from '@/app/styles/ignitenextidea.module.css'
import Image from 'next/image'

const IgniteNextIdea = () => {
	return (
		<div className='w-100 bg-white p-5 text-white'>
			<div className="container mx-auto d-flex flex-row justify-content-center align-items-center">
				<div className="w-75">
					<div className={`${styles.card} row border p-5 rounded overflow-hidden`}>
						<div className="col-lg-6 my-5">
							<h1>Ignite your next idea</h1>
							<p className='fw-light'>We're building a future where the internet's best ideas thrive through a value system that rewards quality, not clickbait.</p>
							<p className='fw-light'>No paywalls. No subscription treadmills. Just great ideas that earn what they're worth.</p>
							<button className="btn btn-light text-dark">Start writing →</button>
						</div>
						<div className="col-lg-6 position-relative">
							<Image className={`${styles.imagePos} position-absolute`} src="/images/collector_dialog.webp" width={400} height={500} alt="collect dialog" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IgniteNextIdea
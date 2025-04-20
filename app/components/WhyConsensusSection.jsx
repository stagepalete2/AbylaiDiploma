import Image from 'next/image'
// import styles from '../styles/whyconsencus.module.css'
import styles from '@/app/styles/whyconsencus.module.css'

const WhyConsensusSection = () => {
	return (
		<div className="w-100 bg-white p-5 text-center">
			<div className="container mx-auto">
				<h1>Why Consensus?</h1>
				<p className="fw-light">Consensus makes it easy to publish your ideas, reach readers everywhere, and unlock new opportunities to earn directly from your work.</p>
				<div className="row">
					<div className="col-lg-4 p-3">
						<div className={`${styles.cards} text-start p-4`}>
							<Image className={`${styles.icons} mb-3`} src="/icons/clock.png" width={50} height={50} alt="icon-some" />
							<h4 className=''>Earn, one post at a time</h4>
							<p className="m-0 p-0 fw-lighter">New ways for writers to earn, beyond paywalls & ads.</p>
						</div>
					</div>
					<div className="col-lg-4 p-3">
						<div className={`${styles.cards} text-start p-4`}>
							<Image className={`${styles.icons} mb-3`} src="/icons/clock.png" width={50} height={50} alt="icon-some" />
							<h4 className=''>Earn, one post at a time</h4>
							<p className="m-0 p-0 fw-lighter">New ways for writers to earn, beyond paywalls & ads.</p>
						</div>
					</div>
					<div className="col-lg-4 p-3">
						<div className={`${styles.cards} text-start p-4`}>
							<Image className={`${styles.icons} mb-3`} src="/icons/clock.png" width={50} height={50} alt="icon-some" />
							<h4 className=''>Earn, one post at a time</h4>
							<p className="m-0 p-0 fw-lighter">New ways for writers to earn, beyond paywalls & ads.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhyConsensusSection
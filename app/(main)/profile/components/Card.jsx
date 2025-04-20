import styles from '@/app/styles/cardcarousel.module.css'
import Image from 'next/image'

const Card = () => {
	return (
		<div className="d-flex flex-column rounded border">
			<Image className='img-fluid' src="/images/test.webp" width={500} height={150} alt="card image" />
			<div className="p-3">
				<h6 className='mt-3'>Emotional Delegation: When Your AI Says the Hard Stuff For You</h6>
				<div className="d-flex flex-row justify-content-between align-items-center mt-2">
					<div className={`${styles.authorInfo} d-flex flex-row justify-content-between align-items-center gap-2`}>
						<Image src="/icons/clock.png" width={15} height={15} alt="author ava" />
						<p className='p-0 m-0'>Hard Mode First</p>
					</div>
					<div className={styles.authorInfo}>Apr 18</div>
				</div>
				<p className={`${styles.textHeight} ${styles.textSize} relative overflow-hidden mt-2`} style={{
					WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
					maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
				}}>
					A few thoughts on the role my AI played as an Emotional Agent operating on my behalf (and what it means for the things yet to be built in this space)
				</p>
			</div>
			<button className='btn btn-secondary rounded ms-auto m-3'>Collect</button>
		</div>
	)
}

export default Card
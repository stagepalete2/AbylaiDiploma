import styles from '@/app/home/styles/bookcard.module.css'
import Image from 'next/image'

const BookCard = () => {
	return (
		<div className="row g-0 flex-column flex-lg-row border rounded overflow-hidden mb-4">
			<div className="col-12 col-lg-6">
				<Image
					className="img-fluid w-100 h-100 object-fit-cover"
					src="/images/test2.png"
					width={700}
					height={300}
					alt="Portrait"
				/>
			</div>
			<div className="col-12 col-lg-6 d-flex flex-column justify-content-between p-4">
				<div>
					<h2 className="text-start fw-bold">
						Celebrating Superchain Creativity: Announcing the Winners of "We ❤️ The Art"
					</h2>
					<div className="d-flex justify-content-between align-items-center my-3">
						<div className={`${styles.author} d-flex align-items-center gap-2`}>
							<Image src="/icons/clock.png" width={25} height={25} alt="avatar" />
							<p className="fw-light m-0">The Optimism Collective</p>
						</div>
						<p className={`${styles.author} fw-light m-0`}>March 11</p>
					</div>
					<p
						className={`${styles.textHeight} ${styles.textSize} overflow-hidden text-start`}
						style={{
							WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
							maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
						}}
					>
						A few thoughts on the role my AI played as an Emotional Agent operating on my behalf (and what it means for the things yet to be built in this space)
					</p>
				</div>
				<div className="d-flex">
					<button className="btn btn-primary ms-auto px-5">Mint</button>
				</div>
			</div>
		</div>
	)
}

export default BookCard

'use client'

import Image from 'next/image'
import { useRef } from 'react'

import styles from '@/app/styles/cardcarousel.module.css'

const Card = () => {
	return (
		<div className="flex-shrink-0" style={{ width: '300px', margin: '0 12px' }}>
			<div className="rounded border bg-white shadow-sm overflow-hidden h-100 d-flex flex-column">
				<Image
					className="img-fluid"
					src="/images/test.webp"
					width={500}
					height={150}
					alt="card image"
				/>
				<div className="p-3 d-flex flex-column flex-grow-1">
					<h6 className="mt-2">Emotional Delegation: When Your AI Says the Hard Stuff For You</h6>
					<div className="d-flex justify-content-between align-items-center mt-2">
						<div className={`${styles.authorInfo} d-flex align-items-center gap-2`}>
							<Image src="/icons/clock.png" width={15} height={15} alt="author" />
							<p className="mb-0">Hard Mode First</p>
						</div>
						<div className={styles.authorInfo}>Apr 18</div>
					</div>
					<p
						className={`${styles.textHeight} ${styles.textSize} mt-2 overflow-hidden`}
						style={{
							WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
							maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
						}}
					>
						Amidst a whirlwind of creativity, We ❤️The Art has reached its conclusion, after seeing 7,000+ submissions seize this OPportunity to share their art - we are thrilled to unveil the winners.
					</p>
					<div className="mt-auto text-end">
						<button className="btn btn-secondary rounded">Collect</button>
					</div>
				</div>
			</div>
		</div>
	)
}
const CardCarousel = () => {
	const scrollRef = useRef(null)

	const scroll = (dir) => {
		if (scrollRef.current) {
			const distance = dir === 'left' ? -320 : 320
			scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' })
		}
	}

	return (
		<>
			<div className="position-relative py-4">


				<div
					ref={scrollRef}
					className="d-flex overflow-auto px-4"
					style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
				>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div className="d-flex flex-row justify-content-center align-items-center gap-4 mt-3">
				<button
					className="translate-middle-y btn btn-light rounded shadow"
					onClick={() => scroll('left')}
					style={{ zIndex: 1 }}
				>
					←
				</button>
				<button
					className="translate-middle-y btn btn-light rounded shadow"
					onClick={() => scroll('right')}
					style={{ zIndex: 1 }}
				>
					→
				</button>
			</div>
			<a className={`${styles.exploreButton} btn px-3`} href="#">Explore all →</a>
		</>
	)
}

export default CardCarousel

'use client'
import styles from '@/app/styles/ideasmatter.module.css'
import Image from 'next/image'
import { useRef } from 'react'

const IdeasThatMatter = () => {

	const timerRef = useRef(null)

	const handleMouseEnter = () => {
		timerRef.current = setTimeout(() => {
			onPick()
		}, 2000)
	}

	const handleMouseLeave = () => {
		clearTimeout(timerRef.current)
	}

	return (
		<div className='w-100 bg-white p-5 text-center'>
			<div className="container mx-auto">
				<h1>Ideas that matter</h1>
				<p className="fw-lighter">Read the voices driving today's most important conversations.</p>
				<div className="row align-items-center">
					<div className="col-lg-4 p-2">
						<div className="row">
							<div className="col-lg-4 p-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image className='' src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 p-2">
						<div className="row">
							<div className="col-lg-12 p-2">
								<div className={`${styles.cards} ${styles.megaCard} p-1 d-flex flex-column justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={200} height={200} alt="icon" />
									<h3 className='text-white'>The BIG Comic</h3>
									<p className='text-white fw-lighter'>The Original Art Collection of the Internet.</p>
									<button className={`${styles.readBtn} btn btn-light text-dark`}>Read publication</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 p-2">
						<div className="row">
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image className={styles.iconImage} src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
							<div className="col-lg-4 p-2">
								<div className={`${styles.cards} p-1 d-flex flex-row justify-content-center align-items-center`}>
									<Image src="/icons/clock.png" width={50} height={50} alt="icon" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IdeasThatMatter
'use client'
import Image from 'next/image'

const ProfileCard = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-start gap-2">
			<Image src="/icons/user.png" width={75} height={75} alt="ava" />
			<h3>BuildBetter by BFG</h3>
			<p className="fw-lighter">
				Lessons for building better products, teams and businesses, based on real life experience of multiple founders.
			</p>
			<div className="row w-100">
				<div className="col-lg-4">
					<p className='fw-lighter'>Subscribers</p>
					<p className="h4">300+</p>
				</div>
				<div className="col-lg-4">
					<p className='fw-lighter'>Posts</p>
					<p className="h4">43</p>
				</div>
				<div className="col-lg-4">
					<p className='fw-lighter'>Collects</p>
					<p className="h4">36</p>
				</div>
			</div>
			<button className="btn btn-primary w-100">Subscribe</button>
		</div>
	)
}

export default ProfileCard
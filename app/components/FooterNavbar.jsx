import Image from 'next/image'

const FooterNavbar = () => {
	return (
		<div className='w-100 bg-white p-5 text-center'>
			<div className="container mx-auto">
				<div className="d-flex flex-column justify-content-center align-items-center">
					<Image src="/images/logo.jpg" width={120} height={50} alt="Main Logo" />
					<div className="d-flex flex-row justify-content-center align-items-center">
						<ul className="d-flex flex-row  gap-4 navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link fw-lighter" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link fw-lighter" href="#">Explore</a>
							</li>
							<li className="nav-item">
								<a className="nav-link fw-lighter" href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="d-flex flex-row justify-content-between align-items-center">
					<p className='m-0 p-0 fw-lighter'>Copyright © 2025 Paragraph Technologies Inc. All rights reserved.</p>
					<div className="d-flex flex-row justify-content-center align-items-center gap-3">
						<ul className="d-flex flex-row  gap-4 navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link fw-lighter" aria-current="page" href="#">Privacy Policy
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link fw-lighter" href="#">Terms of Use</a>
							</li>
							<li className="nav-item">
								<a className="nav-link fw-lighter" href="#">
									Content Guidelines</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterNavbar
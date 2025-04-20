import Image from 'next/image'

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
			<div className="container">
				<Image src="/images/logo.jpg" width={120} height={50} alt="Main Logo" />
				<a className="navbar-brand ms-3" href="#">Consensus</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Our story</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Explore</a>
						</li>
					</ul>
					<ul className='navbar-nav ms-auto mb-2 mb-lg-0 gap-4'>
						<li className='nav-item'>
							<a className="nav-link" href="#">Sign in</a>
						</li>
						<li className='nav-item btn rounded btn-primary p-0'>
							<a className="nav-link" href="#">Start writing</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
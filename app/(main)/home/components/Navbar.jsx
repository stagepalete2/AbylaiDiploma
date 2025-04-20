import Image from 'next/image'

const Navbar = () => {
	return (
		<div className="d-flex flex-row justify-content-between align-items-center w-100">
			<ul className="d-flex flex-row  gap-4 navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
					<a className="nav-link fw-bold" aria-current="page" href="#">For You
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link fw-lighter" href="#">Your Subscriptions</a>
				</li>
			</ul>
			<form action="">
				<input className='form-control' type="text" placeholder='Search...' />
			</form>
			<ul className="d-flex flex-row align-items-center gap-4 navbar-nav ms-auto mb-2 mb-lg-0">
				<li className="nav-item">
					<button className='btn btn-primary rounded'>+ New Post</button>
				</li>
				<li className="nav-item">
					<a className="nav-link fw-lighter" href="#">
						<Image src="/icons/clock.png" alt="Avatar" width={25} height={25} />
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
'use client'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Card from './Card'
import ProfileCard from './ProfileCard'


const Profile = () => {
	return (
		<div className="row">
			<div className="col-lg-8">
				<div className="row gap-0">
					<div className="col-lg-4 mt-2">
						<Card />
					</div>
					<div className="col-lg-4 mt-2">
						<Card />
					</div>
					<div className="col-lg-4 mt-2">
						<Card />
					</div>
					<div className="col-lg-4 mt-2">
						<Card />
					</div>
					<div className="col-lg-4 mt-2">
						<Card />
					</div>
					<div className="col-lg-4 mt-2">
						<Card />
					</div>
				</div>
				<Stack spacing={2}>
					<Pagination className='mx-auto mt-2' count={10} />
				</Stack>
				<div className="d-flex flex-row mt-2">
					<button className="btn btn-primary mx-auto">Start writing</button>
				</div>
			</div>
			<div className="col-lg-4">
				<ProfileCard />
			</div>
		</div>
	)
}

export default Profile
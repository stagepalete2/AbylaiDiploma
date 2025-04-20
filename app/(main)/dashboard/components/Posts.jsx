'use client'
import styles from '../styles/dashboard.module.css'

const Posts = () => {
	return (
		<div className='p-3'>
			<div className={`${styles.card} d-flex flex-column`}>
				<div className="d-flex flex-row justify-content-between align-items-center p-2">
					<h2 className='p-0 m-0'>Posts</h2>
					<div className="d-flex flex-row justify-content-between align-items-center gap-3">
						<input type="text" className="form-control" placeholder='Search posts...' />
						<button className="btn btn-primary w-100">+ New post</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Posts
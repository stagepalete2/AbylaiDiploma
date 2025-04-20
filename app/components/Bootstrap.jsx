'use client'
import { useEffect } from "react"

const Bootstrap = () => {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap.bundle.min.js")
			.then(() => {
				console.log("Bootstrap JS loaded")
			})
			.catch((err) => {
				console.error("Failed to load Bootstrap JS:", err)
			})
	}, [])
	return null
}

export default Bootstrap

"use client"

import Navbar from '@/app/(main)/home/components/Navbar'
import { ListItemIcon } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'
import PropTypes from 'prop-types'
import * as React from 'react'

const drawerWidth = 60

function ResponsiveDrawer(props) {
	const { window, children } = props
	const [mobileOpen, setMobileOpen] = React.useState(false)
	const [isClosing, setIsClosing] = React.useState(false)

	const handleDrawerClose = () => {
		setIsClosing(true)
		setMobileOpen(false)
	}

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false)
	}

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen)
		}
	}

	const drawer = (
		<div>
			<Toolbar />
			<hr className='mt-0' />
			<Image src="/images/logo.jpg" className='img-fluid w-100 my-3' width={300} height={200} alt="logo" />
			<hr />
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Image src="/icons/home.png" width={25} height={25} alt="home" />
						</ListItemIcon>
					</ListItemButton>
				</ListItem>
			</List>
			<hr />
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Image src="/icons/dashboard.png" width={25} height={25} alt="home" />
						</ListItemIcon>
					</ListItemButton>
				</ListItem>
			</List>
		</div>
	)

	const container = window !== undefined ? () => window().document.body : undefined

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				color="transparent"
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					boxShadow: 0
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 0, display: { sm: 'none' } }}
					>
					</IconButton>
					<Navbar />
				</Toolbar>
				<hr className='m-0' />
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
					slotProps={{
						root: {
							keepMounted: true,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
			>
				<Toolbar />
				{children}
			</Box>
		</Box>
	)
}

ResponsiveDrawer.propTypes = {
	window: PropTypes.func,
}

export default ResponsiveDrawer

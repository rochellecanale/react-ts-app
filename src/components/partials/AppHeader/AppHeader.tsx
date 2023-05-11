import React, { FC } from 'react'
import { Menu, Layout, theme } from 'antd'
import type { MenuProps } from 'antd'
import './AppHeader.scss'

const { Header } = Layout

const headerStyle: React.CSSProperties = {
	paddingInline: 50,
	lineHeight: '64px'
}

const items: MenuProps['items'] = [
	{
		label: 'Home',
		key: 'home'
	},
	{
		label: 'About',
		key: 'about'
	}
]

const AppHeader:FC = () => {
	return (
		<Header className='text-center text-white h-16' style={headerStyle}>
			<div className="logo float-left w-32 h-8 my-4 mr-6 ml-0 bg-black bg-opacity-30" />
			<Menu
				theme='dark'
				mode='horizontal'
				items={items}
				defaultSelectedKeys={['home']}
			/>
		</Header>
	)
}

export default AppHeader
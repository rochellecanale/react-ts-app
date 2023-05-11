import React, { FC, useEffect, useState } from 'react'
import { Layout, Space, theme } from 'antd'
import './App.css'

const { Content } = Layout

import AppHeader from './components/partials/AppHeader/AppHeader'
import AppFooter from './components/partials/AppFooter/AppFooter'

const contentStyle: React.CSSProperties = {
	lineHeight: '120px',
	minHeight: 120
}

const App:FC = () => {

	const {
		token: { colorBgContainer }
	} = theme.useToken()

	return (
		<Space direction='vertical' style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
				<AppHeader />
				<Content className='py-0 px-12' style={contentStyle}>
					<div className="site-layout-content" style={{ background: colorBgContainer }}>
						Content
					</div>
				</Content>
				<AppFooter />
			</Layout>
		</Space>
	)
}

export default App

import { FC, useEffect, useState } from 'react'
import './App.css'

const App:FC = () => {

	const [greet, setGreet] = useState<string>('')

	useEffect(() => {
		setGreet('Chelle')
	}, [])

	return (
		<>
			<h1 className='text-4xl font-bold underline text-blue-400'>Hello { greet }!</h1>
		</>
	)
}

export default App

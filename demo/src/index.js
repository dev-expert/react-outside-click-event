import React, { useState } from 'react'
import { render } from 'react-dom'

import HandleOutsideClick from '../../src'

export default function Demo() {

	const [divColor, setDivColor] = useState('yellow');
	return <HandleOutsideClick
		onOutsideClick={() => {
			alert("You click outside this div. Div color will be toggled.");
			setDivColor((val) => val === 'yellow' ? 'green' : 'yellow');
		}}
	>
		<div style={{
			position: 'absolute',
			width: '400px',
			height: '400px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			fontWeight: 'bold',
			fontSize: 'larger',
			backgroundColor: divColor
		}}>Click anywhere outside this box!!</div>
	</HandleOutsideClick>
}

render(<Demo />, document.querySelector('#demo'))

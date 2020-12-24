
# react-outside-click-event

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Installation

```sh
yarn add react-outside-click-event
```

## Demo
- https://codesandbox.io/s/quirky-meadow-npb48


## Usage
```
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
```

## References
- https://reactjs.org/docs/refs-and-the-dom.html
- https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event
- https://github.com/dev-expert/react-outside-click-event

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useHandleOutsideClick(ref, onOutsideClickFn) {
	useEffect(() => {
		function onOutsideClick(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				onOutsideClickFn();
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", onOutsideClick);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", onOutsideClick);
		};
	}, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function HandleOutsideClick(props) {
	const wrapperRef = useRef(null);
	useHandleOutsideClick(wrapperRef, props.onOutsideClick);
	return <div ref={wrapperRef}>{props.children}</div>;
}
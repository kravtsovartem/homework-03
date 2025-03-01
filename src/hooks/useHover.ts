import { useEffect, useRef, useState } from "react";

export default function useHover() {
	const ref = useRef(null);
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		if(!ref.current)
			return

		const domElement: HTMLElement = ref.current

		domElement.addEventListener('mouseover', () => {
			setHovered(true)
		})

		domElement.addEventListener('mouseout', () => {
			setHovered(false)
		})

		return () => {
			domElement.removeEventListener('mouseover', () => {})
			domElement.removeEventListener('mouseout', () => {})
			setHovered(false)
		}
		
	}, [ref])

	return {
		hovered,
		ref
	}
}
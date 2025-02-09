import useWindowEvent from "@/hooks/useWindowEvent"
import { useEffect, useState } from "react";

export default function useViewportSize() {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	useWindowEvent('resize', (e: Event) => {
		const { innerWidth, innerHeight } = e.currentTarget as Window
		
		setHeight(innerHeight)
		setWidth(innerWidth)
	}, false)

	useEffect(() => {
		setHeight(window.innerHeight)
		setWidth(window.innerWidth)
	}, [])


	return {
		width,
		height
	}
}
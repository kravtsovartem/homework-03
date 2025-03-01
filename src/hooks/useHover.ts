import { useEffect, useRef, useState } from "react";

interface IUseHover<T> {
	hovered: boolean,
	ref: React.Ref<T> | undefined
}

export default function useHover<T extends HTMLDivElement>(): IUseHover<T> {
	const ref = useRef<T>(null)
	const [hovered, setHovered] = useState<boolean>(false)


	function onMouseOver() {
		setHovered(true)
	}

	function onMouseOut() {
		setHovered(false)
	}


	useEffect(() => {
		if (!ref.current)
			return

		const domElement: HTMLElement = ref.current

		domElement.addEventListener('mouseover', onMouseOver)
		domElement.addEventListener('mouseout', onMouseOut)

		return () => {
			domElement.removeEventListener('mouseover', onMouseOver)
			domElement.removeEventListener('mouseout', onMouseOut)
			setHovered(false)
		}

	}, [ref])

	return {
		hovered,
		ref
	}
}
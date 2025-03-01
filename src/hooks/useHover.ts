import { useEffect, useRef, useState } from "react";

interface IUseHover<T> {
	hovered: boolean,
	ref: React.Ref<T> | undefined
}

export default function useHover<T extends HTMLDivElement>(): IUseHover<T> {
	const ref = useRef<T>(null)
	const [hovered, setHovered] = useState<boolean>(false)

	useEffect(() => {
		if (!ref.current)
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
import useWindowEvent from "@/hooks/useWindowEvent";
import { useState } from "react";

const useWindowScroll = (): UseWindowScroll => {
	const [scroll, setScroll] = useState<WindowScrollCoords>({ x: 0, y: 0 });

	useWindowEvent('scroll', () => {
		setScroll({ x: window.scrollX, y: window.scrollY });
	}, false);


	const scrollTo = ({ x = window.scrollX, y = window.scrollY }: WindowScrollToOptions) => window.scrollTo(x, y);

	return [scroll, scrollTo];
}

export default useWindowScroll
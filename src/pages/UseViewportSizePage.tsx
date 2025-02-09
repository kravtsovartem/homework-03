import useViewportSize from "@/hooks/useViewportSize";

export default function UseViewportSizePage() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}

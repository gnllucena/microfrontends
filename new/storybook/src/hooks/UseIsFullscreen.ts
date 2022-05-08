import useWindowSize from "./UseWindowSize";

function useIsFullscreen(): boolean {
  const windowSize = useWindowSize();

  return windowSize.width > 991;
}

export default useIsFullscreen;
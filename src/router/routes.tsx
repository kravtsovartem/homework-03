import UseFetchPage from '@/pages/UseFetchPage'
import UseLocalStoragePage from '@/pages/UseLocalStoragePage'
import UseHover from '@/pages/UseHoverPage'
import UseViewportSizePage from '@/pages/UseViewportSizePage'
import UseWindowScrollPage from '@/pages/UseWindowScrollPage'
import UseTogglePage from '@/pages/UseTogglePage'

const routes = [
  {
    path: '/',
    element: <UseFetchPage />,
  },
  {
    path: '/useLocalStorage',
    element: <UseLocalStoragePage />,
  },
  {
    path: '/useHover',
    element: <UseHover />,
  },
  {
    path: '/useViewportSize',
    element: <UseViewportSizePage />,
  },
  {
    path: '/useWindowScroll',
    element: <UseWindowScrollPage />,
  },
  {
    path: '/useToggle',
    element: <UseTogglePage />,
  },
]

export default routes

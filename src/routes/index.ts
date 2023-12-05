import HomePage from '@/pages/Home'
import Following from '@/pages/Following'
import UploadPage from '@/pages/Upload'
import HeaderOnly from '@/components/Layout/HeaderOnly'
import DefaultLayout from '@/components/Layout/DefaultLayout'



export const publicRoutes = [
  {
    path: '/',
    component: HomePage,
    layout: DefaultLayout,
  },
  {
    path: '/following',
    component: Following,
    layout: DefaultLayout,
  },
  {
    path: '/upload',
    component: UploadPage,
    layout: HeaderOnly,
  },
]

export const privateRoutes = []

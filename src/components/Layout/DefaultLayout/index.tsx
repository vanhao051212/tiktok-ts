import Header from '../components/Header'
import Sidebar from './Sidebar'
import { ComponentProps } from '@/utils/interface'

const DefaultLayout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout

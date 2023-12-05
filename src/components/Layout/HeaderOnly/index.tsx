import Header from '../components/Header'
import { ComponentProps } from '@/utils/interface'

const DefaultLayout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout

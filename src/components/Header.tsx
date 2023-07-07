import Logo from '../assets/logo.svg'
import { headerList } from '../constants'
import { SocialIcon } from '.'
import { Link } from 'react-router-dom'


interface Props {
  mode: 'navigation' | 'anchor';
}

const Header: React.FC<Props> = ({ mode = 'anchor' }) => {
  return (
    <header className="flex flex-row justify-center md:justify-between items-center px-8 h-20 bg-transparent absolute top-0 left-0 right-0 shadow-sm">
      <div className="flex flex-row gap-2">
        <img src={Logo} alt="logo" className="w-8 h-8" />
        <p className="text-lg font-bold text-violet-500">Backendify</p>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex flex-row gap-12 items-center">
          {headerList.map(item => {
            if(mode === 'anchor') {
              return (
                <a href={item.anchor} key={item.anchor}>
                  <li><p className="text-base font-semibold text-gray-900 hover:text-violet-400">{item.title}</p></li>
                </a>
              )
            } else {
              return (
                <Link to={item.link} key={item.anchor}>
                  <li><p className="text-base font-semibold text-gray-900 hover:text-violet-400">{item.title}</p></li>
                </Link>
              )
            }
          })}
        </ul>
      </nav>
      <div className="hidden flex-row gap-5 md:flex">
        <SocialIcon name="facebook" />
        <SocialIcon name="telegram" />
      </div>
    </header>
  )
}

export default Header

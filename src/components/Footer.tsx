import { headerList } from '../constants'
import Logo from '../assets/logo.svg'
import Icon from './Icon'
import { SocialIcon } from '.'
import { Link } from 'react-router-dom'


interface Props {
  mode: 'navigation' | 'anchor';
}

const Footer: React.FC<Props> = ({ mode = 'anchor' }) => {
  return (
    <footer className="flex flex-col justify-center items-center pt-20 pb-16 bg-violet-50">
      <nav>
        <ul className="flex flex-row gap-12 items-center">
          {headerList.map(item => {
            if (mode === 'anchor') {
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
      <div className="flex flex-row gap-10 items-center mt-10">
        <SocialIcon name="facebook" />
        <SocialIcon name="telegram" />
      </div>
      <div className="flex flex-row gap-2 items-center justify-center mt-10">
        <Icon name="mail" size={16} />
        <a className="text-base font-medium text-gray-600 cursor-pointer transition-all ease-in hover:underline" href="mailto:info@backendify.tech">info@backendify.tech</a>
      </div>
      <div className="flex flex-row gap-2 my-6">
        <img src={Logo} alt="logo" className="w-8 h-8" />
        <p className="text-lg font-bold text-violet-500">Backendify</p>
      </div>
      <p className="text-center text-gray-400 text-[10px] font-medium">© 2020 Backendify, Inc. All rights reserved.</p>
    </footer>
  )
}

export default Footer

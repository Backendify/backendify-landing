import { ReactComponent as Facebook } from '../assets/icons/social/facebook.svg'
import { ReactComponent as Telegram } from '../assets/icons/social/telegram.svg'


export type SocialIconsNames = 'facebook' | 'telegram'

interface Props {
  name: SocialIconsNames;
  size?: number;
}

const SocialIcon: React.FC<Props> = ({ name, size = 32 }) => {
  switch (name) {
    case 'facebook':
      return <Facebook width={size} height={size} fill="#D1D5DB" className="cursor-pointer hover:fill-gray-500 active:fill-gray-500" onClick={() => window.open('https://www.facebook.com/profile.php?id=100091474542420', '_blank')} />
    case 'telegram':
      return <Telegram width={size} height={size} fill="#D1D5DB" className="cursor-pointer hover:fill-gray-500 active:fill-gray-500" onClick={() => window.open('https://t.me/backendify', '_blank')} />
    default:
      return null
  }
}

export default SocialIcon

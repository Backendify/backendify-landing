import { ReactComponent as Mail } from '../assets/icons/mail.svg'
import { ReactComponent as ArrowNarrowRight } from '../assets/icons/arrow-narrow-right.svg'
import { ReactComponent as Cash } from '../assets/icons/cash.svg'
import { ReactComponent as Clock } from '../assets/icons/clock.svg'
import { ReactComponent as Click } from '../assets/icons/cursor-click.svg'


export type IconsNames = 'mail' | 'arrow-narrow-right' | 'cash' | 'clock' | 'click'

interface Props {
  name: IconsNames;
  color?: string;
  size?: number;
}

const Icon: React.FC<Props> = ({ name, size = 24, color ='#D1D5DB' }) => {
  switch (name) {
    case 'mail':
      return <Mail width={size} height={size} stroke={color} />
    case 'arrow-narrow-right':
      return <ArrowNarrowRight width={size} height={size} stroke={color} />
    case 'cash':
      return <Cash width={size} height={size} stroke={color} />
    case 'clock':
      return <Clock width={size} height={size} stroke={color} />
    case 'click':
      return <Click width={size} height={size} stroke={color} />
    default:
      return null
  }
}

export default Icon

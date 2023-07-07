import Icon, { IconsNames } from '../Icon';
import './styles.css'


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  disabled?: boolean;
  colorClass?: string;
  classes?: string;
  fullWidth?: boolean;
  outlined?: boolean;
  icon?: IconsNames;
  loading?: boolean;
}


const Button: React.FC<Props> = ({
  title, disabled=false, colorClass='violet-500', classes, fullWidth=false, outlined=false, icon, loading=false, ...rest
}) => {
  return (
    <button
      className={`gap-2 ${outlined ? 'btn-outlined' : `btn bg-${colorClass}`} border-${colorClass} ${fullWidth && 'w-full'} ${classes || ''}`}
      disabled={disabled}
      {...rest}
    >
      {loading ? (
        <div className="loader border-4" />
      ) : (
        <>
          <p className={`text-base font-bold text-${outlined ? colorClass : 'white'}`}>{title}</p>
          {icon && <Icon name={icon} color={colorClass === 'gray-900' ? '#111827' : 'white'} />}
        </>
      )}
    </button>
  )
}

export default Button

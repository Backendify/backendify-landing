import './styles.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  classes?: string;
}

const Input: React.FC<Props> = ({ placeholder, classes, ...rest }) => {
  return (
    <input
      className={`w-80 py-[10px] px-[14px] text-base border border-gray-300 rounded-lg input outline-none ${classes}`}
      placeholder={placeholder}
      {...rest}
    />
  )
}

export default Input

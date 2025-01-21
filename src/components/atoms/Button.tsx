interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline'
  children: React.ReactNode
}

const Button = ({ variant = 'solid', children, ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-2 rounded font-medium transition-colors duration-200"
  const variantStyles = {
    solid: "bg-[#212529] text-white hover:bg-gray-800",
    outline: "border-2 border-[#212529] text-[#212529] hover:bg-[#212529] hover:text-white"
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button 
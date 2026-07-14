// Estilos importados centralizadamente desde src/styles/global.css

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'a',
  icon: Icon,
  className = '',
  ...props
}) {
  const Tag = as
  return (
    <Tag className={`btn btn--${variant} btn--${size} ${className}`} {...props}>
      <span>{children}</span>
      {Icon ? <Icon size={18} strokeWidth={2.25} /> : null}
    </Tag>
  )
}

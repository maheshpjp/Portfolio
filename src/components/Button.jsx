import React from 'react'

function Button({ className = '', size = 'default', children, href, onClick, ...props }) {
  const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25";
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    }

    if (e.defaultPrevented || !href) {
      return
    }

    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    window.location.hash = href.replace('#', '')
  }

  return (
    <button className={classes} onClick={handleClick} {...props}>
      <span className='relative flex items-center justify-center gap-2'>{children}</span>
    </button>
  )
}

export default Button
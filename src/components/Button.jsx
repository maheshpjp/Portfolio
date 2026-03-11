import React from 'react'

function Button({ className = '', size = 'default', children, href, onClick, ...props }) {
  const baseClasses = "relative overflow-hidden rounded-md border border-primary/30 bg-primary/90 text-primary-foreground uppercase tracking-[0.22em] shadow-[0_0_0_1px_rgba(92,255,149,0.1),0_0_28px_rgba(92,255,149,0.12)] transition-all duration-300 hover:bg-primary hover:shadow-[0_0_0_1px_rgba(92,255,149,0.2),0_0_36px_rgba(92,255,149,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary";
  const sizeClasses = {
    sm: 'px-4 py-2 text-[11px]',
    default: 'px-6 py-3 text-[12px]',
    lg: 'px-8 py-4 text-[13px]'
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
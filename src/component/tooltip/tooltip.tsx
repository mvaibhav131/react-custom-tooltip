import React, { useEffect, useState, ReactNode } from 'react'
import './tooltip.scss'

interface TooltipProps {
  title: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'; 
  style?: React.CSSProperties;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, children, position = 'top', style = {}, className = '' }) => {
  const [visible, setVisible] = useState(false)

  const showTooltip = () => setVisible(true)
  const hideTooltip = () => setVisible(false)

  useEffect(() => {
    setVisible(false) 
  }, [title, children])

  return (
    <div className={`custom-tooltip-wrapper ${className}`} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      <span>{children}</span>
      {visible && title.toString().length > 0 && (
        <div className="tooltip-wrapper">
          <p className={`custom-tooltip-content custom-tooltip-${position}`} style={style}>{title}</p>
        </div>
      )}
    </div>
  )
}

export default Tooltip

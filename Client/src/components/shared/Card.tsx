import type { FC, ReactNode } from 'react'

interface CardInterface {
  children?: ReactNode
  title?: ReactNode
  footer?: ReactNode
  divider?: boolean
  key?: string | number
  NoPadding?: boolean
}

const Card: FC<CardInterface> = ({ NoPadding, key = 0, children, title, footer, divider = false }) => {
  return (
    <div className={`bg-white shadow-lg ${NoPadding ? "" : "px-5 py-4"} rounded-lg border border-gray-100 flex flex-col h-full`}
      key={key}>
        
      {title && (
        <h1 className="text-lg font-semibold capitalize">{title}</h1>
      )}

      {divider && (
        <div className="border-b border-b-gray-200 -mx-5 my-4" />
      )}

      <div className="flex-1 overflow-auto">
        {children && (
          <div className="text-gray-500 space-y-2">
            {children}
          </div>
        )}
      </div>

      {footer && (
        <div className="mt-4">
          {footer}
        </div>
      )}
    </div>
  );
};


export default Card
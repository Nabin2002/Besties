import type { FC, ReactNode } from 'react';
interface AvatarInterface {
    title?: string | null
    subtitle?: ReactNode
    image?: string
    titleColor?: string
    subtitleColor?: string
    size?: "lg" | "md"
    key?: string | number
    onClick?: () => void // onclick is a react component property which may come or maynot, and its type is a funtion with no parameters and no return type.
}

const Avatar: FC<AvatarInterface> = ({key = 0, onClick, title, subtitle = "Subtitle Missing", image, titleColor = '#000000', subtitleColor = '#f5f5f5', size = 'lg' }) => {
    return (
        <div className='flex gap-3 items-center' key={key}>
            {
                image &&
                <img
                    onClick={onClick}
                    src={image}
                    className={`${size === "lg" ? "w-12 h-12" : "w-8 h-8"} rounded-full object-cover`}
                />
            }
            {(title && subtitle) && (
                <div>
                    {title && (
                        <h1
                            className={`${size === "lg" ? "text-lg leading-6" : "text-base"} font-medium`}
                            style={{ color: titleColor }}
                        >
                            {title}
                        </h1>
                    )}
                    {subtitle && (
                        <div style={{ color: subtitleColor }}>{subtitle}</div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Avatar
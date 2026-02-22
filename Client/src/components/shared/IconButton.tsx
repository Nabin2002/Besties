import type { FC } from 'react'
import 'remixicon/fonts/remixicon.css'

const IconButtonModel = {
    primary: "bg-blue-50 hover:bg-blue-500 hover:text-white rounded font-medium text-blue-500 h-9 w-9 flex items-center justify-center  ",
    secondary: "bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded font-medium text-indigo-500  h-9 w-9 flex items-center justify-center ",
    danger: "bg-rose-50 hover:bg-rose-600 rounded hover:text-white font-medium text-rose-500  h-9 w-9 flex items-center justify-center ",
    warning: "bg-amber-50 hover:bg-amber-600 rounded hover:text-white font-medium text-amber-500  h-9 w-9 flex items-center justify-center ",
    dark: "bg-zinc-50 hover:bg-zinc-600 rounded hover:text-white font-medium text-zinc-500  h-9 w-9 flex items-center justify-center ",
    success: "bg-green-50 hover:bg-green-500 rounded hover:text-white font-medium text-green-500  h-9 w-9 flex items-center justify-center ",
    info: "bg-cyan-50 hover:bg-cyan-600 rounded hover:text-white font-medium text-cyan-500  h-9 w-9 flex items-center justify-center "
}

interface IconButtonInterface {
    type?: "primary" | "secondary" | "danger" | "warning" | "dark" | "success" | "info"
    onClick?: () => void
    icon: string
}

const IconButton: FC<IconButtonInterface> = ({ type = "primary", onClick, icon }) => {
    return (
        <button className={IconButtonModel[type]} onClick={onClick}>
            <i className={`ri-${icon} mr-1`}></i>
        </button>
    )
}

export default IconButton
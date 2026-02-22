import { type FC, type FormEvent, type ReactNode } from 'react'

export type FormDataType = Record<string, string>
interface FormInterface {
    children: ReactNode
    className: string
    onValue?: (value: FormDataType) => void
}

const Form: FC<FormInterface> = ({ children, className, onValue }) => {
    //We specify HTMLFormElement, so that Typescript know the exact DOM element that triggers the event
    //enabling correct typing and access to element specific properties..
    const handleFormData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        console.log(form)
        const formData = new FormData(form)
        const data: FormDataType = {}
        formData.forEach((value, name) => {
            data[name] = value.toString()
        })

        if (onValue)
            onValue(data)
    }
    return (
        <form className={className} onSubmit={handleFormData}>
            {children}
        </form>
    )
}

export default Form
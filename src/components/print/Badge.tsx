import React from 'react'

interface BadgeProps {
    text: string
}

/**Компонент для отображение какого-то текста в бадже, используется на страницах с печатью */
export const PrintBage: React.FC<BadgeProps> = ({ text }) => {
    return (
        <p className='font-semibold bg-gray-200 rounded px-2'>{text}</p>
    )
}

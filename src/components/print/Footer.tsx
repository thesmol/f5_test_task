import React from 'react'

// не доделан 
export const PrintOrderFooter: React.FC = () => {

    return (
        <footer className='w-100 flex justify-end'>
            <div className='w-[50%] gap-2'>
                <section className='flex w-full justify-between'>
                    <p>Всего изделий:</p>
                    <p>4 шт.</p>
                </section>
                <div className='h-0 w-full my-3 border-[0.5mm]' />
                <section className='flex w-full justify-between'>
                    <strong>Итоговая стоимость:</strong>
                    <strong>4 ₽</strong>
                </section>
            </div>
        </footer>
    )
}

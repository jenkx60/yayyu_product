import React, { useEffect, useState } from 'react'

const ColorTabs = () => {
    const [ colorType, setColorType ] = useState('red');

    useEffect(() => {
        localStorage.setItem('colorType', colorType)
    }, [colorType]);

    const renderColorContent = () => {
        switch (colorType) {
            case 'red':
            case 'purple':
            case 'yellow':
            case 'cyan':
                default:
                    return null;
        }
    };

    // const getButtonClass = (color) => {
    //     return `p-5 rounded-full ${colorType === color ? 'border-2 border-black' : 'border-2 border-black'}`
    // };
  return (
    <div>
        <div className='flex gap-5'>
            <div>
                <button
                    onClick={() => setColorType('red')}
                    className={`bg-tabred p-6 rounded-full ${colorType === 'red' ? 'border-2 border-black space-x-3 space-y-3' : 'border-none rounded-full'}`}
                ></button>
            </div>

            <div>
                <button
                    onClick={() => setColorType('purple')}
                    className={`bg-tabpurple p-6 rounded-full ${colorType === 'purple' ? 'border-2 border-black space-x-3 space-y-3' : 'border-none rounded-full'}`}
                ></button>
            </div>
            
            <div>
                <button
                    onClick={() => setColorType('yellow')}
                    className={`bg-yellow-400 p-6 rounded-full ${colorType === 'yellow' ? 'border-2 border-black space-x-3 space-y-3' : 'border-none rounded-full'}`}
                ></button>
            </div>

            <div>
                <button
                    onClick={() => setColorType('cyan')}
                    className={`bg-tabcyan p-6 rounded-full ${colorType === 'cyan' ? 'border-2 border-black space-x-3 space-y-3' : 'border-none rounded-full'}`}
                ></button>
            </div>

        </div>
        <div>
            {renderColorContent()}
        </div>
    </div>
  )
}

export default ColorTabs
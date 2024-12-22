"use client"
import React, { useEffect, useState } from 'react'

const SizeTabs = () => {
    const [ activeSize, setActiveTab ] = useState('small');
    const [ isClient, setIsClient ] = useState(false);

    useEffect(() => {
        localStorage.setItem('activeSize', activeSize);
        setIsClient(true);
    }, [activeSize]);

    const renderSizeContent = () => {
        switch (activeSize) {
            case 'small':
            case 'medium':
            case 'large':
            case 'xtralarge':
            case 'xxtralarge':
            default:
                return null;
        }
    };

    const getButtonClass = (size) => {
        return `text-black px-5 py-2 ${activeSize === size ? 'bg-black text-white' : 'bg-gray-200 text-black'}`;
    };

    if(!isClient) 
        return null

  return (
    <div>
        <div className='flex gap-5'>
            <div>
                <button
                    onClick={() => setActiveTab('small')}
                    className={getButtonClass('small')}
                    // aria-pressed={activeSize === 'small'}
                >S</button>
            </div>

            <div>
                <button
                    onClick={() => setActiveTab('medium')}
                    className={getButtonClass('medium')}
                    // aria-pressed={activeSize === 'medium'}
                >M</button>
            </div>

            <div>
                <button
                    onClick={() => setActiveTab('large')}
                    className={getButtonClass('large')}
                    // aria-pressed={activeSize === 'large'}
                >L</button>
            </div>

            <div>
                <button
                    onClick={() => setActiveTab('xtralarge')}
                    className={getButtonClass('xtralarge')}
                    // aria-pressed={activeSize === 'xtralarge'}
                >XL</button>
            </div>

            <div>
                <button
                    onClick={() => setActiveTab('xxtralarge')}
                    className={getButtonClass('xxtralarge')}
                    // aria-pressed={activeSize === 'xxtralarge'}
                >XXL</button>
            </div>
        </div>
        <div>
            {renderSizeContent()}
        </div>
    </div>
  )
}

export default SizeTabs
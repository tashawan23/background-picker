import React from 'react'
import { useSelectedCategoryValue } from '../context/selectedCategory-context'

export const Picker = () => {
    const categories = ['Mountains', 'Beaches', 'Dogs', 'Food']
    const { setSelectedCategory } = useSelectedCategoryValue()

    const handleClick = category => {
        setSelectedCategory(category);
    }

    return (
        <div className="category-picker">
            {categories.map((category) =>
            <span key={category} className="picker-button" onClick={()=> handleClick(category)}>
                {category}
            </span>
            )}
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { useSelectedCategoryValue } from '../context/selectedCategory-context'

export const PictureMenu = () => {
    const { selectedCategory } = useSelectedCategoryValue()
    const [pictures, setPictures] = useState([])
    const mountainPics = ['/images/Mountain1.jpeg', '/images/Mountain2.jpg','/images/Mountain3.jpg', '/images/Mountain4.jpg', 
    '/images/Mountain5.jpg','/images/Mountain6.jpg', '/images/Mountain7.jpeg','/images/Mountain8.jpeg']
    const beachPics = ['/images/Beach2.jpeg', '/images/Beach4.png','/images/Beach6.jpg','/images/Beach7.jpg'
    , '/images/Beach10.jpg', '/images/Beach9.jpg', '/images/Beach11.jpeg', '/images/Beach12.jpg']
    const dogPics = ['/images/Dog1.jpg', '/images/Dog2.jpg', '/images/Dog3.jpg',
    '/images/Dog4.jpg','/images/Dog5.jpg', '/images/Dog6.jpg', '/images/Dog7.jpg', '/images/Dog8.jpg']
    const foodPics = ['/images/Food1.jpg', '/images/Food2.jpg', '/images/Food3.jpg',
    '/images/Food4.jpg','/images/Food5.jpg', '/images/Food6.jpg', '/images/Food7.jpeg', '/images/Food8.jpg']

    useEffect(() => {
        selectedCategory == "Mountains"
        ? setPictures(mountainPics)
        : selectedCategory == "Beaches"
        ? setPictures(beachPics)
        : selectedCategory == "Dogs"
        ? setPictures(dogPics)
        : setPictures(foodPics)
    }, [selectedCategory])
    
    return (
        <div className="pictures-menu">
            <div className="menu-title">
                Pictures of {selectedCategory}
                </div>
                <div className="menu-pictures">
                    {pictures.map((pic) =>
                    <img key={pic} className="picture"
                    src={pic}>
                        </img>
                    )}
                </div>

        </div>
    )
}

import React from 'react'

const Collections = (props) => {

    const { title, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
        image11, image12, image13, image14, image15, image16} = props.catergory;

    return (
        <div className='collect'>
            <h2 className='centrename'>{title}</h2>
            <img src={image1} alt={image1} />
            <img src={image2} alt={image2} />
            <img src={image3} alt={image3} />
            <img src={image4} alt={image4} />
            <img src={image5} alt={image5} />
            <img src={image6} alt={image6} />
            <img src={image7} alt={image7} />
            <img src={image8} alt={image8} />
            <br />
            <div className="collect1">
            <img src={image9} alt={image9} />
            <img src={image10} alt={image10} />
            <img src={image11} alt={image11} />
            <img src={image12} alt={image12} />
            <img src={image13} alt={image13} />
            <img src={image14} alt={image14} />
            <img src={image15} alt={image15} />
            <img src={image16} alt={image16} />
            </div>

        </div>
    )
}

export default Collections

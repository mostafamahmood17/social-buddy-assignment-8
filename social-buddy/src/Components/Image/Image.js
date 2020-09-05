import React from 'react';

const Image = () => {
    const [image, setImage] = useState(fake);
    
    const picture = image.map(image => {
        return <img key={image.user} src= {image.user}/>
    })
    console.log(picture)
    return (
        <div>
            <h5>{picture[1]}</h5>
            
        </div>
    );
};

export default Image;
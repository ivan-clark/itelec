import Item from '../assets/itemsample.jpg'

const Description = () => {
    return (
        <div>
        <img src={Item} alt="sample" />
        <h1>TITLE ITEM</h1>
        <p>Description: 
            This item is of the highest quality and affordable price.
        </p>
       </div>
    )

}

export default Description;
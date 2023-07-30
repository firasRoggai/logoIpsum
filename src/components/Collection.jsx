import kissing from '../assets/img/kissing.webp'
import redShirtWomen from '../assets/img/redShirtWomen.webp'
import christmas from '../assets/img/christmas.webp'
import yellowShirtWomen from '../assets/img/yellowShirtWomen.webp'


const Collection = () => {
    const listOfImgs = [kissing, christmas, redShirtWomen, yellowShirtWomen]
    return (
        <section className="collection">
            <h3 className="collection__title">This is a collection</h3>
            <div className="collection__img-gallery">
                {listOfImgs.map(item => {
                    return (
                        <figure>
                            <img src={item} alt="" srcSet="" />
                        </figure>
                    )
                })}

            </div>
            <div className='collection__btn-container'>
            <button className='btn--lg'>
                See the collections
            </button>
            </div>
        </section>
    );
}

export default Collection;
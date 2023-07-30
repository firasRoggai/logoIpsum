import yelowShirtGuy from '../assets/img/yelowShirtGuy.webp'
import couplePic from '../assets/img/couplePic.webp'
const Section = () => {
    return (
        <section className='section'>
            <p className="section__title">I'm 30 px , make sure i look the same</p>
            <div className="section__main-imgs">
                <figure className="section__img">
                    <img src={couplePic} alt="a guy in a yellow shirt" />
                </figure>
                <figure className="section__img">
                    <img src={yelowShirtGuy} alt="a guy in a yellow shirt" />
                </figure>
            </div>
        </section>
    );
}

export default Section;

import Navigation from '../navigation/Navigation'
import Collections from './collection/Collections'
import Carrusel from './carrusell/Carrusell'
import Contact from './contact/Contact'



const Home = () => {
    
    return (
        <div>
            <Navigation />
            <section>
                <Collections />
            </section>
            <section>
                <Carrusel />
                <Carrusel />
            </section>
            <section>
                <Contact />
            </section>
        </div>
    )
}

export default Home
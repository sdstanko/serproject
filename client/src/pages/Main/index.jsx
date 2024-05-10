import { createContext, useContext, useRef } from 'react';
import './Main.css';
import Header from '../../components/Header';
import Intro from '../../components/Intro';
import Services from '../../blocks/Services';
import Prices from '../../blocks/Prices';
import About from '../../blocks/About';
import Steps from '../../blocks/Steps';
import Contact from '../../blocks/Contact';
import { MenuContext } from '../../App';

export const ContactRefContext = createContext(null)

function Main() {
    const introRef = useRef();
    const servicesRef = useRef();
    const pricesRef = useRef();
    const aboutRef = useRef();
    const stepsRef = useRef();
    const contactRef = useRef();

    const refsArr = [introRef, servicesRef, pricesRef, aboutRef, stepsRef, contactRef];
    const { openMenu, setOpenMenu } = useContext(MenuContext);

    return (
        <ContactRefContext.Provider value={contactRef}>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} refsArr={refsArr} />
            <Intro scrollto={introRef} />
            <Services scrollto={servicesRef} />
            <Prices scrollto={pricesRef} />
            <About scrollto={aboutRef} />
            <Steps scrollto={stepsRef} />
            <Contact scrollto={contactRef} />
        </ContactRefContext.Provider>
    );
}

export default Main;

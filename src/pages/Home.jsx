import React from 'react';
import Banner from '../components/Home/Banner';
import LanguageCategorySection from '../components/Home/LanguageCategorySection';
import HowItWorks from '../components/Home/HowItWorks';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <LanguageCategorySection></LanguageCategorySection>
            </section>
            <section>
                <HowItWorks></HowItWorks>
            </section>
        </div>
    );
};

export default Home;
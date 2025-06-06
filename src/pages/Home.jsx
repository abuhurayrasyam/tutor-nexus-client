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
            <section className='w-11/12 mx-auto'>
                <LanguageCategorySection></LanguageCategorySection>
            </section>
            <section className='w-11/12 mx-auto'>
                <HowItWorks></HowItWorks>
            </section>
        </div>
    );
};

export default Home;
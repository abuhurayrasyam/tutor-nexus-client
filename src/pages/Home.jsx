import React from 'react';
import Banner from '../components/Banner';
import LanguageCategorySection from '../components/Home/LanguageCategorySection';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <LanguageCategorySection></LanguageCategorySection>
            </section>
        </div>
    );
};

export default Home;
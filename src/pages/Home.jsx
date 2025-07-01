import React, { useContext } from 'react';
import Banner from '../components/Home/Banner';
import LanguageCategorySection from '../components/Home/LanguageCategorySection';
import HowItWorks from '../components/Home/HowItWorks';
import useDocumentTitle from '../hooks/useDocumentTitle';
import FamousTutorials from '../components/Home/FamousTutorials';
import StatsSection from '../components/Home/StatsSection';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import Loading from '../components/Loading';
import WhyChooseUs from '../components/Home/WhyChooseUs';

const Home = () => {

    const {loading, setLoading} = useContext(AuthContext);

    useDocumentTitle("Tutor Nexus | Home");

    return (
        <div>
            {
                loading ? (
                    <Loading></Loading>
                ) : (
                    <>
                        <section>
                            <Banner></Banner>
                        </section>
                        <section className='w-11/12 mx-auto'>
                            <StatsSection setLoading={setLoading}></StatsSection>
                        </section>
                        <section className='w-11/12 mx-auto'>
                            <LanguageCategorySection></LanguageCategorySection>
                        </section>
                        <section className='w-11/12 mx-auto'>
                            <HowItWorks></HowItWorks>
                        </section>
                        <section className='w-11/12 mx-auto'>
                            <FamousTutorials setLoading={setLoading}></FamousTutorials>
                        </section>
                        <section className='w-11/12 mx-auto'>
                            <WhyChooseUs></WhyChooseUs>
                        </section>
                    </>
                )
            }
        </div>
    );
};

export default Home;
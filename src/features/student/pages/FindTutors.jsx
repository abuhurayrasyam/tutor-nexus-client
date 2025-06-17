import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import TutorCard from '../components/TutorCard';
import SearchTutors from '../components/SearchTutors';
import Loading from '../../../components/Loading';
import axios from 'axios';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import FilteredTutorCard from '../components/FilteredTutorCard';

const FindTutors = () => {

    const [tutorsData, setTutorsData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const [searchParams] = useSearchParams();
    const languageParam = searchParams.get("language");

    useEffect(() => {
        setLoading(true);

        const query = search.trim() || languageParam;
        const url = query ? `https://tutor-nexus.vercel.app/tutorials?language=${query}` : 'https://tutor-nexus.vercel.app/tutorials';

        axios.get(url)
        .then((res) => {
            setTutorsData(res.data);
            setLoading(false);
        })

        window.scrollTo(0, 0);
    }, [search, languageParam, setTutorsData]);

    useDocumentTitle("Tutor Nexus | Find Tutors");

    return (
        <div className='w-11/12 mx-auto min-h-screen'>
            <h1 className='text-center text-md md:text-xl lg:text-2xl font-bold my-10'>Find Expert Online Tutors to Help You Learn a New Language</h1>
            <div className='flex justify-center items-center'>
                <SearchTutors setSearch={setSearch}></SearchTutors>
            </div>
            <div>
                {
                    loading ? (
                        <Loading></Loading>
                    ) : (
                        <>
                        {
                            tutorsData.length > 0 ? (
                                <div>
                                    {
                                        tutorsData.map(tutorData => 
                                            (search || languageParam) ? <FilteredTutorCard key={tutorData._id} tutorData={tutorData}></FilteredTutorCard> : <TutorCard key={tutorData._id} tutorData={tutorData}></TutorCard>
                                        )
                                    }
                                </div>
                            ) : (
                                <p className="text-center text-[#D4C9BE] mt-10">
                                    No tutors found. Try a different language or search term.
                                </p>
                            )
                        }
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default FindTutors;
import React, { useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router';
import TutorCard from '../components/TutorCard';
import SearchTutors from '../components/SearchTutors';
import { getTutorialsByLanguage } from '../../../api/tutorialsByLanguageApi';

const FindTutors = () => {

    const initialTutors = useLoaderData();

    const [tutorsData, setTutorsData] = useState(initialTutors);
    const [search, setSearch] = useState("");

    const [searchParams] = useSearchParams();
    const languageParam = searchParams.get("language");

    useEffect(() => {
        if (!search.trim() && languageParam) {
        getTutorialsByLanguage(languageParam)
            .then(data => setTutorsData(data))
            .catch(() => setTutorsData([]));
        return;
        }

        if (!search.trim() && !languageParam) {
        setTutorsData(initialTutors);
        return;
        }

        getTutorialsByLanguage(search)
        .then((data) => {
            setTutorsData(data)
        })
        .catch(() => {
            setTutorsData([]);    
        });
    },[search, initialTutors, languageParam])

    return (
        <div className='w-11/12 mx-auto min-h-screen'>
            <h1 className='text-center text-md md:text-xl lg:text-2xl font-bold my-10'>Find Expert Online Tutors to Help You Learn a New Language</h1>
            <div className='flex justify-center items-center'>
                <SearchTutors setSearch={setSearch}></SearchTutors>
            </div>
            <div>
                {
                    tutorsData.length ? (
                        <>
                            {
                                tutorsData.map(tutorData => <TutorCard key={tutorData._id} tutorData={tutorData}></TutorCard>)
                            }
                        </>
                    ) : (
                        <p className="text-center text-[#D4C9BE] mt-10">
                            No tutors found. Try a different language or search term.
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default FindTutors;
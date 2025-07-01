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
    const [sortBy, setSortBy] = useState("");

    const [searchParams] = useSearchParams();
    const languageParam = searchParams.get("language");

    useEffect(() => {
        setLoading(true);

        const query = search.trim() || languageParam;
        const url = query ? `https://tutor-nexus.vercel.app/tutorials?language=${query}` : 'https://tutor-nexus.vercel.app/tutorials';

        axios.get(url)
            .then((res) => {
                let data = res.data;

                if (sortBy === "rating") {
                    data.sort((a, b) => (b.tutorialReview || 0) - (a.tutorialReview || 0));
                } else if (sortBy === "priceLowHigh") {
                    data.sort((a, b) => Number(a.tutorialPrice || 0) - Number(b.tutorialPrice || 0));
                } else if (sortBy === "priceHighLow") {
                    data.sort((a, b) => Number(b.tutorialPrice || 0) - Number(a.tutorialPrice || 0));
                }

                setTutorsData(data);
                setLoading(false);
            });

        window.scrollTo(0, 0);
    }, [search, languageParam, sortBy]);

    useDocumentTitle("Tutor Nexus | Find Tutors");

    return (
        <div className='w-11/12 mx-auto min-h-screen'>
            <h1 className='text-center text-md md:text-xl lg:text-2xl font-bold my-10'>
                Find Expert Online Tutors to Help You Learn a New Language
            </h1>

            <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-6'>
                <SearchTutors setSearch={setSearch} />
                <select
                    onChange={(e) => setSortBy(e.target.value)}
                    value={sortBy}
                    className='select select-bordered'
                >
                    <option value="">Sort By</option>
                    <option value="rating">Rating (High to Low)</option>
                    <option value="priceLowHigh">Price (Low to High)</option>
                    <option value="priceHighLow">Price (High to Low)</option>
                </select>
            </div>

            <div>
                {
                    loading ? (
                        <Loading />
                    ) : (
                        <>
                            {
                                tutorsData.length > 0 ? (
                                    <div>
                                        {
                                            tutorsData.map(tutorData =>
                                                (search || languageParam)
                                                    ? <FilteredTutorCard key={tutorData._id} tutorData={tutorData} />
                                                    : <TutorCard key={tutorData._id} tutorData={tutorData} />
                                            )
                                        }
                                    </div>
                                ) : (
                                    <p className="text-center text-secondary mt-10">
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
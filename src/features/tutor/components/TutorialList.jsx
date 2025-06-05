import React, { use, useState } from 'react';
import TutorialTableRow from './TutorialTableRow';
import { Link } from 'react-router';

const TutorialList = ({myTutorialsPromise}) => {

    const myInitialTutorials = use(myTutorialsPromise);

    const [myTutorials, setMyTutorials] = useState(myInitialTutorials);

    return (
        <div className="overflow-x-auto">
            {
               myTutorials.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Language</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myTutorials.map((tutorial, index) => <TutorialTableRow key={tutorial._id} index={index} tutorial={tutorial} myTutorials={myTutorials} setMyTutorials={setMyTutorials}></TutorialTableRow>)
                            }
                        </tbody>
                    </table>
                ) : (
                    <div className='flex items-center justify-center h-screen'>
                        <div className="text-center py-10">
                            <h2 className="text-2xl font-semibold text-natural">You haven't published any tutorials yet.</h2>
                            <p className="text-[#D4C9BE] mt-2">Start by creating a new tutorial to see it listed here.</p>
                            <Link to={'/tutor/add-tutorials'}><button className='btn mt-5 bg-[#D4C9BE] hover:bg-[#B6B09F] border-1 border-dashed border-[#123458] text-[#123458]'>Add a Tutorials</button></Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default TutorialList;
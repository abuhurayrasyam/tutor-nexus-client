import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const TutorialTableRow = ({index, tutorial, myTutorials, setMyTutorials}) => {

    const axiosSecure = useAxiosSecure();

    const {_id, tutorialImage, tutorialLanguage, tutorialPrice, tutorialDescription, tutorialReview} = tutorial;

    const handleDeleteTutorial = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/tutorials/${id}`)
                .then(res => {
                    if(res.data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Tutorial has been deleted.",
                            icon: "success"
                        });

                        const remainingTutorials = myTutorials.filter(user => user._id !== id);
                        setMyTutorials(remainingTutorials);
                    }
                })
            }
        });
    }

    return (
        <tr>
            <th>{index +1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={tutorialImage} />
                        </div>
                    </div>
                </div>
            </td>
            <td>{tutorialLanguage}</td>
            <td>{tutorialPrice}</td>
            <td>{tutorialDescription}</td>
            <td>{tutorialReview}</td>
            <th className='flex gap-5 justify-center items-center'>
                <Link to={`/dashboard/update-tutorial/${_id}`} title="Update"><FaRegEdit size={25} className="text-blue-500 hover:text-blue-700 text-lg md:text-xl" /></Link>
                <button onClick={() => handleDeleteTutorial(_id)} title="Delete"><MdDeleteForever size={26} className="text-red-500 hover:text-red-700 text-lg md:text-xl cursor-pointer" /></button>
            </th>
        </tr>
    );
};

export default TutorialTableRow;
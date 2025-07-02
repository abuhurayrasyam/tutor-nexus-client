import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import Loading from "../../../components/Loading";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import myTutorialsApi from "../../../api/myTutorialsApi";
import axios from "axios";

const DashboardOverview = () => {

  useDocumentTitle("Tutor Nexus | Dashboard Overview");

  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [allTutorials, setAllTutorials] = useState([]);
  const [myTutorials, setMyTutorials] = useState([]);

  const { myTutorialsPromise } = myTutorialsApi();

  useEffect(() => {
    setLoading(true);

    window.scrollTo(0, 0);

    axios.get("https://tutor-nexus.vercel.app/tutorials")
    .then((res) => {
      setAllTutorials(res.data);
    })
    .finally(() => {
        setLoading(false);
    })

    myTutorialsPromise(user?.email)
    .then((res) => {
        setMyTutorials(res);
    })
    .finally(() => {
        setLoading(false);
    })
  }, [user?.email]);


  if (loading) return <Loading />;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      <div className="mb-8 p-6 bg-secondary rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6">
        <img
          className="rounded-full h-24 w-24 border-3 border-primary object-cover"
          src={user?.photoURL}
          alt="User Avatar"
        />
        <div className="text-neutral space-y-2">
          <h2 className="text-lg text-primary md:text-2xl font-bold">Welcome, {user?.displayName}</h2>
          <div className="text-sm md:text-base text-primary">
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Email Verified:</strong> {user?.emailVerified ? "Yes" : "No"}</p>
            <p><strong>Account Created:</strong> {new Date(user?.metadata?.creationTime).toLocaleString()}</p>
            <p><strong>Last Login:</strong> {new Date(user?.metadata?.lastSignInTime).toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-secondary rounded-xl shadow-md p-6 flex flex-col items-center">
          <div className="text-5xl font-extrabold text-primary mb-2">{allTutorials.length}</div>
          <div className="text-primary font-semibold">Total Tutorials</div>
        </div>

        <div className="bg-secondary rounded-xl shadow-md p-6 flex flex-col items-center">
          <div className="text-5xl font-extrabold text-primary mb-2">{myTutorials.length}</div>
          <div className="text-primary font-semibold">My Tutorials</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;

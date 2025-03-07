import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="my-10">
      <div className="space-y-3">
        <h2 className="text-4xl text-center font-semibold">Featured Jobs</h2>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {
            jobs.slice(0, dataLength).map((job) => (
                <Job key={job.id} job={job}></Job>
            ))
        }
      </div>
      <div className="text-center mt-4">
        <div className={dataLength === jobs.length && "hidden"}>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn bg-[#a041d3] text-white"
          >
            Show All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [appliedJobs,setAppliedJobs]=useState([])
    const [displayJobs,setDisplayJobs]=useState([])

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite ==='Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite ==='Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect (()=>{
        const storedJobIds= getStoredJobApplication()
        if(jobs.length>0){
            // const jobsApplied =jobs.filter(job => storedJobIds.includes(job.id))

            const jobsApplied=[];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id)
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    },[])
    return (
        <div>
            <h2 className="text-xl font-semibold text-center mt-8">Jobs I applied : {appliedJobs.length}</h2>

            <div className="text-right">
                <details className="dropdown">
                  <summary className="m-1 btn">Filter by</summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                  </ul>
                </details>
            </div>

            <div className="mt-2 mb-10">
                {
                    displayJobs.map( job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
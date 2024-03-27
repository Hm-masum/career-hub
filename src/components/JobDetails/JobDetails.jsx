import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";

const JobDetails = () => {
    const jobs =useLoaderData();
    const {id}= useParams();
    const idInt=parseInt(id)
    const job =jobs.find(job=>job.id===idInt)

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applied successfully')
    }

    return (
        <div>
            <h2 className="text-center text-xl font-semibold m-6">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-3">
                <div className="border space-y-5 md:col-span-2 p-6 rounded-2xl">
                    <h2><span className="font-semibold">Job Description:</span> {job.job_description}</h2>
                    <h2><span className="font-semibold">Job Description:</span> {job.job_responsibility}</h2>
                    <h2><span className="font-semibold">Educational Requirements: </span> {job.educational_requirements}</h2>
                    <h2><span className="font-semibold">Experiences: </span> {job.experiences}</h2>
                </div>
                <div className="border md:col-span-1 p-6 rounded-2xl">
                    <div>
                      <div className="space-y-1">
                          <h2 className="text-xl font-semibold">Job Details</h2>
                          <div className="divider"></div>
                          <h2><span className="font-semibold">Salary:</span> {job.salary}</h2>
                          <h2><span className="font-semibold">Job Title:</span> {job.job_title}</h2>
                      </div>
                      <div className="space-y-1 mt-5">
                          <h2 className="text-xl font-semibold">Contact Information</h2>
                          <div className="divider"></div>
                          <h2><span className="font-semibold">Phone:</span> {job.contact_information.phone}</h2>
                          <h2><span className="font-semibold">Email:</span> {job.contact_information.email}</h2>
                          <h2><span className="font-semibold">Address:</span> {job.contact_information.address}</h2>
                      </div>
                    </div>
                    
                    <button onClick={handleApplyJob} className="btn my-4 btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
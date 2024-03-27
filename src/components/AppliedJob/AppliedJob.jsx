import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";

const AppliedJob = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,salary,job_type}=job

    return (
        <div className="p-4 border-2 flex items-center rounded-2xl justify-between mb-5">
            <div className="flex items-center space-x-8">
                <div className="">
                    <img src={logo} alt="" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">{job_title}</h2>
                    <h2 className="text-xl">{company_name}</h2>
                    <div>
                        <button className="px-5 py-2 border rounded-xl border-[#a041d3] text-[#a041d3]">{remote_or_onsite}</button>
                        <button className="px-5 ml-4 py-2 border rounded-xl border-[#a041d3] text-[#a041d3]">{job_type}</button>
                    </div>
                    <div className="flex gap-3">
                        <p className="flex"><HiLocationMarker className="text-2xl" /> <span>{location}</span></p>
                        <p  className="flex"><HiOutlineCurrencyDollar className="text-2xl" /> <span>Salary : {salary}</span></p>
                    </div>
                </div>
            </div>
            <div>
                <button className="px-5 py-3 rounded-xl bg-[#a041d3] text-white">View Details</button>
            </div>
        </div>
    );
};

export default AppliedJob;
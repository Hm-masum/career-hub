import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {id, logo,job_title,company_name,remote_or_onsite,location,job_type,salary } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 border-2 rounded-2xl p-4">
        <figure>
          <img
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body space-y-1">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="space-x-4">
            <button className="px-5 py-2 font-semibold border rounded-xl border-[#a041d3] text-[#a041d3]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-semibold border rounded-xl border-[#a041d3] text-[#a041d3]">{job_type}</button>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="flex items-center"><MdOutlineLocationOn className="text-2xl mr-2" />{location}</h2>
            <h2 className="flex items-center"><HiOutlineCurrencyDollar className="text-2xl mr-2"/>{salary}</h2>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
               <button className="btn bg-[#a041d3] text-white">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;

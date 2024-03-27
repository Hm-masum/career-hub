const Banner = () => {
  return (
    <div>
      <div className="p-10 flex bg-base-200 my-10 rounded-2xl">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
          <img
            src="https://i.ibb.co/4tLy2tz/pexels-andrea-piacquadio-927451.jpg"
            className="rounded-lg w-[50%]"
          />
          <div className="w-1/2 mx-auto">
            <h1 className="text-5xl font-bold">
              One Step Closer To Your Dream Job
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

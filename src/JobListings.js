import JobListing from "./JobListing";

export default function JobListings({jobs, onAddTag}) {
  return (
    <div className="JobListings__container">
      {
        jobs.map((job) => {
          return (
            <JobListing key={job.id} job={job} onAddTag={onAddTag}/>
          );
        })
      }
    </div>
  );
}
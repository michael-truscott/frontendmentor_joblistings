import JobListing from "./JobListing";

export default function JobListings(props) {
  return (
    <div className="JobListings__container">
      {
        props.jobs.map((job) => {
          return (
            <JobListing key={job.id} job={job} />
          );
        })
      }
    </div>
  );
}
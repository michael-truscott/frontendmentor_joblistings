export default function JobListing({job}) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];
  let classes = "JobListing__container";
  if (job.featured) {
    classes += " featured";
  }
  
  return (
    <div className="JobListing__border-container">
      <div className={classes}>
        <div className="JobListing__image-and-summary">
          <img className="JobListing__image" src={process.env.PUBLIC_URL + job.logo} alt="" />
          <JobSummary job={job}/>
        </div>
        <JobTags tags={tags} />
      </div>
    </div>
  );
}

function JobSummary({job}) {
  return (
    <div className="JobSummary__container">
      <div className="JobSummary__company-and-highlights">
        <p className="JobSummary__company">{job.company}</p>
        {job.new && <div className="new">New!</div>}
        {job.new && <div className="featured">Featured</div>}
      </div>
      <p className="JobSummary__position">{job.position}</p>
      <p className="JobSummary__details">{job.postedAt} <span className="interpunct">·</span> {job.contract} <span className="interpunct">·</span> {job.location}</p>
    </div>
  );
}

function JobTags({tags}) {
  return (
    <div className="JobTags__container">
      {
        tags.map((tag, index) => {
          return (
            <JobTag key={index} tag={tag} />
          );
        })
      }
    </div>
  );
}

function JobTag({tag}) {
  return (
    <div className="JobTag__container">
      <p>{tag}</p>
    </div>
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */

export default function JobListing({job, onAddTag}) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];
  let classes = "JobListing__container";
  if (job.featured) {
    classes += " featured";
  }
  
  return (
    <div className="JobListing__relative-container">
      <div className="JobListing__border-container">
        <div className={classes}>
          <div className="JobListing__image-and-summary">
            <img className="JobListing__image" src={process.env.PUBLIC_URL + job.logo} alt="" />
            <JobSummary job={job}/>
          </div>
          <hr />
          <JobTags tags={tags} onAddTag={onAddTag} />
        </div>
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
        {job.featured && <div className="featured">Featured</div>}
      </div>
      <a href="#" className="JobSummary__position">{job.position}</a>
      <p className="JobSummary__details">{job.postedAt} <span className="interpunct">·</span> {job.contract} <span className="interpunct">·</span> {job.location}</p>
    </div>
  );
}

function JobTags({tags, onAddTag}) {
  return (
    <div className="JobTags__container">
      {
        tags.map((tag, index) => {
          return (
            <JobTag key={index} tag={tag} onClick={() => onAddTag(tag)}/>
          );
        })
      }
    </div>
  );
}

function JobTag({tag, onClick}) {
  return (
    <div className="JobTag__container" onClick={onClick}>
      <p>{tag}</p>
    </div>
  );
}

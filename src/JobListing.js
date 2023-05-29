export default function JobListing({job}) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];
  return (
    <div className="JobListing__container">
      {
        // TODO: highlight left corner if featured
      }
      <div className="JobListing__image-and-summary">
        <img src={process.env.PUBLIC_URL + job.logo} alt="" />
        <JobSummary job={job}/>
      </div>
      <JobTags tags={tags} />
    </div>
  );
}

function JobSummary({job}) {
  return (
    <div className="JobSummary__container">
      <p className="JobSummary__company">{job.company}</p>
      {
      // TODO: new/featured tags
      }
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
            // <p key={index}>{tag}</p>
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

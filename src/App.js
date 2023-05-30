import BackgroundDesktop from './images/bg-header-desktop.svg';
import BackgroundMobile from './images/bg-header-mobile.svg';
import data from './data.json';
import JobListings from './JobListings';
import FilterBar from './FilterBar';
import React, { useState } from 'react';

function App() {
  const [tags, setTags] = useState(["Frontend", "CSS", "JavaScript"]);
  const onClear = () => { setTags([]) };
  const onRemoveTag = (toRemove) => {
    setTags((oldTags) => oldTags.filter((t) => t !== toRemove));
  };
  const onAddTag = (toAdd) => {
    setTags((oldTags) => {
      if (oldTags.includes(toAdd)) {
        return oldTags;
      } else {
        return [...oldTags, toAdd];
      }
    });
  };

  const jobs = tags.length === 0 ? data :
    data.filter((job) => {
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
      // Job must match every selected tag
      return tags.every((tag) => jobTags.includes(tag));
    });

  return (
    <div className="App">
      <HeaderBackground />
      <div className="App__container">
        {
          tags.length > 0 && <FilterBar tags={tags} onClear={onClear} onRemoveTag={onRemoveTag} />
        }
        <JobListings jobs={jobs} onAddTag={onAddTag} />
      </div>
    </div>
  );
}

function HeaderBackground() {
  return (
    <picture>
      <source media="(max-width: 600px)" srcSet={BackgroundMobile} />
      <source media="(min-width: 601px)" srcSet={BackgroundDesktop} />
      <img src={BackgroundDesktop} alt="" className="App__background-image"/>
    </picture>
  );
}

export default App;

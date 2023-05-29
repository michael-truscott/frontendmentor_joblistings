import BackgroundDesktop from './images/bg-header-desktop.svg';
import BackgroundMobile from './images/bg-header-mobile.svg';
import data from './data.json';
import JobListings from './JobListings';

function App() {
  return (
    <div className="App">
      <HeaderBackground />
      <div className="App__container">
        <JobListings jobs={data} />
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

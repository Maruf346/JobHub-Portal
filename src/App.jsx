import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HomeCards from './components/HomeCards.jsx'
import JobListings from './components/JobListings.jsx'
import ViewAllJobs from './components/ViewAllJobs.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="Welcome to JobHub" subtitle="Find Your Dream Job Today" />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  )
}

export default App

import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero title="Welcome to JobHub" subtitle="Your one-stop solution for job hunting" />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage

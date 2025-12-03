import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs';
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, [isHome]);
    if (error) return <div>Error: {error.message}</div>;

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Featured Jobs' : 'Browse Jobs'}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default JobListings

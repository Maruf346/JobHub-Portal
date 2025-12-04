import { useParams, useLoaderData } from "react-router-dom";

const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();

    return (
        <div>
            <h1>{job.title}</h1>
            <p>{job.description}</p>
        </div>
    );
}

const jobLoader = async ({ params }) => {
    const response = await fetch(`/api/jobs/${params.id}`);
    const job = await response.json();
    return job;
}

export { JobPage as default, jobLoader };

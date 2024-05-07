// JobList.jsx
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import JobCard from './JobCard';

const JobList = ({ jobs }) => {
    return (
        <Grid container spacing={4}>
            {jobs.map((job) => (
                <Grid item key={job.id} xs={12} sm={6} md={4}>
                    <JobCard job={job} />
                </Grid>
            ))}
        </Grid>
    );
};

JobList.propTypes = {
    jobs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            experience: PropTypes.string.isRequired,
            applyLink: PropTypes.string.isRequired,
            posted: PropTypes.string.isRequired,
            estimatedSalary: PropTypes.string.isRequired,
            // refferal: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default JobList;
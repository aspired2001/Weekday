import  { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const JobCard = ({ job }) => {
    const imgSrc = "https://img.freepik.com/free-vector/flat-design-atheism-logo-template_23-2149242249.jpg?size=626&ext=jpg&ga=GA1.1.1376948937.1714888528&semt=ais";

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ display: 'flex', flexDirection: 'column', width: '400px', borderRadius: '30px', overflow: 'hidden',cursor:'pointer'  }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
        >

            <CardContent style={{ overflow: 'auto' }}>
                <Typography
                    style={{ fontSize: '10.6px', fontWeight: '600', width: '125px', height: '15px', border: '1px grey solid', paddingTop: '10px', paddingLeft: '7px', paddingBottom: '10px', borderRadius: '50px', fontFamily: 'sans-serif' }}
                    variant="h6"
                    component="h6">
                    ⌛ {job.posted}
                </Typography>

                <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={imgSrc} alt='imgSrc' style={{ height: '50px', borderRadius: '5px' }} />
                    <div>
                        <Typography
                            color="textSecondary"
                            style={{ fontFamily: 'sans-serif', fontWeight: '600', fontSize: '14px' }}
                        >
                            {job.company}
                        </Typography>
                        <Typography
                            style={{ fontFamily: 'sans-serif', fontSize: '15px' }}
                        >
                            {job.title}
                        </Typography>
                        <Typography
                            color="textSecondary"
                            style={{ fontFamily: 'sans-serif', fontSize: '12px', fontWeight: '600' }}
                        >
                            {job.location}
                        </Typography>
                    </div>
                </div>

                <Typography
                    style={{ margin: '10px 0', fontWeight: '600', color: 'grey', fontFamily: 'sans-serif' }}
                    variant="body2" component="p">Estimated Salary: {job.estimatedSalary} ✅</Typography>

                <Typography
                    style={{ margin: '10px 0', fontWeight: '600', color: 'black', fontFamily: 'monospace', fontSize: '22px' }}
                    variant="body2" component="p">About the company </Typography>

                <Typography
                    style={{ fontFamily: 'monospace' }}
                    variant="body2" component="p">
                    {expanded ? job.description : `${job.description.substring(0, 150)}...`}
                </Typography>

                <div style={{ margin: '15px 130px' }}>
                    {expanded ? (
                        <Button style={{ color: 'blueviolet', fontSize: '12px', fontWeight: 'bold' }}  onClick={toggleExpanded}>Close</Button>
                    ) : (
                            <Button style={{ color: 'blueviolet', fontSize: '12px',fontWeight:'bold' }}  onClick={toggleExpanded}>View job</Button>
                    )}
                </div>

                <Typography
                    style={{ fontSize: '16.7px', fontFamily: 'serif', fontWeight: 'bolder', margin: '15px 0' }}
                    color="textSecondary">
                    Experience Required: {job.experience} Years
                </Typography>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Button variant="contained" href={job.applyLink} style={{
                        marginBottom: '10px', backgroundColor: '#609af7', fontSize: '16px', fontWeight: 'bold', height: '50px' }}>⚡ Easy Apply</Button>
                    <Button variant="contained" color="primary" href={job.applyLink} style={{ marginBottom: '10px', backgroundColor: '#2f3dfa', height: '50px', fontWeight: 'bold', fontSize: '16px' }}>{job.refferal}</Button>
                </div>
            </CardContent>
        </Card>
    );
};

JobCard.propTypes = {
    job: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        experience: PropTypes.string.isRequired,
        applyLink: PropTypes.string.isRequired,
        posted: PropTypes.string.isRequired,
        estimatedSalary: PropTypes.string.isRequired,
        refferal: PropTypes.string,
    }).isRequired,
};

export default JobCard;

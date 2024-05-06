import { useState, useEffect } from 'react';
import JobList from './components/JobList';
import FilterComponent from './features/filters/FilterComponents';
import data from './data.json';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating fetch data from API
    setTimeout(() => {
      setJobs(data);
      setFilteredJobs(data); // Set filteredJobs initially to all jobs
      setLoading(false);
    }, 1000);
  }, []);

  const checkSalaryInRange = (jobSalary, selectedSalary) => {
    // Extract the numeric values from the salary strings
    const jobSalaryNumeric = parseInt(jobSalary.split('-')[0]);
    const selectedSalaryNumeric = parseInt(selectedSalary.split('-')[0]);

    // Check if the job's salary is greater than or equal to the selected salary range
    return jobSalaryNumeric >= selectedSalaryNumeric;
  };

  const applyFilters = (filters) => {
    console.log('Applying filters:', filters); // Log the filters being applied

    const { role, employees, experience, workLocation, salary, searchCompany } = filters;

    const filtered = jobs.filter(job => {
      let passFilter = true;

      if (role && !job.title.toLowerCase().includes(role.toLowerCase())) {
        passFilter = false;
      }

     

      if (employees && job.EmployeesNo !== employees) { // Update comparison with EmployeesNo
        passFilter = false;
      }

      if (experience && job.experience !== experience) {
        passFilter = false;
      }

      if (workLocation && job.location.toLowerCase() !== workLocation.toLowerCase()) {
        passFilter = false;
      }

      if (salary && !checkSalaryInRange(job.estimatedSalary, salary)) {
        passFilter = false;
      }

      if (searchCompany && !job.company.toLowerCase().includes(searchCompany.toLowerCase())) {
        passFilter = false;
      }

      return passFilter;
    });

    console.log('Filtered jobs:', filtered); // Log the filtered jobs

    setFilteredJobs(filtered);
  };

  return (
    <div style={{margin:'20px 20px'}} >
      <FilterComponent applyFilters={applyFilters} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{margin:'30px 0'}}>
        <JobList jobs={filteredJobs} />
        </div>
      )}
    </div>
  );
};

export default App;

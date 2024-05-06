// App.jsx
import React, { useState, useEffect } from 'react';
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
      setLoading(false);
    }, 1000);
  }, []);

  const applyFilters = (filters) => {
    const { role, designation, employees, experience, workLocation, salary, searchCompany } = filters;

    const filtered = jobs.filter(job => {
      let passFilter = true;

      if (role && job.title.toLowerCase() !== role.toLowerCase()) {
        passFilter = false;
      }

      if (designation && job.designation.toLowerCase() !== designation.toLowerCase()) {
        passFilter = false;
      }

      if (employees && job.employees !== employees) {
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

    setFilteredJobs(filtered);
  };

  const checkSalaryInRange = (salaryRange, minBasePay) => {
    const salaryParts = salaryRange.split('-');
    const minSalary = parseInt(salaryParts[0].replace(/\D/g, ''));
    return minSalary >= parseInt(minBasePay);
  };

  return (
    <div>
      <FilterComponent applyFilters={applyFilters} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <JobList jobs={filteredJobs.length > 0 ? filteredJobs : jobs} />
      )}
    </div>
  );
};

export default App;

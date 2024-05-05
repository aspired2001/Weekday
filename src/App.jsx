import  { useState, useEffect } from 'react';
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
    // Destructure filters
    const { role, designation, employees, experience, workLocation, salary, searchCompany } = filters;

    // Filter jobs based on selected filters
    // Filter jobs based on selected filters
    const filtered = jobs.filter(job => {
      // Apply filtering logic based on the selected filters
      let passFilter = true;

      // Ensure job properties exist before accessing them
      const { title, company, location, estimatedSalary } = job || {};

      // Role filter
      if (role && title && title.toLowerCase() !== role.toLowerCase()) {
        passFilter = false;
      }

      // Designation filter
      if (designation && company && company.toLowerCase() !== designation.toLowerCase()) {
        passFilter = false;
      }

      // Employees filter
      if (employees && company && company.toLowerCase() !== employees.toLowerCase()) {
        passFilter = false;
      }

      // Experience filter
      if (experience && experience.toLowerCase() !== experience.toLowerCase()) {
        passFilter = false;
      }

      // Work location filter
      if (workLocation && location && location.toLowerCase() !== workLocation.toLowerCase()) {
        passFilter = false;
      }

      // Salary filter
      if (salary && estimatedSalary && estimatedSalary.toLowerCase() !== salary.toLowerCase()) {
        passFilter = false;
      }

      // Search company filter
      if (searchCompany && company && !company.toLowerCase().includes(searchCompany.toLowerCase())) {
        passFilter = false;
      }

      return passFilter;
    });

    setFilteredJobs(filtered);
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

import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, Button, TextField, Grid } from '@material-ui/core';

const FilterComponent = ({ applyFilters }) => {
    const [selectedRole, setSelectedRole] = useState('');
    const [selectedDesignation, setSelectedDesignation] = useState('');
    const [selectedEmployees, setSelectedEmployees] = useState('');
    const [selectedExperience, setSelectedExperience] = useState('');
    const [selectedWorkLocation, setSelectedWorkLocation] = useState('');
    const [selectedSalary, setSelectedSalary] = useState('');
    const [searchCompany, setSearchCompany] = useState('');

    const handleApplyFilters = () => {
        applyFilters({
            role: selectedRole,
            designation: selectedDesignation,
            employees: selectedEmployees,
            experience: selectedExperience,
            workLocation: selectedWorkLocation,
            salary: selectedSalary,
            searchCompany: searchCompany
        });
    };

    return (
        <Grid style={{ margin: '30px 0' }} container spacing={2}>
            <Grid item xs={6} sm={3}>
                <FormControl fullWidth>
                    <InputLabel id="role-label">Roles</InputLabel>
                    <Select
                        labelId="role-label"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                    >
                        <MenuItem value="">All Roles</MenuItem>
                        <MenuItem value="Frontend">Frontend</MenuItem>
                        <MenuItem value="Backend">Backend</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6} sm={3}>
                <FormControl fullWidth>
                    <InputLabel id="designation-label">Designation</InputLabel>
                    <Select
                        labelId="designation-label"
                        value={selectedDesignation}
                        onChange={(e) => setSelectedDesignation(e.target.value)}
                    >
                        <MenuItem value="">All Designations</MenuItem>
                        <MenuItem value="Designer Manager">Designer Manager</MenuItem>
                        <MenuItem value="Graphic Designer">Graphic Designer</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6} sm={3}>
                <FormControl fullWidth>
                    <InputLabel id="employees-label">No of Employees</InputLabel>
                    <Select
                        labelId="employees-label"
                        value={selectedEmployees}
                        onChange={(e) => setSelectedEmployees(e.target.value)}
                    >
                        <MenuItem value="">All Employees</MenuItem>
                        <MenuItem value="1-10">1-10</MenuItem>
                        <MenuItem value="11-20">11-20</MenuItem>
                        <MenuItem value="500+">500+</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6} sm={3}>
                <FormControl fullWidth>
                    <InputLabel id="experience-label">Experience</InputLabel>
                    <Select
                        labelId="experience-label"
                        value={selectedExperience}
                        onChange={(e) => setSelectedExperience(e.target.value)}
                    >
                        <MenuItem value="">All Experience Levels</MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="9">9</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6} sm={3}>
                <FormControl fullWidth>
                    <InputLabel id="location-label">Work Location</InputLabel>
                    <Select
                        labelId="location-label"
                        value={selectedWorkLocation}
                        onChange={(e) => setSelectedWorkLocation(e.target.value)}
                    >
                        <MenuItem value="">All Locations</MenuItem>
                        <MenuItem value="Remote">Remote</MenuItem>
                        <MenuItem value="Hybrid">Hybrid</MenuItem>
                        <MenuItem value="In-office">In-office</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6} sm={3}>
                <FormControl fullWidth>
                    <InputLabel id="salary-label">Minimum Base Pay Salary</InputLabel>
                    <Select
                        labelId="salary-label"
                        value={selectedSalary}
                        onChange={(e) => setSelectedSalary(e.target.value)}
                    >
                        <MenuItem value="">All Salaries</MenuItem>
                        <MenuItem value="10Lakhs">10 Lakhs</MenuItem>
                        <MenuItem value="20Lakhs">20 Lakhs</MenuItem>
                        <MenuItem value="30Lakhs">30 Lakhs</MenuItem>
                        <MenuItem value="40Lakhs">40 Lakhs</MenuItem>
                        <MenuItem value="50Lakhs">50 Lakhs</MenuItem>
                        <MenuItem value="60Lakhs">60 Lakhs</MenuItem>
                        <MenuItem value="70Lakhs">70 Lakhs</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6} sm={3}>
                <TextField
                    fullWidth
                    label="Search Company"
                    value={searchCompany}
                    onChange={(e) => setSearchCompany(e.target.value)}
                />
            </Grid>

            <Grid item xs={6} sm={3}>
                <Button fullWidth variant="contained" color="primary" onClick={handleApplyFilters}>Apply Filters</Button>
            </Grid>
        </Grid>
    );
};

FilterComponent.propTypes = {
    applyFilters: PropTypes.func.isRequired,
};

export default FilterComponent;

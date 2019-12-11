import React, { useState } from "react";

const TeamMemberForm = ({ addNewTeamMember }) => {
  const [teamMember, setTeamMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: ""
  });

  const handleChanges = event => {
    setTeamMember({ ...teamMember, [event.target.name]: [event.target.value] });
  };
  const submitForm = event => {
    event.preventDefault();
    addNewTeamMember(teamMember);
    setTeamMember({ firstName: "", lastName: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChanges}
        value={teamMember.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChanges}
        value={teamMember.lastName}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="Email Address"
        onChange={handleChanges}
        value={teamMember.email}
      />
      <label htmlFor="role">Role</label>
      <textarea
        id="role"
        type="text"
        name="role"
        placeholder="Current Role"
        onChange={handleChanges}
        value={teamMember.role}
      />
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default TeamMemberForm;

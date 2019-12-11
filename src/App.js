import React, { useState } from "react";
import TeamMemberForm from "./component/form";
import TeamMemberCard from "./component/member-card";
import "./App.css";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      firstName: "Christine",
      lastName: "Smith",
      email: "christinecsmith1@gmail.com",
      role: "SWE Wannabe"
    }
  ]);

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      firstName: teamMember.firstName,
      lastName: teamMember.lastName,
      email: teamMember.email,
      role: teamMember.role
    };

    const newTeamMemberCollection = [...teamMembers, newTeamMember];
    setTeamMembers(newTeamMemberCollection);
  };

  const [memberToEdit, setMembertoEdit] = useState(null);

  return (
    <div>
      <h1>Add a New Team Member!</h1>
      <TeamMemberForm
        addNewTeamMember={addNewTeamMember}
        memberToEdit={memberToEdit}
      />
      <TeamMemberCard teamMembers={teamMembers} />
    </div>
  );
}

export default App;

import React from "react";

const TeamMemberCard = props => {
  return (
    <div>
      {props.teamMembers.map(teamMember => (
        <div key={teamMember.id}>
          <h1>
            {teamMember.firstName} {teamMember.lastName}
          </h1>
          <h2>{teamMember.email}</h2>
          <p>{teamMember.role}</p>
          <button>Edit Team Member</button>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberCard;

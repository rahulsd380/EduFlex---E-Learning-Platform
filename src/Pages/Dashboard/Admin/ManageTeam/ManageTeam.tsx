import { useState } from 'react';
import ManageTeamCard from './ManageTeamCard';
import TeamMemberDetailsModal from './TeamMemberDetailsModal';
import profileImg from '../../../../assets/Images/profileImg.jpeg'
import { TTeamMember } from './manageTeam.types';

// Team member dummy data
const teamMembers : TTeamMember[] = [
  {
    id: 1,
    name: "Rahul Sutradhar",
    email: "rahulsd380@gmail.com",
    jobTitle: "Instructor",
    address: "Cumilla, BD",
    phone: "+8801608249337",
    profileImg: profileImg
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@example.com",
    jobTitle: "Developer",
    address: "New York, USA",
    phone: "+1234567890",
    profileImg: profileImg
  }
];

const ManageTeam = () => {
  const [openTeamMemberDetailsModal, setTeamMemberDetailsModal] = useState(false);

  return (
    <div className='flex flex-wrap gap-10'>
      {teamMembers.map(member => (
        <ManageTeamCard key={member.id} member={member} setTeamMemberDetailsModal={setTeamMemberDetailsModal} />
      ))}
      <TeamMemberDetailsModal openTeamMemberDetailsModal={openTeamMemberDetailsModal} setTeamMemberDetailsModal={setTeamMemberDetailsModal} />
    </div>
  );
};

export default ManageTeam;

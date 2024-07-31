
import Menu from "../../DashboardComponents/Menu";
import { TUser } from "./manageUser.types";
import ManageUserCard from './ManageUserCard';
import profile from "../../../../assets/Images/profileImg.jpeg";

// Sample data for the users
const users: TUser[] = [
  {
    id: 1,
    name: "Rahul Sutradhar",
    email: "rahulsd380@gmail.com",
    role: "Instructor",
    profileImg: profile
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Developer",
    profileImg: profile
  }
];

const ManageUser = () => {
  return (
    <div>
      <Menu />
      <div className="flex flex-wrap gap-10">
        {users.map(user => (
          <ManageUserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ManageUser;

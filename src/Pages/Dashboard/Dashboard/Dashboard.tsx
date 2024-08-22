import DashboardStatusHero from "../DashboardComponents/DashboardStatusHero";
import ProgressCard from "../ProgressCard";
import YourCourses from "../Student/YourCourses/YourCourses";
import icon from "../../../assets/Icons/dummy-icon.svg"
import Calender from "../DashboardComponents/Calender";
import MyInbox from "../DashboardComponents/MyInbox/MyInbox";


const Dashboard = () => {
    return (
        <div>
            <DashboardStatusHero/>

            


            <div className="grid grid-cols-4 gap-8 mt-8">
            <ProgressCard 
            title="Completed Course"
            value="5/10"
            icon={icon}
            />
            <ProgressCard 
            title="Completed Modules"
            value="9/10"
            icon={icon}
            />
            <ProgressCard 
            title="Total Time Spent"
            value="45 minutes"
            icon={icon}
            />
            <ProgressCard 
            title="Total Time Spent"
            value="45 minutes"
            icon={icon}
            />
            </div>


            <div className="mt-8 flex gap-8">
            <YourCourses/>
            <div className="flex flex-col gap-8">
            <Calender/>
            <MyInbox/>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;
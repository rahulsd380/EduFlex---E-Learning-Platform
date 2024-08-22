import education from "../../../assets/Icons/education.svg"

const DashboardStatusHero = () => {
    return (
        <div className="bg-dark-5/40 rounded-lg font-Roboto shadow flex items-center justify-between">
            <div className="p-4 max-w-[800px]">
            <h1 className="text-primary-10 text-2xl font-bold">Good Morning, <span className="text-body-text">Rahul Sutradhar</span></h1>
            <p className="text-body-text mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt possimus aspernatur est consequatur a commodikljhsg jhjk ole.</p>

            <button className="bg-primary-10 px-4 py-2 rounded-md text-white mt-4 text-sm">Continue Course</button>
            </div>

            <img src={education} alt="" className="size-32" />
        </div>
    );
};

export default DashboardStatusHero;
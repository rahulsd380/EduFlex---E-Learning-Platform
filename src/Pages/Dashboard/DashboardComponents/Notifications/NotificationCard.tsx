import notification from "../../../../assets/Icons/notification.svg";

const NotificationCard = () => {
    return (
        <div className="hover:bg-dark-5/50 p-3 border-b border-dark-5 cursor-pointer flex gap-2">
           <img
          src={notification}
          alt=""
          className="size-8 hidden xl:block cursor-pointer"
        />
            <div>
            <h1 className="text-neutral-60 font-medium">New Course Launched</h1>
            <p className="text-body-text text-[13px]">Lorem ipsum dolor sit amet consectetur luptas! Inventore obcaecati adipisci omnis!</p>
            <p className="text-neutral-60 text-[13px] mt-1 font-medium">2 days ago</p>
            </div>
        </div>
    );
};

export default NotificationCard;
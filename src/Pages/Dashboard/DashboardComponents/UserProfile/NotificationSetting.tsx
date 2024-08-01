import rightArrow from "../../../../assets/Icons/right-circle-arrow.svg"

const NotificationSetting = () => {
    return (
        <div  className="flex flex-col gap-4 mt-10 font-Roboto">
            <span>
            <p className="text-neutral-60 font-medium">Email Notification</p>
            <p className="text-body-text text-xs">Where email me</p>
            </span>

            <div className="flex items-center gap-3 w-full border-b border-dark-10/30 pb-3">
                <img src={rightArrow} alt="" className="size-6"/>
            <div className="flex items-center justify-between w-full">
            <p className="text-neutral-60 font-medium text-sm">Promotion , Course, Recommendation</p>
            <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-dark-10/30">
        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-primary-10/50"></div>
        <div className="z-20 size-4 rounded-full bg-primary-10 duration-200 peer-checked/toggle:translate-x-6"></div>
      </label>
            </div>
            </div>

            <div className="flex items-center gap-3 w-full border-b border-dark-10/30 pb-3">
                <img src={rightArrow} alt="" className="size-6"/>
            <div className="flex items-center justify-between w-full">
            <p className="text-neutral-60 font-medium text-sm">Don't send any promotional emails</p>
            <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-dark-10/30">
        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-primary-10/50"></div>
        <div className="z-20 size-4 rounded-full bg-primary-10 duration-200 peer-checked/toggle:translate-x-6"></div>
      </label>
            </div>
            </div>

            <div className="flex items-center gap-3 w-full border-b border-dark-10/30 pb-3">
                <img src={rightArrow} alt="" className="size-6"/>
            <div className="flex items-center justify-between w-full">
            <p className="text-neutral-60 font-medium text-sm">Announcement from instructor whose course</p>
            <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-dark-10/30">
        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-primary-10/50"></div>
        <div className="z-20 size-4 rounded-full bg-primary-10 duration-200 peer-checked/toggle:translate-x-6"></div>
      </label>
            </div>
            </div>

            <div className="flex items-center gap-3 w-full border-b border-dark-10/30 pb-3">
                <img src={rightArrow} alt="" className="size-6"/>
            <div className="flex items-center justify-between w-full">
            <p className="text-neutral-60 font-medium text-sm">Examination Notice</p>
            <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-dark-10/30">
        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-primary-10/50"></div>
        <div className="z-20 size-4 rounded-full bg-primary-10 duration-200 peer-checked/toggle:translate-x-6"></div>
      </label>
            </div>
            </div>

        </div>
    );
};

export default NotificationSetting;
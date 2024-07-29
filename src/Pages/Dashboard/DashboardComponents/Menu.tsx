import { useState } from 'react';

const Menu = () => {
    const dataArr = [
        {
            key: 'settings',
            title: 'Settings',
            subMenu: [{key: 'settings-1', title: 'General Settings'}, {key: 'settings-2', title: 'Notification Settings'}, {key: 'settings-3', title: 'Language Preferences'}, {key: 'settings-4', title: 'Accessibility Options'}, {key: 'settings-5', title: 'Security Settings'}],
        }
    ];
    const [isActive, setIsActive] = useState(null);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div className={` ${isActive === dataArr.length - 1 ? '' : ''}`}>
            {dataArr?.map((data, idx) => {
                const { key, title, subMenu } = data;
                return (
                    <div key={key}>
                        <div onClick={() => handleToggle(idx)} className="relative flex cursor-pointer items-center gap-2 p-4">
                            <h5 className="font-medium">{title}</h5>
                        </div>
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isActive === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden *:cursor-pointer">
                                {subMenu?.map((sub) => (
                                    <div
                                        key={sub.key}
                                        className="w-full py-3 pl-10 pr-4 text-sm text-gray-400 transition-all duration-300"
                                    >
                                        {sub.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
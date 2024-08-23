import downArrow from "../../../assets/Icons/down-arrow.svg";
import home from "../../../assets/Icons/home.svg";
import dashboard from "../../../assets/Icons/dashboard2.svg";
import analysis from "../../../assets/Icons/analysis2.svg";
import user from "../../../assets/Icons/user-group.svg";
import course from "../../../assets/Icons/manage-course.svg";
import blog from "../../../assets/Icons/blog.svg";
import announcement from "../../../assets/Icons/announcement.svg";
import enrollment from "../../../assets/Icons/manage-enrollment.svg";
import setting from "../../../assets/Icons/setting.svg";
import team from "../../../assets/Icons/team.svg";
import chats from "../../../assets/Icons/my-inbox-chats.svg";
import notifications from "../../../assets/Icons/notifications-white.svg";

export const navLinks = [
    {
      pathName: "Home",
      link: "",
      icon: home,
    },
    {
      pathName: "Dashboard",
      link: "",
      icon: dashboard,
    },
    {
      pathName: "Reports & Analytics",
      link: "dashboard/reports-analytics",
      icon: analysis,
    },
    {
      pathName: "Manage Team",
      link: "dashboard/manage-team",
      icon: team,
    },
    {
      pathName: "Chats",
      link: "dashboard/chats",
      icon: chats,
    },
    {
      pathName: "Notifications",
      link: "dashboard/notifications",
      icon: notifications,
    },
    {
      pathName: "Manage User",
      link: "dashboard/manage-users",
      icon: user,
    },
    {
      pathName: "Manage Courses",
      link: "dashboard/manage-course",
      icon: course,
    },
    {
      pathName: "Blogs",
      link: "dashboard/manage-blogs",
      icon: blog,
      downArrow : downArrow,
      subMenu: [
        {
          pathName: "Add Blog",
          link: "dashboard/manage-blog/add-blog",
        },
        {
          pathName: "Manage Blogs",
          link: "dashboard/manage-blogs/manage-blogs",
        },
      ],
    },
    {
      pathName: "Manage Faq",
      link: "dashboard/manage-faq",
      icon: announcement,
    },
    {
      pathName: "Announcements",
      link: "dashboard/announcements",
      icon: announcement,
    },
    {
      pathName: "Manage Enrollments",
      link: "dashboard/manage-enrollments",
      icon: enrollment,
    },
    {
      pathName: "Profile",
      link: "dashboard/profile",
      icon: user,
    },
    {
      pathName: "Settings",
      link: "dashboard/setting",
      icon: setting,
      downArrow : downArrow,
      subMenu: [
        { pathName: "General Settings", link: "dashboard/setting/general-settings" },
        { pathName: "Notification Settings", link: "dashboard/setting/notification-settings" },
        { pathName: "Language Preferences", link: "dashboard/setting/language-preferences" },
        { pathName: "Accessibility Options", link: "dashboard/setting/accessibility-options" },
        { pathName: "Security Settings", link: "dashboard/setting/security-settings" },
      ],
    },
  ];
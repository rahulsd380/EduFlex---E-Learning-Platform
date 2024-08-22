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
      link: "admin/dashboard",
      icon: dashboard,
    },
    {
      pathName: "Reports & Analytics",
      link: "admin/reports-analytics",
      icon: analysis,
    },
    {
      pathName: "Manage Team",
      link: "admin/manage-team",
      icon: team,
    },
    {
      pathName: "Chats",
      link: "admin/chats",
      icon: chats,
    },
    {
      pathName: "Notifications",
      link: "admin/notifications",
      icon: notifications,
    },
    {
      pathName: "Manage User",
      link: "admin/manage-users",
      icon: user,
    },
    {
      pathName: "Manage Courses",
      link: "admin/manage-course",
      icon: course,
    },
    {
      pathName: "Blogs",
      link: "admin/manage-blogs",
      icon: blog,
      downArrow : downArrow,
      subMenu: [
        {
          pathName: "Add Blog",
          link: "admin/manage-blog/add-blog",
        },
        {
          pathName: "Manage Blogs",
          link: "admin/manage-blogs/manage-blogs",
        },
      ],
    },
    {
      pathName: "Manage Faq",
      link: "admin/manage-faq",
      icon: announcement,
    },
    {
      pathName: "Announcements",
      link: "admin/announcements",
      icon: announcement,
    },
    {
      pathName: "Manage Enrollments",
      link: "admin/manage-enrollments",
      icon: enrollment,
    },
    {
      pathName: "Profile",
      link: "admin/profile",
      icon: user,
    },
    {
      pathName: "Settings",
      link: "admin/setting",
      icon: setting,
      downArrow : downArrow,
      subMenu: [
        { pathName: "General Settings", link: "admin/setting/general-settings" },
        { pathName: "Notification Settings", link: "admin/setting/notification-settings" },
        { pathName: "Language Preferences", link: "admin/setting/language-preferences" },
        { pathName: "Accessibility Options", link: "admin/setting/accessibility-options" },
        { pathName: "Security Settings", link: "admin/setting/security-settings" },
      ],
    },
  ];
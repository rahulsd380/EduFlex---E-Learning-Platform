import Reusable from "../../Components/Reusable/Reusable";
import blog from "../../assets/Images/blog.jpg"
import BlogsCard from "./BlogsCard";

const Blog = (): JSX.Element => {
    const blogPosts = [
        {
          img: "image-url-1.jpg",
          title: "Title 1",
          postedDate: "2024-03-28",
          like: 10,
          dislike: 2,
          comment: 5,
          read : 100,
          category: "Category 1",
          description: "Description 1",
          userImg: "user-image-url-1.jpg",
          userName: "User 1",
          userTitle: "User Title 1"
        }]
    
    return (
        <div className="w-11/12 mx-auto">

            {/* hERO SECTION */}
            <div className="relative my-3">
                <div className="absolute z-10 flex flex-col justify-center h-full gap-4 px-5">
                    <h1 className="text-4xl text-gray-100 font-medium font-Roboto">Explore the World of Ideas: <br />Diving into Engaging Articles, Insights, and Inspiration on Our Blog!</h1>
                    <p className="text-gray-300 font-normal font-Roboto w-3/4">Explore our blog: a treasure trove of diverse articles, insights, and inspiration. From tech trends to cultural reflections, our curated content offers something for everyone. Engage with thought-provoking analyses and captivating narratives that spark curiosity and ignite imagination. Whether seeking expert advice or a moment of reflection, our blog promises to inform and inspire. Join us on this enriching journey of discovery and exploration.</p>

                    <button className="bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-2 md:px-4 rounded-md text-white font-Roboto font-normal w-fit">Read Article</button>
                </div>
                <div className="bg-gray-800 w-full h-96 absolute opacity-60 rounded-xl"></div>
                <img className="w-full h-96 rounded-xl" src={blog} alt="" />
            </div>

            <Reusable subHeading={"Our Blogs"} heading={"Unveiling Insights: Your Go-To Blog Hub"} description={"Embark on a journey of enlightenment with our diverse blog. Explore a wealth of insights, ideas, and inspiration to enrich your mind and soul."}/>
            {/* Cards */}
            <BlogsCard/>
        </div>
    );
};

export default Blog;
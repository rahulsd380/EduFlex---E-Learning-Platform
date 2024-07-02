import Reusable from "../../Components/Reusable/Reusable";
import blog from "../../assets/Images/blog.jpg"
import BlogsCard from "./BlogsCard";

export type TBlog = {
    _id: string;
    imageUrl: string;
    category: string;
    date: string;
    title: string;
    description: string;
    readCount: number;
  }

const Blog = (): JSX.Element => {
    const blogs: TBlog[] = [
        {
            "_id": "1",
            "imageUrl": "https://example.com/image1.png",
            "category": "Programming",
            "date": "May 12, 2024",
            "title": "How to become a programmer.",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mollitia alias odit ullam labore.",
            "readCount": 828
        },
        {
            "_id": "2",
            "imageUrl": "https://example.com/image2.png",
            "category": "Web Development",
            "date": "June 1, 2024",
            "title": "Getting started with React.",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla facilisi curabitur egestas.",
            "readCount": 1024
        },
        {
            "_id": "3",
            "imageUrl": "https://example.com/image3.png",
            "category": "Data Science",
            "date": "April 20, 2024",
            "title": "Introduction to Machine Learning.",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
            "readCount": 540
        },
        {
            "_id": "4",
            "imageUrl": "https://example.com/image4.png",
            "category": "Cybersecurity",
            "date": "March 15, 2024",
            "title": "Best practices for securing your applications.",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut enim ad minim veniam quis.",
            "readCount": 672
        },
        {
            "_id": "5",
            "imageUrl": "https://example.com/image5.png",
            "category": "Cloud Computing",
            "date": "February 28, 2024",
            "title": "Understanding the basics of AWS.",
            "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quis nostrud exercitation ullamco laboris.",
            "readCount": 815
        }
    ]    
    
    return (
        <div className="max-w-[1500px] w-[90%] mx-auto">

            {/* HERO SECTION */}
            <div className="relative mt-3">
                <div className="absolute z-10 flex flex-col justify-center h-full gap-4 px-5">
                    <h1 className="text-4xl text-white font-medium font-Roboto">Explore the World of Ideas: <br />Diving into Engaging Articles, Insights, and Inspiration on Our Blog!</h1>
                    <p className="text-white font-normal font-Roboto w-3/4">Explore our blog: a treasure trove of diverse articles, insights, and inspiration. From tech trends to cultural reflections, our curated content offers something for everyone. Engage with thought-provoking analyses and captivating narratives that spark curiosity and ignite imagination. Whether seeking expert advice or a moment of reflection, our blog promises to inform and inspire. Join us on this enriching journey of discovery and exploration.</p>

                    <button className="bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-2 md:px-4 rounded-md text-white font-Roboto font-normal w-fit">Read Article</button>
                </div>
                <div className="bg-gray-800 w-full h-96 absolute opacity-60 rounded-xl"></div>
                <img className="w-full h-96 rounded-xl" src={blog} alt="" />
            </div>

            <Reusable subHeading={"Our Blogs"} heading={"Unveiling Insights: Your Go-To Blog Hub"} description={"Embark on a journey of enlightenment with our diverse blog. Explore a wealth of insights, ideas, and inspiration to enrich your mind and soul."}/>

            {/* Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-10">
            {
                blogs.map((blog) => 
                    <BlogsCard
          key={blog._id}
          _id={blog._id}
          imageUrl={blog.imageUrl}
          category={blog.category}
          date={blog.date}
          title={blog.title}
          description={blog.description}
          readCount={blog.readCount}
        />
                )
            }
            </div>
            
            
        </div>
    );
};

export default Blog;
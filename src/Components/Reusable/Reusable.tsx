
interface headerTypes{
    subHeading: string,
    heading : string,
    description : string
}
const Reusable = ({children} : headerTypes): JSX.Element => {
    return (
        <div>
            <div className="flex flex-col gap-1 my-5">
                <p className="text-xl text-gray-500 font-medium font-Roboto text-center">{children}</p>
                <h1 className="text-3xl text-gray-700 font-bold font-Roboto text-center">{children}</h1>
                <p className="text-gray-500 text-center font-Roboto w-1/2 mx-auto">{children}</p>
            </div>
        </div>
    );
};

export default Reusable;
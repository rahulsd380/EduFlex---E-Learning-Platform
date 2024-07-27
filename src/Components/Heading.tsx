type THeading = {
    subTitle : string;
    heaing : string;
    description : string;
}

const Heading = ({subTitle, heaing, description} : THeading) => {
    return (
        <div className="flex flex-col gap-2 text-center font-Roboto">
        <p className="text-primary-10 font-semibold text-base">{subTitle}</p>
        <h1 className="text-3xl text-neutral-60 font-bold capitalize">
          {heaing}
        </h1>
        <p className="text-body-text font-normal max-w-[700px] mx-auto">
         {description}
        </p>
      </div>
    );
};

export default Heading;
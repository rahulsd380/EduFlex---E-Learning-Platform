type TProgressCardProps = {
  title: string;
  value: string;
  icon: string;
};

const ProgressCard: React.FC<TProgressCardProps> = ({ icon, title, value }) => {
  return (
    <div className="bg-white border border-dark-5 shadow-inner drop-shadow-sm p-4 rounded-lg max-w-[250px] font-Roboto flex items-center gap-3">
      <img src={icon} alt="" className="size-12" />

      <div>
        <h1 className="text-body-text">{title}</h1>
        <p className="text-2xl font-semibold text-primary-15">{value}</p>
      </div>
    </div>
  );
};

export default ProgressCard;

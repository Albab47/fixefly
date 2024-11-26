const Button = ({ children, icon, outline = false }) => {
  return (
    <button
      className={`text-lg font-semibold flex items-center justify-center h-full gap-3 px-5 py-1 ${
        outline ? "bg-white text-black" : "bg-primary text-white"
      } rounded-full`}
    >
      <span>{children}</span>
      {icon && (
        <span className="relative only:-mx-6">
          <img src={icon} alt="icon" />
        </span>
      )}
    </button>
  );
};

export default Button;

const Button = ({ children, hoverTxt, icon, outline = false }) => {
  return (
    <button
      className={`group relative text-lg font-semibold flex items-center justify-center h-full gap-3 px-5 py-1 ${
        outline ? "bg-white text-black" : "bg-primary text-white"
      } rounded-full transition-transform duration-300 ease-in-out`}
    >
      {hoverTxt ? (
        <>
          <span className="group-hover:hidden transition-all duration-500">{children}</span>
          <span className="hidden transition-all duration-500 group-hover:block">{hoverTxt}</span>
        </>
      ) : (
        <span>{children}</span>
      )}
      {icon && (
        <span className="relative group-hover:hidden only:-mx-6">
          <img src={icon} alt="icon" />
        </span>
      )}
    </button>
  );
};

export default Button;
import cn from "@/lib/cn";

const SignFromWrapper = ({ children, icon, title, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 bg-white p-5 backdrop-blur-lg backdrop-brightness-0 rounded-md overflow-hidden w-3/5",
        className
      )}
    >
      <div className="  flex items-center justify-center ">
        <div className="bg-gradient bg-gradient-to-br text-white p-3 rounded-full text-center">
          {icon}
        </div>
      </div>
      <div>
        <h2 className="text-center text-gradient">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default SignFromWrapper;

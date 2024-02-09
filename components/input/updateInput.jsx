"use client";
import cn from "@/lib/cn";

export default function UpdateInput({
  id,
  label,
  onChange,
  className,
  value,
  ...props
}) {
  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className={cn(
          "duration-300 px-1 autofill:bg-white peer-focus:text-black text-lg first-letter:capitalize",
          {
            "scale-[.8] peer-invalid:text-red-500 peer-valid:text-green-500 peer-focus:peer-valid:text-green-500 peer-focus:peer-invalid:text-red-500":
              value?.length > 0,
          }
        )}
      >
        {label}
      </label>
      <input
        className={cn(
          "peer outline-none rounded-md h-12 px-2 border-b border-gray-300 duration-300 w-full text-black",
          className,
          {
            "invalid:border-red-500 invalid:text-red-500 valid:border-green-400":
              value?.length > 0,
          }
        )}
        value={value}
        onChange={onChange}
        id={id}
        {...props}
      />

      <span
        className={cn(
          " invisible duration-100 absolute text-xs text-red-500 whitespace-nowrap top-full right-0",
          {
            "peer-invalid:visible": value?.length > 0,
          }
        )}
      >
        not a valid input
      </span>
    </div>
  );
}

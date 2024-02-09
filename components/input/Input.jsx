"use client";
import cn from "@/lib/cn";
import { useRef, useState } from "react";

function Input({
  id,
  placeholder,
  onChange,
  className,

  ...props
}) {
  const input = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const handleBlur = () => {
    const value = input.current?.value;
    if (onChange) {
      onChange(value);
    }
    setInputValue(value);
  };

  return (
    <div className="relative w-full">
      <input
        ref={input}
        className={cn(
          "peer outline-none rounded-md h-12 px-2 border border-gray-300 duration-300 w-full",
          className,
          {
            "invalid:border-red-500 valid:border-green-400":
              inputValue?.length > 0,
          }
        )}
        onBlur={handleBlur}
        id={id}
        {...props}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-2 top-1/2 -translate-y-1/2 text-mute first-letter:uppercase duration-300 peer-focus:-translate-y-9 px-1 autofill:bg-white peer-focus:bg-white peer-focus:scale-[.8] peer-required:after:content-['*'] peer-required:after:ml-1 peer-focus:text-black",
          {
            "-translate-y-9 bg-white scale-[.8] peer-invalid:text-red-500 peer-valid:text-green-500 peer-focus:peer-valid:text-green-500 peer-focus:peer-invalid:text-red-500":
              inputValue?.length > 0,
          }
        )}
      >
        {placeholder}
      </label>
      <span
        className={cn(
          " invisible duration-100 absolute text-xs text-red-500 whitespace-nowrap top-full right-0",
          {
            "peer-invalid:visible": inputValue?.length > 0,
          }
        )}
      >
        not a valid input
      </span>
    </div>
  );
}

export default Input;

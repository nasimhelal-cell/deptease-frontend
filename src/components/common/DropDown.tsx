import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { nanoid } from "nanoid";

export interface List {
  title: string;
  value: string;
}

interface DropDownProps {
  widthClass?: string;
  placeholder?: string;
  value: string;
  onChange: any;
  lists: List[];
}

const DropDown: React.FC<DropDownProps> = ({
  widthClass,
  placeholder,
  lists,
  onChange,
  value,
}) => {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className={widthClass}>
        <SelectValue placeholder={placeholder || "Select ..."} />
      </SelectTrigger>
      <SelectContent className={widthClass}>
        {lists?.map(({ title, value }) => (
          <SelectItem key={nanoid()} value={value}>
            {title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DropDown;

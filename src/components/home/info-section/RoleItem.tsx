import React from "react";
import { SlArrowRight } from "react-icons/sl";

interface RoleItemProps {
  role: string;
}

export default function RoleItem({ role }: RoleItemProps) {
  return (
    <li className="flex items-center gap-2 w-fit">
      <SlArrowRight color="#FFFFFF" size={12} />
      <p>{role}</p>
    </li>
  );
} 
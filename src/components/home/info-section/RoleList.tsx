import React from "react";
import RoleItem from "./RoleItem";

const roles = [
  "Locataire",
  "Propriétaire",
  "Hébergé",
  "Salarié",
  "Retraité",
  "CDI/CDD/INTERIM",
  "Fonctionnaire",
  "Artisan, commerçant",
];

export default function RoleList() {
  return (
    <div className="flex lg:flex-col lg:items-start lg:gap-2 items-center text-md justify-between lg:justify-center lg:w-1/3">
      <ul className="uppercase text-textColor font-light flex flex-col gap-2">
        {roles.slice(0, 5).map((role) => (
          <RoleItem key={role} role={role} />
        ))}
      </ul>
      <ul className="uppercase text-textColor font-light flex flex-col gap-2">
        {roles.slice(5).map((role) => (
          <RoleItem key={role} role={role} />
        ))}
      </ul>
    </div>
  );
} 
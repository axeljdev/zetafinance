
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
    <div className="flex lg:flex-col lg:items-start lg:gap-2 text-md justify-between lg:justify-center gap-10 lg:w-1/3">
      <ul className="uppercase text-textColor font-light flex flex-col gap-2 font-semibold">
        {roles.slice(0, 5).map((role) => (
          <RoleItem key={role} role={role} />
        ))}
      </ul>
      <ul className="uppercase text-textColor font-light flex flex-col gap-2 font-semibold">
        {roles.slice(5).map((role) => (
          <RoleItem key={role} role={role} />
        ))}
      </ul>
    </div>
  );
} 
import React, { useMemo } from "react";
import { groupByKeywords } from './utils'

type RoleItem = {
  idRole: number;
  role: string;
  label: string;
};

const data: RoleItem[] = [
  { idRole: 1, role: "Administrateur", label: "system reseau" },
  { idRole: 1, role: "data_cr", label: "analyste" },
  { idRole: 1, role: "unicr", label: "unity cr" },
  { idRole: 1, role: "Administrateur-pole4", label: "system reseau cr" },
  { idRole: 1, role: "data_cr", label: "analyste" },
  { idRole: 1, role: "unicr-op", label: "unity op" },
];

const tableKey = ["admin", "data", "unit"] as const;

export default function App() {
  const dataToShow = useMemo(
    () =>
      groupByKeywords(data, tableKey, "role", {
        unique: true,
        sort: true,
      }),
    []
  );

  return (
    <select>
      {Object.entries(dataToShow).map(([group, items]) => (
        <optgroup key={group} label={group.toUpperCase()}>
          {items.map((item, index) => (
            <option key={`${group}-${index}`} value={item.role}>
              {item.role} - {item.label}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}
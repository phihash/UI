import { useState } from "react";
type Item = {
  id: string;
  title: string;
  contents: string;
};
export default function Accordion({ data }: { data: Item[] }) {
  const [openSections, setOpenSections] = useState(new Set());

  return (
    <>
      {data.map(({ id, title, contents }) => {
        const isOpen = openSections.has(id);
        return (
          <>
            <p>{id}</p>
          </>
        );
      })}
    </>
  );
}

import { MdExpandMore } from "react-icons/md";

interface CollapseTitleProps {
  readonly title: string;
  readonly active: string | null;
  readonly handleToggle: (title: string) => void;
  readonly bgcolor: string;
  readonly bgCheck: string;
}

export default function CollapseTitle({
  title,
  active,
  handleToggle,
  bgCheck,
  bgcolor,
}: CollapseTitleProps) {
  return (
    <>
      <input
        type="checkbox"
        className="peer"
        checked={active === title}
        onChange={() => handleToggle(title)}
      />
      <div
        className={`collapse-title ${bgcolor} text-primary-content peer-checked:${bgCheck} 
            peer-checked:text-indigo-950 text-xl flex items-center place-content-between w-full p-4`}
      >
        {title} <MdExpandMore size={28} />
      </div>
    </>
  );
}

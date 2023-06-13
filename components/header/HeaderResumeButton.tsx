import { GoFilePdf } from "react-icons/go";

export default function HeaderResumeButton() {
  return (
    <a
      href="/resume"
      title="Go to resume"
      className="flex-none inline-flex h-8 gap-1.5 px-3 items-center rounded text-black bg-white outline outline-2 outline-offset-2 outline-transparent hover:outline-white focus:outline-white"
    >
      <GoFilePdf size={16} />
      <span className="text-sm font-medium leading-none">Resume</span>
    </a>
  )
}

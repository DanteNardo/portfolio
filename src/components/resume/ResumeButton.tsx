import { FileText, Download } from 'lucide-react';

export default function ResumeButton() {
  return (
    <div className="flex gap-px rounded text-black bg-black">
      <a
        href="/resume"
        title="Interactive resume"
        className="flex gap-2 px-3 py-2 items-center rounded-l bg-white hover:bg-base-300 active:bg-base-400 mst"
      >
        <FileText className="w-4 h-4" />
        <span className="text-sm font-medium">Resume</span>
      </a>
      <a
        href="/resume-dante-nardo.pdf"
        title="Download resume"
        download
        className="flex items-center justify-center rounded-r px-3 bg-white hover:bg-base-300 active:bg-base-400 mst"
      >
        <Download className="w-4 h-4" />
      </a>
    </div>
  );
}

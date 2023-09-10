import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResumeButton() {
  return (
    <div className="flex gap-0.5 rounded bg-black">
      <a
        href="/resume"
        className="flex gap-2 px-3 py-1 items-center rounded-l bg-white text-black"
      >
        <FileText className="w-4 h-4" />
        <span className="text-base">Resume</span>
      </a>
      <a
        href="/resume-dante-nardo.pdf"
        download
        title="Download resume"
        className="flex items-center justify-center rounded-r pl-2 pr-2 bg-white text-black"
      >
        <Download className="w-4 h-4" />
      </a>
    </div>
  );
}

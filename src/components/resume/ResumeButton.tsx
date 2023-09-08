import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeButton() {
  return (
    <Button variant="secondary" asChild>
      <a href="/resume">
        <FileText className="mr-2 h-4 w-4" /> Resume
      </a>
    </Button>
  );
}

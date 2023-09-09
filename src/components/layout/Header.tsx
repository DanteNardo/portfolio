import Navigation from "@/components/navigation/Navigation";
import ResumeButton from "@/components/resume/ResumeButton";

export default function Header() {
  return (
    <header
        className="print:hidden relative z-50 flex w-full gap-3 px-6 py-3 items-center justify-between border-b border-base-700 bg-base-950"
      >
        <div className="flex gap-6 items-center">
          <a href="/" className="flex flex-col gap-1 rounded acc-focus">
            <h2 className="text-2xl font-bold tracking-tight text-focus">
              Dante Nardo
            </h2>
          </a>
          <Navigation />
        </div>
        <ResumeButton />
      </header>
  )
}

import HeaderProjectsPopover from '@/components/header/HeaderProjectsPopover'
import HeaderResumeButton from '@/components/header/HeaderResumeButton'
import HeaderWorkPopover from '@/components/header/HeaderWorkPopover'
import { GoFilePdf } from 'react-icons/go'

export default function Page() {
  return (
    <>
      <div className="relative w-screen h-screen min-h-[100svh] overflow-y-scroll">
        <header className="sticky top-0 left-0 right-0 flex w-full max-w-5xl h-20 gap-4 mx-auto px-4 md:px-12 items-center justify-between border-b border-base-900 bg-black/50 backdrop-blur">
          <h1 className="flex-1 text-3xl font-bold tracking-tighter text-focus">
            Dante Nardo
          </h1>
          <div className="grow flex gap-2">
            <HeaderWorkPopover />
            <HeaderProjectsPopover />
          </div>
          <div className="flex-1 flex justify-end">
            <HeaderResumeButton />
          </div>
        </header>
        <main className=""></main>
      </div>
    </>
  )
}

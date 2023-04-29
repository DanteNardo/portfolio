import { Tab } from '@headlessui/react'

export default function Page() {
  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <div>
          <div className="max-w-lg mb-6 text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tighter font-mono">
              <span className="">Skills</span>
            </h2>
            <h1 className="mb-6 text-6xl font-bold tracking-tighter text-focus">
              Backend
            </h1>
            <p className="text-lg">
              Creating public REST endpoints, configuring external webhooks, and
              connecting message brokers to new serverless functions are all in
              a day's work for me.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

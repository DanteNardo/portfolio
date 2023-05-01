import { Tab } from '@headlessui/react'

export default function Page() {
  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <div>
          <div className="max-w-lg mb-6 text-center">
            <h1 className="mb-6 text-6xl font-bold tracking-tighter text-focus">
              Skills
            </h1>
            <p className="text-lg">
              Make frontend development a collaborative experience with
              automatic Preview Deployments for every code change, by seamlessly
              integrating with GitHub, GitLab, and Bitbucket.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 rounded-md text-sm text-focus cursor-default bg-base-800 hover:bg-base-700">
              Languages
            </div>
            <div className="px-3 py-1 rounded-md text-sm text-focus cursor-default hover:bg-base-700">
              Frontend
            </div>
            <div className="px-3 py-1 rounded-md text-sm text-focus cursor-default hover:bg-base-700">
              Backend
            </div>
            <div className="px-3 py-1 rounded-md text-sm text-focus cursor-default hover:bg-base-700">
              Cloud
            </div>
            <div className="px-3 py-1 rounded-md text-sm text-focus cursor-default hover:bg-base-700">
              Architecture
            </div>
            <div className="px-3 py-1 rounded-md text-sm text-focus cursor-default hover:bg-base-700">
              Operating Systems
            </div>
            <div className="px-3 py-1 rounded-md text-sm text-focus cursor-default hover:bg-base-700">
              Productivity
            </div>
            <div className="px-3 py-1 rounded-md text-sm text-focus cursor-default hover:bg-base-700">
              Graphics & Design
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

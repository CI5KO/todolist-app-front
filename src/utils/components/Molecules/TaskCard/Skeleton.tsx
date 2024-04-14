/**
 * Author: CI5KO
 * Creation Date: April 14, 2024
 * Last Modification: April 14, 2024
 *
 * Contact: hector_oliva16k@hotmail.com
 *
 * This code is owned by CI5KO.
 * You are welcome to contribute to the original repository.
 *
 * Any contributions to this repository are subject to the original terms stated herein.
 */

export default function Skeleton() {
  return (
    <div className="animate-pulse grid p-4">
      <div className="rounded-xl bg-gray-300 h-6 w-1/2 mb-4 justify-self-center" />
      <div className="rounded-xl bg-gray-300 h-4 w-full mb-2" />
      <div className="rounded-xl bg-gray-300 h-4 w-2/4 mb-2" />
      <div className="grid md:grid-cols-2 gap-4 py-4">
        <div className="rounded-xl bg-gray-300 h-10 w-full" />
        <div className="rounded-xl bg-gray-300 h-10 w-full" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-gray-300 h-10 w-full" />
        <div className="rounded-xl bg-gray-300 h-10 w-full" />
      </div>
    </div>
  )
}

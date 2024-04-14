'use server'

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

import { CiViewList } from 'react-icons/ci'

export default async function Loading(): Promise<JSX.Element> {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <CiViewList className="animate-spin h-32 w-32" />
    </div>
  )
}

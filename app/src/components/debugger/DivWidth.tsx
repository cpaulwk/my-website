import React from 'react'
import { useDivWidth } from '@/app/src/hooks';

const DivWidth = ({ id }: { id: string }) => {
  const divWidth = useDivWidth(id);
  return (
    <div className="fixed z-10 top-0 left-0 bg-white">
      <p className="text-red">divWidth: {divWidth}</p>
    </div>
  )
}

export default DivWidth

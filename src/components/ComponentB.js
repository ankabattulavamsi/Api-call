import React, { useState } from 'react'
import { HeadingB } from '../StyledComponent';
import { IncrementButton } from '../StyledComponent';

const ComponentB = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <HeadingB>Count in B: {count} </HeadingB>
      <IncrementButton onClick={() => setCount(count + 1)}>Increment B </IncrementButton>
    </div>
  )
}

export default ComponentB

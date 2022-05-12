import React, { useEffect, useState } from 'react'
import { Heading } from '../StyledComponent';
import { IncrementButton } from '../StyledComponent';

const ComponentA = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
            if (count === 5 ){
                return new Error('trowing a new error in componentA')
            }
    },[count])

  return (
    <div>
      <Heading>Count: {count}</Heading>
      <IncrementButton onClick={() => setCount(count + 1)}>Increment Count</IncrementButton>
    </div>
  )
}

export default ComponentA

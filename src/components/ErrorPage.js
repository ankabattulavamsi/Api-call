import React from 'react'
import { HeadingE } from '../StyledComponent';
import { Desc } from '../StyledComponent';

const ErrorPage = () => {
  return (
    <div>
      <HeadingE>OOps... something went wrong</HeadingE>
      <Desc>please contact admin for more information</Desc>
      <button>Back</button>
    </div>
  )
}

export default ErrorPage

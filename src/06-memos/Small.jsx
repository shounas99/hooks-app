import { memo } from "react";

export const Small = memo(({ value }) => {

    console.log('Hi, I come back for u');
    

  return (
    <small>{ value }</small>
  )
})

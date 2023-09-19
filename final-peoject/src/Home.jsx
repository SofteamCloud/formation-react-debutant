import React from 'react'
import useFetch from './useFetch'

import PostList from './PostList'

export default function Home() {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/posts')

  return (
    // <PostList blogs={blogs} />
    <>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <PostList blogs={blogs} /> }
    </>
  )
}

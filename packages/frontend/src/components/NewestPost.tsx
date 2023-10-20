import React from 'react'
import {Post, User} from '../../types/types.ts'

type Props = {
  post: Post,
}

const user: User={
  id: 1,
  firstName: "Nick",
  lastName: "Wiesjahn"
}
const testPost:Post={
  title: "This is the Title",
  author: user,
  subHeading: "This is about the beer olynmpics",
}

export default function NewestPost({post}: Props) {
  return (
    <div style={{marginTop: 64}}>
      <h1 style={{color: 'black'}}>{testPost.title}</h1>
      <h2>{`By ${testPost.author.firstName} ${testPost.author.lastName}`}</h2>
      <p>{`${testPost.subHeading}`}</p>
    </div>
  )
}
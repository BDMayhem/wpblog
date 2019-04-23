import React from 'react'
import axios from 'axios'
import { WP_API_URL } from '../config'

const PostPage = ({ post }) => (
  <div>
    <h1>{post.title.rendered}</h1>
    <article
      className="entry-content"
      dangerouslySetInnerHTML={{__html: post.content.rendered}}
    />
  </div>
)

PostPage.getInitialProps = async (context) => {
  const response = await axios.get(`${WP_API_URL}posts?slug=${context.query.slug}`)
  return { post: response.data[0] }
}

export default PostPage
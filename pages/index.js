import React from 'react';
import Link from 'next/link';
import axios from 'axios'
import { WP_API_URL } from '../config'

export default class extends React.Component {
  static async getInitialProps() {
    const response = await axios.get(`${WP_API_URL}posts`)
    return { posts: response.data }
  }

  render() {
    return(
      <React.Fragment>
        <h1>Posts!</h1>
        <ul>
          {this.props.posts.map( post => 
            <li key={post.id}>
              <Link
                href={`/post?slug=${post.slug}`}
                as={`/post/${post.slug}` }
                passHref
              >
                <a>
                  { post.title.rendered }
                </a>
              </Link>
            </li>
          )}
        </ul>
      </React.Fragment>
    )
  }
}

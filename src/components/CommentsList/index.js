import {Component} from 'react'

import Item from '../Items'
import './index.css'

class CommentsList extends Component {
  state = {
    commentsDetails: [],
  }

  componentDidMount() {
    this.getCommentsData()
  }

  // Here I have used this url from json website to get the data https://jsonplaceholder.typicode.com/guide/

  getCommentsData = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const fetchedData = data.map(eachComment => ({
        postId: eachComment.postId,
        id: eachComment.id,
        name: eachComment.name,
        email: eachComment.email,
        body: eachComment.body,
      }))
      this.setState({commentsDetails: fetchedData})
    }
  }

  render() {
    const {commentsDetails} = this.state
    return (
      <div>
        <ul className="list-items-details">
          {commentsDetails.map(eachComment => (
            <Item eachCommentDetails={eachComment} key={eachComment.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CommentsList

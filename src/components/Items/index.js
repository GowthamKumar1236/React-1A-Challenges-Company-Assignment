import './index.css'

const Items = props => {
  const {eachCommentDetails} = props
  const {name, email, body} = eachCommentDetails

  return (
    <li className="list-items">
      <h1 className="heading">{name}</h1>
      <p className="email">{email}</p>
      <p className="description">{body}</p>
    </li>
  )
}

export default Items

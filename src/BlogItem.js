const BlogItem = props => {
    const { blogData } = props
    const { id, userId, title, completed } = blogData
  
    return (
      <li>
        <div className="item-container">
          <p>{id}</p>
          <p>{userId}</p>
          <p>{title}</p>
          <p>{completed}</p>
        </div>
      </li>
    )
  }
  
  export default BlogItem

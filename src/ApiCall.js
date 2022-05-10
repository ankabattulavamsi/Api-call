import React, {Component} from 'react'

class ApiCall extends Component {
    state = {
        blogsData:[]
    }
    componentDidMount() {
        this.getBlogsData()
      }
      getBlogsData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()

            const formattedData = data.map(eachItem => ({
                id: eachItem.id,
                title: eachItem.title,
                userId: eachItem.userId,
                completed: eachItem.completed
              }))
              this.setState({ blogsData: formattedData, isLoading: false })
      }

    render() {
        const {blogsData} = this.state
        console.log(blogsData)
  return (
    <div>
      {blogsData.map(each => (
        <div className='display'>
            <p>{each.title}</p>
            <p>{each.id}</p>
            <p>{each.userId}</p>
        </div>))}
    </div>
  )
}
}

export default ApiCall

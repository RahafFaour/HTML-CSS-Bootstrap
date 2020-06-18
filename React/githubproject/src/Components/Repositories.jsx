import React, { Component } from 'react'

export class Repositories extends Component {
  render() {
    const { repo } = this.props
    return (
      <div className="repdata">
        {repo && repo.map((value, index) => {
          console.log(value)
          return (
            <div key={index}>
              <a href={value.html_url}> {value.name} </a> :
              {value.description}
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Repositories

import React, { Component } from 'react'

export class User extends Component {

    render() {
        const { user } = this.props

        return (
            <div>
                <div className="foto">
                    <img src={user.urlsrc} />
                </div>
                <div className="data">
                    <h4>Fullname: {user.name}</h4> <hr />
                    <h4>Username: {user.login}</h4> <hr />
                    <h4>Location: {user.location}</h4> <hr />
                    <h4>Email: {user.email}</h4> 

                </div>
            </div>
        )
    }
}

export default User

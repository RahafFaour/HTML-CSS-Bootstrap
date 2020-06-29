import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'

export class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data:{
        name:"",
        message:"",
        email:""
      }

    }
  }
  onClick = () => {
this.setState({
  data:{
    name:this.state.value,
    message:this.state.value,
    email:this.state.value
  }
})
}
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div id="contact">
        <Container>
          <Card style={{ width: "100%", padding: "3%", marginBottom: "4%", }}>
            <h1>Contact Me</h1>
            {/* <form action="https://script.google.com/macros/s/AKfycby9-Idjf-nig1-LWfQtxMtTWhOmINEBJ10YjXKXow/exec"></form> */}
            <Form id="gform" action="MAILTO:rahafffrahaf97@gmail.com" data-email="rahafffrahaf97@gmail.com" method="post" encType="text/plain">
              {/* {console.log(window.action)} */}
              <Form.Field>
                <input type="text" placeholder='Name' name="name"  />
              </Form.Field>
              <Form.Field>
                <input type="text" placeholder='Subject' name="message"   />
              </Form.Field>
              <Form.Field>
                <input type="text" placeholder='Email' name="email"   />
              </Form.Field>
              <Button value="Submit" className="ui positive button" type='submit'>Submit</Button>
            </Form>
          </Card>
        </Container>

      </div>
    )
  }
}

export default Contact





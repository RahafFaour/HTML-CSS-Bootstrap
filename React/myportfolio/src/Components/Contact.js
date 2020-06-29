import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'

export class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      // email: '',

    }
  }
//   handleChange = (event) => {
//     const email = event.target.value;
//     this.setState({ email });
// }
  render() {
    return (
      <div id="contact">
        <Container>
          <Card style={{ width: "100%", padding: "3%", marginBottom: "4%", }}>
            <h1>Contact Me</h1>
            <Form action="mailto:rahafffrahaf97@gmail.com" method="post" enctype="text/plain">
              <Form.Field>
                <input type="text" placeholder='Name' name="name" />
              </Form.Field>
              <Form.Field>
                <input type="text" placeholder='Subject' name="subject" />
              </Form.Field>
              <Form.Field>
                <input type="text" placeholder='Email' name="email"  />
              </Form.Field>
              <Button className="ui positive button" type='submit'>Submit</Button>
            </Form>
          </Card>
        </Container>

      </div>
    )
  }
}

export default Contact





// import React, { Component } from 'react'
// import { Container } from 'semantic-ui-react'
// import { Card } from 'semantic-ui-react'
// import { Button, Form } from 'semantic-ui-react'

// export class Contact extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       data:{
//         name:"",
//         message:"",
//         email:""
//       }

//     }
//   }
//   onClick = () => {
// this.setState({
//   data:{
//     name:this.state.value,
//     message:this.state.value,
//     email:this.state.value
//   }
// })
// }
//   onChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   render() {
//     return (
//       <div id="contact">
//         <Container>
//           <Card style={{ width: "100%", padding: "3%", marginBottom: "4%", }}>
//             <h1>Contact Me</h1>
//             {/* <form action="https://script.google.com/macros/s/AKfycby9-Idjf-nig1-LWfQtxMtTWhOmINEBJ10YjXKXow/exec"></form> */}
//             <Form id="gform" action="MAILTO:rahafffrahaf97@gmail.com" data-email="rahafffrahaf97@gmail.com" method="post" encType="text/plain">
//               {/* {console.log(window.action)} */}
//               <Form.Field>
//                 <input type="text" placeholder='Name' name="name"  />
//               </Form.Field>
//               <Form.Field>
//                 <input type="text" placeholder='Subject' name="message"   />
//               </Form.Field>
//               <Form.Field>
//                 <input type="text" placeholder='Email' name="email"   />
//               </Form.Field>
//               <Button value="Submit" className="ui positive button" type='submit'>Submit</Button>
//             </Form>
//           </Card>
//         </Container>

//       </div>
//     )
//   }
// }

// export default Contact

import React, { Component } from 'react'
import { List,Card } from 'semantic-ui-react'

export class Contact extends Component {
  render() {
    return (
      <div id="contact"><br></br>
     <Card style={{marginLeft: '35%',height:200,width: 600,paddingTop: 50,marginBottom: 50,  boxSahdow: 'red'}} alignItems="center" >

     <List>
    <List.Item>
      <List.Icon name='users' style={{paddingLeft:"38%"}}/>
      <List.Content style={{paddingRight:'40%'}}>Rahaf Faour</List.Content>
    </List.Item>
    <List.Item><br></br>
      <List.Icon name='marker' style={{paddingLeft:"38%"}} />
      <List.Content style={{paddingRight:'29%'}}>The Netherlands, Rotterdam</List.Content>
    </List.Item><br></br>
    <List.Item>
      <List.Icon name='mail' style={{paddingLeft:"38%"}} />
      <List.Content style={{paddingRight:'30%'}}>
        <a href='mailto:Rahafffrahaf97@gmail.com'>Rahafffrahaf97@gmail.com</a>
      </List.Content>
    </List.Item>
  </List>
  </Card>

      </div>
    )
  }
}

export default Contact




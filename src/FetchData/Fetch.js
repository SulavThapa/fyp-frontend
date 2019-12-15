import React, {Components} from 'react';
import Table from 'react-bootstrap/Table';
import { Card, Button } from 'react-bootstrap';

class Fetchdata extends React.Components{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded : false,
    }
  }

  componentDidMount(){   
    fetch('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/testapp-oujem/service/sampletest/incoming_webhook/webhooktest')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render(){

    var { isLoaded, items} = this.state;
    if(!isLoaded){
      return <div>Loading......</div>
    }
    else{
      return(
        <div>
          <ul>
            {items.map(item => (
              <li key={item._id}>
                Name: {item.first_name} {item.last_name}
              </li>
            ))};
          </ul>
        </div>
      );
    }
  }

}

export default Fetchdata;
import React from 'react';
import Button from '../atoms/Button';
import { Paragraph } from '../atoms/Fonts';

class ShowEmail extends React.Component {
  state = { show: false }

  renderContactInfo = () => {
    let name = 'hello'
    let at = '@'
    let domain = 'zeltta'
    let dot = '.'
    let com = 'COM'
    return `${name}${at}${domain}${dot}${com.toLowerCase()}`
  }

  render() {
    const { show } = this.state;
    if (show) {
      return (
        <a style={{ color: '#fff' }} href={`mailto:${this.renderContactInfo()}?subject=Hi there!`}><Paragraph style={{ color: '#fff' }}>{this.renderContactInfo()}</Paragraph></a>
      )
    }
    return (
      <Button label="Show Contact" onClick={() => this.setState((prevState) => ({ show: prevState.show ? false : true }))}/>
    )
  }
}

export default ShowEmail;

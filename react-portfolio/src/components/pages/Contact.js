import React from 'react';
const styles = {
  contactStyle: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '5%',
    textAlign: 'center',
    minHeight: '85vh'
  },
  formStyle: {
    padding: '2%'
  },
  headingStyle: {
    marginTop: '5%',
    marginBottom: '2%',
    color: '#3D3D3D',
    textAlign: 'center',
    fontFamily: 'Lovelo-Black',
    filter: 'drop-shadow(3px 1px 2px)',
  },
};

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Please enter your name',
      email: 'Please enter your email',
      message: 'Please enter your message'
  }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render(){
    return (
      <div style={styles.contactStyle} className="contact">
          <h1 style={styles.headingStyle}>
            CONTACT
            </h1>
          <form style={styles.formStyle} name="contact" method="POST" data-netlify="true">
            <label htmlFor='name'>
              Name
              </label>
          <input name='name' value={this.state.name} onChange={this.handleChange} type='text'>
          </input>
          <label htmlFor='email'>
              Email
              </label>
          <input name='email' value={this.state.email} onChange={this.handleChange} type='email'>
          </input>
          <textarea name="message" value={this.state.message} onChange={this.handleChange} rows="4" cols="50">
          {/* message */}
          </textarea>
          <input type='submit' value='submit' />
          </form>
      </div>
    );
  }
  }

export default Contact;
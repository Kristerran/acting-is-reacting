import React from 'react';

const styles = {
  contactStyle: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '15%',
    textAlign: 'center',
    minHeight: '85vh'
  },
  textStyle: {
    fontSize: '10px'
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
  }
  render(){
    return (
      <div style={styles.contactStyle} onSubmit={this.handleSubmit} className="contact">
          <h1 style={styles.textStyle}>CONTACT</h1>
          <form>
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

// Acceptance Criteria

// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
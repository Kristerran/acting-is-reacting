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
    alert('This functionality is still in development, please send your inquiries to kristopherbaily@gmail.com')
    event.preventDefault();
  }
  render(){
    return (
      <div style={styles.contactStyle} onSubmit={this.handleSubmit} className="contact">
          <h1 style={styles.textStyle}>
            CONTACT
            </h1>
          <h2 style={styles.textStyle}>
            This functionality is still under development, please send your inquiries to <a href='mailto:kristopherbaily@gmail.com'>kristopherbaily@gmail.com </a>
          </h2>
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
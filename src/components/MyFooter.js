import React from 'react';
import { Icon,Footer } from 'react-materialize';

const MyFooter = () => {
  return (
    <Footer
      links={
        <ul>
          <li><a className="grey-text text-lighten-3" href="https://github.com/chris-malloy">Github<Icon tiny right>code</Icon></a></li>
          <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/christopher-malloy/">Linkedin<Icon tiny right>work</Icon></a></li>
          <li><a className="grey-text text-lighten-3" href="https://twitter.com/chris_malloy17">Twitter<Icon tiny right>group</Icon></a></li>
          <li><address><a href="mailto:chrismalloymusic@gmail.com">Email<Icon tiny right>mail</Icon></a></address></li>
        </ul>
      }
      id="contact"
      className='grey'
    >
      <h5>Thanks for visiting!</h5>
      <p>Want to ask me anything about coding?  I'd love to chat!</p>
    </Footer>
  )
}

export default MyFooter;
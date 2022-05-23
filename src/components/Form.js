import '../styles/Form.css'
import emailjs from "emailjs-com";
import React from 'react';


export function Form() {

  function sendEmail(e) {
    e.preventDefault();
    alert('Din förfrågan har skickats,\nvänligen se din epost för bekräftelse');
  
  emailjs.sendForm('service_7m22wvj', 'template_0cp7v5f', e.target, 'hq2td4Bz4k7RogNOV')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    }); 
    e.target.reset()
  }
  
      return(
          <div>
              <div className="container">
              <form onSubmit={sendEmail}>
                      <div className="row pt-5 mx-auto">
                          <div className="col-8 form-group mx-auto">
                              <div className='widthOnForm'>
                              <label for="name" className='form-label'>Namn:</label>
                              <input type="text" className="form-input" placeholder="Karl Karlsson" name="name"/>
                              </div>
                          </div>
                          <div className="col-8 form-group mx-auto">
                          <label for="name" className='form-label'>Telefonnummer:</label>
                              <input type="text" className="form-input" placeholder="+46 700 10 20 30" name="tel"/>
                          </div>
                          <div className="col-8 form-group pt-2 mx-auto">
                          <label for="name" className='form-label'>Email:</label>
                              <input type="email" className="form-input" placeholder="din-email@exempel.com" name="reply_to"/>
                          </div>
                          <div className="col-8 form-group pt-2 mx-auto">
                          <label for="name" className='form-label'>Ämne:</label>
                              <input type="text" className="form-input" placeholder="Årsredovisning" name="subject"/>
                          </div>
                          <div className="col-8 form-group pt-2 mx-auto">
                              <label for="name" className='form-label'>Ditt meddelande:</label>
                              <textarea className="form-textarea" id="" placeholder="Meddelande" name="message"></textarea>
                          </div>
                          <div className="col-8 pt-3 mx-auto text-center">
                              <input type="submit" className="btn btn-outline-secondary" value="Skicka meddelande" />
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      )}

export default Form
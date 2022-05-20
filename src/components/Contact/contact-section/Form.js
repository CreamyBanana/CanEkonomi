import React from 'react'

import './form.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Namn', placeholder: 'Karl Karlsson' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Telefonnummer',
    placeholder: '+46 700 10 20 30',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'din-email@exempel.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Ditt meddelande',
    placeholder: 'Hur kan jag hjälpa till?',
  },
]


const Form = () => (
  <form className="form">
    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} />
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}

<button className="form-submit" type="submit">
      Skicka meddelande
    </button>
  </form>
)

export default Form

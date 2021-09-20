import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import { Button, Checkbox, Form } from "semantic-ui-react";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';


function App() {
  
  const AppWithBasic = () => {
    const [currentDate, setNewDate] = useState(null);
    const onChange = (event, data) => setNewDate(data.value);
  
    return <SemanticDatepicker className='date-field' onChange={onChange} />;
  };

  return (
    <div className="App">
      <h1>PART A – Application for an Individual Representative</h1>
      <h2>1. PERSONAL DETAILS</h2>
      <Form>
        <Form.Field>
          <label>Title</label>
          <Checkbox label="Mr" />
          <Checkbox label="Mrs" />
          <Checkbox label="Miss" />
          <Checkbox label="Ms" />
          <Checkbox label="Other" />
        </Form.Field>
        <Form.Field>
          <label>Full legal name</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>Preferred name</label>
          <input />
        </Form.Field>
        <p>Note, Full legal name will be displayed on the Financial Adviser Register</p>
        <Form.Field>
          <label>Previous names (if any)</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>Date of birth:</label>
          {AppWithBasic()}
          <label>Place of birth & Country</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>If born outside Australia, which year did you arrive?</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>Languages other than English you would be comfortable to use when working with clients</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>Residential address</label>
          <input className="twelve wide field" />
          <label>State</label>
          <input className="two wide field" />
          <label>Postcode</label>
          <input className="four wide field" />
        </Form.Field>
        <Form.Field>
          <label>Postal address</label>
          <input className="twelve wide field" />
          <label>State</label>
          <input className="two wide field" />
          <label>Postcode</label>
          <input className="four wide field" />
        </Form.Field>
        <Form.Field>
          <label>Telephone</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>Mobile</label>
          <input placeholder="(XXX) XXXXX-XXXXX"/>
        </Form.Field>
        <Form.Field>
          <label>Email address</label>
          <input />
        </Form.Field>
      </Form>
    </div>
  );
}

export default App;

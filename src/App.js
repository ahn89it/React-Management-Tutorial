import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '거니',
  'birthday': '961012',
  'gender': '여성',
  'job': '학생'
 },

 {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '너니',
  'birthday': '961012',
  'gender': '여성',
  'job': '학생'
 },

 {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '더니',
  'birthday': '961012',
  'gender': '여성',
  'job': '군인'
 }
]


class App extends Component {
  render() {
    return (
      <div>
        {
        customers.map( c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
      </div>
    );
  }
}

export default App;

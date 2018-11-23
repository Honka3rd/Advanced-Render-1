import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const languages = [
      {name:'Javascript',rank:1},
      {name:'Java',rank:2},
      {name:'Python',rank:3},
      {name:'Ruby',rank:4},
      {name:'PHP',rank:5},
      {name:'C++',rank:6},
      {name:'CSS',rank:7},
      {name:'C#',rank:8},
      {name:'C',rank:9},
      {name:'Go',rank:10},
      {name:'Shell',rank:11},
      {name:'Objective C',rank:12},
      {name:'Scala',rank:13},
      {name:'Swift',rank:14},
      {name:'Typescript',rank:15}
    ];

    const lanEles = languages.map(lan => (
      <tr>
        <td>{lan.name}</td>
        <td>{lan.rank}</td>
      </tr>
    ));

    return (
      <div className="App">
        <table>
          <tr>
            <th>Name</th>
            <th>Rank</th>
          </tr>
          {lanEles}
        </table>
      </div>
    );
  }
}

export default App;

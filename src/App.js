import React, { Component } from 'react';
import About from './components/About';
// import Experience from './components/Experience';
import Education from './components/Education';
// import Certificate from './components/Certificate';
// import Skills from './components/Skills';
import logo from './logo192.png';

class App extends Component {
  render() {

    const person = {
      name: 'Jiayuan Sun',
      profession: 'About Me',
      bio: 'We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard.',
      address: 'Chengdu, Sichuan,',
      social: [
        {name: 'github', url: 'https://github.com/IntelligentSun'},
      ],
      education: [
        {degree: 'Master of Science', institution: 'University of Electronic Science and Technology of China', startDate: 'Jan 2020', endDate: 'Jan 2020', description: 'Computer Science and Technology'},
      ],
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={logo}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Education education={person.education} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;

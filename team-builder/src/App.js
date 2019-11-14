import React, { useState } from 'react';
import './App.css';

import TeamForm from './components/TeamForm';
import Team from './components/Team';
import data from './data'


function App() {
	
	const [teamMembers, setTeamMembers] = useState(data)

	const addNewMember = member => {
		setTeamMembers([...teamMembers, member])
	}

  return (
    <div className="App">
			<TeamForm addNewMember={addNewMember}/>
			<Team teamMembers={teamMembers}/>
    </div>
  );
}

export default App;

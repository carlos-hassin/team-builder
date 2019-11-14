import React, { useState } from 'react';

function TeamForm (props) {

	const [newMember, setNewMember] = useState({
		name: "",
		email: "",
    role: "",
    image: ""
	})

	const submitForm = event => {
    event.preventDefault();

    const newTeamMember = {
      ...newMember
    };

    props.addNewMember(newTeamMember);
    setNewMember({ name: "", email: "", role: ""});
  };

	const changeHandler = event => {
    console.log(event.target.value);
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };

	return(
		<div className="form-container">
			<h1>Team Form</h1>
			<form onSubmit={submitForm}>
				<label htmlFor="name">Name</label>
				<input 
					type="text" 
					name="name" 
					placeholder="Full Name"
					value={newMember.name}
					onChange={changeHandler}
					/>
				<label htmlFor="email">Email</label>
				<input 
					type="text"
					name="email"
					placeholder="example@gmail.com"
					value={newMember.email}
					onChange={changeHandler}
					required
				/>
				<label htmlFor="role">Role</label>
				<input 
					type="text"
					name="role"
					placeholder="Back end Engineer"
					value={newMember.role}
					onChange={changeHandler}
				/>
        <label htmlFor="image"></label>
        <input
        type="image">
        
        </input>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default TeamForm;
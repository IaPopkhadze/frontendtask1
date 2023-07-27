import React, { useEffect } from 'react';
import { useState } from 'react';
import { INewPerson as Props, useStore } from '../App';

const AddNewPersonContent: React.FC = () => {
	const { newPersonData, updateNewPersonValues } = useStore();

	return (
		<div className='add_new_person_container'>
			<div className='child_container'>
				<div className='title'> Name</div>
				<input type='text' name='name' value={newPersonData.name} onChange={updateNewPersonValues} />
			</div>
			<div className='child_container'>
				<div className='title'>Email</div>
				<input type='email' name='email' value={newPersonData.email} onChange={updateNewPersonValues} />
			</div>
			<div className='child_container'>
				<div className='title'>Gender</div>
				<select name='gender' value={newPersonData.gender} onChange={updateNewPersonValues}>
					<option value='male'>Male</option>
					<option value='female'>Female</option>
				</select>
			</div>
			<div className='child_container'>
				<div className='title'>Phone Number</div>
				<input type='text' name='phone' value={newPersonData.phone} onChange={updateNewPersonValues} />
			</div>
			<div className='child_container'>
				<div className='title'>Adress (City)</div>
				<input type='text' name='city' value={newPersonData.city} onChange={updateNewPersonValues} />
			</div>
			<div className='child_container'>
				<div className='title'>Adress (Street)</div>
				<input type='text' name='street' value={newPersonData.street} onChange={updateNewPersonValues} />
			</div>
		</div>
	);
};
export default AddNewPersonContent;

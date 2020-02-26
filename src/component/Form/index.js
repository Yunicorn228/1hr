import React from 'react';

const Form = ({ data, handleInputChange, handleInputSubmit }) => {
	return (
		<div>
			<button onClick={handleInputSubmit}>submit</button>
			<input value={data} onChange={handleInputChange} type='text' />
		</div>
	);
};
export default Form;

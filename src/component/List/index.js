import React from 'react';

const List = ({ todos, handleInputDelet }) => {
	return (
		<div>
			{todos.map((todo, i) => (
				<div>
					<div>{todo}</div>
					<button onClick={() => handleInputDelet(i)}>x</button>
				</div>
			))}
		</div>
	);
};

export default List;

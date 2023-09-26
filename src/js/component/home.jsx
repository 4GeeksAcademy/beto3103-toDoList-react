import React, { useState } from "react";

//create your first component
const Home = () => {

	//estado guarda la información del input
	const [task, setTask] = useState({ label: "", done: false })
	const [tasksList, setTasksList] = useState([])

	const handleChange = (e) => { // implícitiamente recibe el evento lo esta llamando onChange
		//  console.log(e.target.value) // se puede sacar el del evento el target y el valor
		// setTask(e.target.value)
		// const valueInput = e.target.value.toString()
		setTask({
			...task,
			label: e.target.value,
			done: false
		})
		// setTask(valueInput)
	}

	const handleSubmit = (e) => {
		e.preventDefault() // frenamos el burbujeo del form
	}

	const saveTask = (e) => {

		if (e.key === "Enter") {
			setTasksList([...tasksList, task])
			setTask({
				label: "",
				done: false
			})
			e.target.value = ""
		}
	}


	const deleteTask = (id) => {
		let newArr = tasksList.filter((item, index) => index != id)
		setTasksList(newArr)

	}

	return (
		<>
			<div className="container text-center justify-content-center mt-3">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6">
						<h1>
							Mi lista de tareas
						</h1>
						<hr />
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								className="form-control"
								value={task.label}
								onChange={handleChange}
								onKeyDown={saveTask}
								placeholder="Agrega una tarea acá"
							/>
						</form>

						{tasksList.map((item, index) => {
							return (
								<>
									<div className=" mt-3 border-top border-primary border-bottom">
										<div className="d-flex justify-content-between">
											<div className="" key={index}>
												{index + 1}) {item.label}
											</div>
											<div className="text-danger" onClick={() => {
												deleteTask(index)
											}}>
												x
											</div>
										</div>
									</div>
								</>
							)
						})}

					</div>
				</div>
			</div>
		</>
	);
};

export default Home;

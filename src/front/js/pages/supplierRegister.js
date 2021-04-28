import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/supplierRegister.scss";

export const Supplier_Register = () => {
	const { store, actions } = useContext(Context);

	const [data, setData] = useState({
		name: "",
		phone_number: "",
		email: "",
		category: "",
		address: "",
		schedule: "",
		description: ""
	});

	const handleInputChange = e => {
		// console.log(event.target.name)
		// console.log(event.target.value);
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const frontSupplierRegister = e => {
		e.preventDefault();
		// console.log(data.name, data.phone_number, data.email, data.category, data.address, data.schedule, data.description);
		actions.postSupplierRegister(
			data.name,
			data.phone_number,
			data.email,
			data.category,
			data.address,
			data.schedule,
			data.description
		);
	};

	return (
		<div className="page text-center">
			<div id="page-top-register">
				<div className="registro-proveedor">
					<div className="row">
						<div className="usuario">
							<i className="fa fa-address-card fa-4x mr-5" />
							<h3>Bienvenido</h3>
							<input type="submit" name="" value="Login" />
							<br />
						</div>
						<div className="col-md-9 formulario-proveedor">
							<div className="tab-content" id="myTabContent">
								<div
									className="tab-pane fade show active"
									id="home"
									role="tabpanel"
									aria-labelledby="home-tab">
									<h3 className="formulario-titulo pb-4">Formulario de Proveedor</h3>
									<form className="row registrarse-formulario " onSubmit={frontSupplierRegister}>
										<div className="col">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Nombre comercial *"
													name="name"
													onChange={handleInputChange}
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Correo electrónico *"
													name="email"
													onChange={handleInputChange}
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Teléfono *"
													name="phone_number"
													onChange={handleInputChange}
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Dirección *"
													name="address"
													onChange={handleInputChange}
												/>
											</div>
											<div className="form-group">
												<select
													className="form-control"
													name="category"
													onChange={handleInputChange}>
													<option className="hidden" selected disabled>
														Categoría
													</option>
													<option>Mascotas</option>
													<option>Pintor</option>
													<option>Transporte</option>
													<option>Fotógrafo</option>
													<option>Catering</option>
													<option>Jardinero</option>
													<option>Express</option>
													<option>Construcción </option>
													<option>Computación</option>
													<option>Eléctrico</option>
													<option>Enseñanza</option>
													<option>Mecánico</option>
												</select>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<div className="horario d-flex justify-content-center">
													<a className="btnModal" href="#openModal">
														Horario laboral
													</a>
												</div>
												<div id="openModal" className="modalDialog">
													<div>
														<a href="#close" title="Close" className="close">
															X
														</a>
														<h2>Horario laboral</h2>
														<p>
															Seleccione los días en que labora con su respectivo horario.
														</p>
														<div className="form-group form-check">
															<input
																type="checkbox"
																className="form-check-input"
																id="exampleCheck1"
															/>
															<label className="form-check-label" htmlFor="exampleCheck1">
																Lun.
															</label>
															<label className="star">de</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
															<label className="final">a</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
														</div>
														<div className="form-group form-check">
															<input
																type="checkbox"
																className="form-check-input"
																id="exampleCheck1"
															/>
															<label className="form-check-label" htmlFor="exampleCheck1">
																Mar.
															</label>
															<label className="star">de</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
															<label className="final">a</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
														</div>
														<div className="form-group form-check">
															<input
																type="checkbox"
																className="form-check-input"
																id="exampleCheck1"
															/>
															<label className="form-check-label" htmlFor="exampleCheck1">
																Miér.
															</label>
															<label className="star">de</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
															<label className="final">a</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
														</div>
														<div className="form-group form-check">
															<input
																type="checkbox"
																className="form-check-input"
																id="exampleCheck1"
															/>
															<label className="form-check-label" htmlFor="exampleCheck1">
																Jue.
															</label>
															<label className="star">de</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
															<label className="final">a</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
														</div>
														<div className="form-group form-check">
															<input
																type="checkbox"
																className="form-check-input"
																id="exampleCheck1"
															/>
															<label className="form-check-label" htmlFor="exampleCheck1">
																Vier.
															</label>
															<label className="star">de</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
															<label className="final">a</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
														</div>
														<div className="form-group form-check">
															<input
																type="checkbox"
																className="form-check-input"
																id="exampleCheck1"
															/>
															<label className="form-check-label" htmlFor="exampleCheck1">
																Sáb.
															</label>
															<label className="star">de</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
															<label className="final">a</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
														</div>
														<div className="form-group form-check">
															<input
																type="checkbox"
																className="form-check-input"
																id="exampleCheck1"
															/>
															<label className="form-check-label" htmlFor="exampleCheck1">
																Dom.
															</label>
															<label className="star">de</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
															<label className="final">a</label>
															<input
																type="time"
																name="hora"
																min="18:00"
																max="21:00"
																step="3600"
															/>
														</div>
													</div>
												</div>
											</div>

											<div className="col form-group">
												<label>Descripción</label>
												<br />
												<textarea
													name="description"
													rows="4"
													cols="30"
													maxLength="50"
													onChange={handleInputChange}
												/>
											</div>
										</div>
										<div className="col-12 register-form d-flex justify-content-center mt-3">
											<input type="submit" className="btnRegistrar" value="Registrarse" />
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

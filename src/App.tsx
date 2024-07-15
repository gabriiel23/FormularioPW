import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

const Formulario = () => {
  const { register, formState: { errors }, watch, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  const incluirTelefono = watch('incluirTelefono');

  return (
    <div className="page-container">
      <div className="form-container">

        <h1>--- FORMULARIO ---</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group">
            <input type="text" {...register('nombre', { required: true })} placeholder=" " />
            <label>Nombres</label>
            {errors.nombre && <p className="error-message">Este campo es obligatorio</p>}
          </div>

          <div className="form-group">
            <input type="text" {...register('apellido', { required: true })} placeholder=" " />
            <label>Apellidos</label>
            {errors.apellido && <p className="error-message">Este campo es obligatorio</p>}
          </div>

          <div className="form-group">
            <select {...register('genero', { required: true })} defaultValue="">
              <option value="" disabled>Seleccione</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="null">Prefiero no decirlo</option>
            </select>
            <label>Género</label>
            {errors.genero && <p className="error-message">Este campo es obligatorio</p>}
          </div>

          <div className="form-group">
            <input type="email" {...register('correo', {
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
            })} placeholder=" " />
            <label>Correo</label>
            {errors.correo && <p className="error-message">El formato del email es incorrecto</p>}
          </div>

          <div className="form-group">
            <input type="text" {...register('direccion', { required: true })} placeholder=" " />
            <label>Dirección</label>
            {errors.direccion && <p className="error-message">Este campo es obligatorio</p>}
          </div>

          <div className="form-group">
            <input type="date" {...register('fechaNacimiento', { required: true })} placeholder=" " />
            <label>Fecha de Nacimiento</label>
            {errors.fechaNacimiento && <p className="error-message">Este campo es obligatorio</p>}
          </div>

          <div className="form-group">
            <input type="text" {...register('pais')} placeholder=" " />
            <label>País</label>
          </div>

          <div className="form-group">
            <select {...register('estado')} defaultValue="">
              <option value="" disabled>Seleccione</option>
              <option value="casado">Casado</option>
              <option value="soltero">Soltero</option>
            </select>
            <label>Estado</label>
          </div>

          <div className="form-group">
            <input type="checkbox" {...register('incluirTelefono')} />
            <label className="checkbox-label">¿Desea incluir el teléfono?</label>
          </div>

          {incluirTelefono && (
            <div className="form-group">
              <input type="text" {...register('telefono')} placeholder=" " />
              <label>Teléfono</label>
            </div>
          )}

          <div className="submit-container">
            <input className="submit-button" type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;

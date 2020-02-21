
import React from "react";

const Form = props => {
  const { name, carnet, tarde, submitHandler, changeHandler} = props;
  return (
    <form onSubmit={submitHandler} className="p-3 mb-2 bg-primary text-white">
      <input
       className="form-control"
        id="name"
        onChange={changeHandler}
        value={name}
        placeholder="Ingrese su nombre"
      />
      <input
       className="form-control"
        id="carnet"
        onChange={changeHandler}
        value={carnet}
        placeholder="Ingrese su carnet"
      />
      <label>
        Tarde?
        <input
          type="checkbox"
          id="tarde"
          onChange={changeHandler}
          checked = {tarde}
        />
      </label>
      <button class="btn btn-success" type="submit">
        Guardar Post
      </button>
    </form>
  );
};

export default Form;
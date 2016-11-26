import React, { Component } from 'react';

const GardenDisplayItem = props => (
  <div>
    <form>
      <div>Key: {props.q1}</div>
      <div>Quad ID: {props.quadrants}</div>
      <label>Quadrant Number:
        <input
          type="text"
          value={props.quadrants}
          // name={props.quadrants}
          // onClick={props.activateQuadrant}
          onChange={props.updateIdQuadrant}
          // onClick={() => props.handleQuadrantForm(props.quad_id)}
        />
      </label>
      <label>Produce Assigned:
        <input
          type="text"
          placeholder="Produce"
          value={props.produce}
          onChange={props.updateProduceQuadrant}
        />
      </label>
      <label>User Assigned:
        <input
          type="text"
          placeholder="User Name"
          value={props.user}
          onChange={props.updateUserQuadrant}
        />
      </label>
      <input
          type="button"
          name="submit"
          value="SELECT"
          // onClick={props.activateQuadrant}
          // onChange={props.updateIdQuadrant}
          onClick={() => props.handleQuadrantForm(props.quadrants)}
        />
    </form>
    <br>

    </br>
  </div>

);

export default GardenDisplayItem;
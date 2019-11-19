// /client/App.js
import React, { Component } from 'react';
import axios from 'axios';

import './NewProject.css';

class NewProject extends Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (message, projectname, description, manager_email, release_date, progress) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      message: message,
      projectname : projectname,
      description : description,
      manager_email : manager_email,
      release_date : release_date,
      progress : progress,
    });

    this.props.history.push('/MyProjects');
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
      <div>
        <div class="NewProject" style={{ padding: '10px' }}>
          Project code :     <input
            type="text"
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="Must be unique"
            style={{ width: '200px' }}
          /> <br/>
          Project name :     <input
            type="text"
            onChange={(e) => this.setState({ projectname: e.target.value })}
            placeholder="Enter a name"
            style={{ width: '200px' }}
          /> <br/>
          Project description :    <input
            type="text"
            onChange={(e) => this.setState({ description: e.target.value })}
            placeholder="Summary of project"
            style={{ width: '400px', height: '70px' }}
          /> <br/>
          Email :  <input
            type="text"
            onChange={(e) => this.setState({ manager_email: e.target.value })}
            placeholder="Managers's email"
            style={{ width: '200px' }}
          /> <br/>
          Release :    <input
            type="text"
            onChange={(e) => this.setState({ release_date: e.target.value })}
            placeholder="Live date"
            style={{ width: '200px' }}
          /> <br/>
          Progress :    <input
            type="text"
            onChange={(e) => this.setState({ progress: e.target.value })}
            placeholder="metrics in %"
            style={{ width: '200px' }}
          /> <br/><br/><br/>
          <button onClick={() => this.putDataToDB(this.state.message, this.state.projectname, this.state.description, this.state.manager_email, this.state.release_date, this.state.progress)}>
            Add new Project
          </button>
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ idToDelete: e.target.value })}
            placeholder="put id of item to delete here"
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

export default NewProject;

import React, { Component } from "react";
import "./style.css";
import API from './../../../../utils/API';
import UserTable from './UserTable/UserTable';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

class UpdateUser extends Component {

    constructor(props) {
        super(props);
            this.state = {
                users: [],
                roles:[]
            }
    }

  componentDidMount() {
        this.loadRoles();
        this.loadUsers("");
  }

  loadRoles = () => {
    API.getRoles()
      .then(res =>{
        this.setState({ roles: res.data});
    })
      .catch(err => console.log(err));
  };

  loadUsers = (role_id) => {
    API.getUserType(role_id)
      .then(res => {
        this.setState({ users: res.data})
      })
      .catch(err => console.log(err));
  };


  handleChange = (event, value) => {
    if (value !== null) {
      this.loadUsers(value._id);
    }
  }
 
  render() {
    return (
            <div>
              <div style={{ width: 300 }}>
                  <Autocomplete
                    id="free-solo-demo"
                    options={this.state.roles}
                    onChange={this.handleChange} 
                    getOptionLabel={option => option.name} 
                    renderInput={params => (
                      <TextField {...params} label="Select Role" margin="normal" variant="outlined" fullWidth />
                    )}
                  />
                </div>
                <UserTable users={this.state.users}/>
            </div>
    );
  }
}


export default UpdateUser;
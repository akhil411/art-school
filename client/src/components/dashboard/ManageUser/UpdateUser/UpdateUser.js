import React, { Component } from "react";
import "./style.css";
import API from './../../../../utils/API';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Pagination from './../../../Layout/Pagination/Pagination';


class UpdateUser extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: [],
			roles: [],
			pageOfItems: [],
		}
		this.onChangePage = this.onChangePage.bind(this);
	}

	componentDidMount() {
		this.loadRoles();
		this.loadUsers("");
	}

	loadRoles = () => {
		API.getRoles()
			.then(res => {
				this.setState({ roles: res.data });
			})
			.catch(err => console.log(err));
	};

	loadUsers = (role_id) => {
		API.getUserType(role_id)
			.then(res => {
				console.log(res.data)

				this.setState({ users: res.data })
			})
			.catch(err => console.log(err));
	};

	handleChange = (event, value) => {
		if (value !== null) {
			this.loadUsers(value._id);
		}
	}

	onChangePage(pageOfItems) {
		this.setState({ pageOfItems: pageOfItems });
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
				<div className="displayUsersTable">
					<table >
						<tr>
							<th>Username</th>
							<th>Email</th>
						</tr>
						{this.state.pageOfItems.map(data => (
							<tr>
							<td>{data.name}</td>
							<td>{data.email}</td>
						</tr>
						))}
					</table>
				</div>
				{/* <UserTable users={this.state.users} /> */}
				<Pagination items={this.state.users} onChangePage={this.onChangePage} />
			</div>
		);
	}
}

export default UpdateUser;

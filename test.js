const { useAxios } = require("./useAxios");

const test = async () => {
	
	//Get all users
	await useAxios("get", "/getAllUsers");
	
	//Delete user id 1
	await useAxios("delete", "/deleteUser/1");
	
	//Get all users
	await useAxios("get", "/getAllUsers");
	
	//Create user test
	await useAxios("post", "/createUser", {
		first_name: "test",
		last_name: "test",
		address: "test",
		post_code: "555",
		contact_number: "09898989898",
		email: "test@email.com",
		username: "test123",
		password: "password",
	});
	
	//Get user id 2
	await useAxios("get", "/getUserByID/2");
	
	//Edit user id 2
	await useAxios("put", "/editUser/2", {
		first_name: "Pedro",
		last_name: "Gil",
		address: "987 Avenue",
		post_code: "1122",
		contact_number: "09999999999",
		email: "pedro66@email.com",
		username: "pedro99",
		password: "password",
	});
	
	//Get modified user id 2
	await useAxios("get", "/getUserByID/2");
	
	//Delete users 3, 4, 5
	await useAxios("delete", "/users/delete", { id: [3, 4, 5] });
	
	//Get all users
	await useAxios("get", "/getAllUsers");
}

test()
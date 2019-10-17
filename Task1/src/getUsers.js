function getUsers() {
		return JSON.parse(localStorage.getItem("users") || "[]");
    }
export default getUsers;

 

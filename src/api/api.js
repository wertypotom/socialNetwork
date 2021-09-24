import axios from "axios";

const usersInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a3103e1f-b584-4ab0-bb2f-1523dd401d00",
  },
});

export const usersAPI = {
  async loadUsers(numOfUsersPerPage, currentPage) {
    const response = await usersInstance.get(
      `users?count=${numOfUsersPerPage}&page=${currentPage}`
    );
    return response.data;
  },

  async loadSpecificUserPage(numOfUsersPerPage, currentPage, page) {
    const response = await usersInstance.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${numOfUsersPerPage}&page=${
        currentPage !== page ? page : currentPage
      }`
    );
    return response.data;
  },

  async unsubscribeFromUser(id) {
    const response = await usersInstance.delete(`follow/${id}`);
    return response.data;
  },

  async subscribeToUser(id) {
    const response = await usersInstance.post(`follow/${id}`);
    return response.data;
  },

  loadPersonalData() {
    console.warn("Use profile API for this method");
    return profileAPI.loadPersonalData();
  },

  loadSpecificUserDataOnMainPage(userID) {
    console.warn("Use profile API for this method");
    return profileAPI.loadSpecificUserDataOnMainPage(userID);
  },
};

export const profileAPI = {
  async loadPersonalData() {
    const response = await usersInstance.get(`auth/me`);
    return response.data;
  },

  async login(email, password, rememberMe = false) {
    const response = await usersInstance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    });
    return response.data;
  },

  async logout() {
    const response = await usersInstance.delete(`auth/login`);
    return response.data;
  },

  async loadSpecificUserDataOnMainPage(userID) {
    const response = await usersInstance.get(`profile/${userID}`);
    return response.data;
  },

  getUserStatus(userId) {
    return usersInstance.get(`profile/status/${userId}`);
  },

  updateStatus(status) {
    return usersInstance.put(`profile/status`, { status: status });
  },
};

// src/services/userService.js
import api from "./api";

export default {
  getUsers() {
    return api.get("/users");
  },

  updateUser(userId, userData, token) {
    return api.put(`/users/${userId}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

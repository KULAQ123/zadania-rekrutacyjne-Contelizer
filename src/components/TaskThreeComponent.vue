<template>
  <div class="task-completion">
    <h1>Lista Użytkowników</h1>
    <InputComponent
      type="text"
      placeholder="Wyszukaj użytkownika"
      v-model="searchQuery"
      @input="filterUsers"
    />
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        <div class="user-details">
          <span>{{ user.name }} ({{ user.email }})</span>
          <ButtonComponent
            type="button"
            text="Edytuj"
            radius
            black-text
            white
            @click="editUser(user)"
          ></ButtonComponent>
        </div>
        <div v-if="editingUser && editingUser.id === user.id">
          <InputComponent
            type="text"
            v-model="editingUser.name"
            placeholder="Imię i nazwisko"
          />
          <InputComponent
            type="email"
            v-model="editingUser.email"
            placeholder="E-mail"
          />
          <SelectComponent
            v-model="editingUser.status"
            :options="statusOptions"
            label="Wybierz opcję"
          />
          <div class="button-container">
            <ButtonComponent
              type="button"
              text="Zapisz"
              radius
              black-text
              white
              @click="saveUser"
            ></ButtonComponent>
            <ButtonComponent
              type="button"
              text="Anuluj"
              radius
              black-text
              white
              @click="cancelEdit"
            ></ButtonComponent>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import userService from "../services/userService";
import InputComponent from "@/components/InputComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import SelectComponent from "@/components/SelectComponent.vue";

const users = ref([]);
const searchQuery = ref("");
const filteredUsers = ref([]);
const editingUser = ref(null);
const statusOptions = ref([
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
]);

// Funkcja do pobieranie użytkowników
async function fetchUsers() {
  try {
    const response = await userService.getUsers();
    users.value = response.data;
    filteredUsers.value = response.data;
  } catch (error) {
    console.error("Błąd podczas pobierania użytkowników:", error);
  }
}

// Funkcja do filtrowania użytkowników
function filterUsers() {
  filteredUsers.value = users.value.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
}
// Funkcja do edycji użytkowników
function editUser(user) {
  editingUser.value = { ...user };
}

// Funkcja do anulowanie edycji
function cancelEdit() {
  editingUser.value = null;
}

// Zapisz edytowanego użytkownika
async function saveUser() {
  const token =
    "7f9da6c7a2feb169122f15a2a7a932c6df1cd5250a9983df9dce161f149fdc1f";

  try {
    await userService.updateUser(
      editingUser.value.id,
      editingUser.value,
      token,
    );

    // Aktualizacja lokalnej listy użytkowników
    const index = users.value.findIndex(
      (user) => user.id === editingUser.value.id,
    );
    if (index !== -1) {
      users.value[index] = { ...editingUser.value };
      filterUsers();
    }
    editingUser.value = null;
  } catch (error) {
    console.error("Błąd podczas zapisywania użytkownika:", error);
  }
}

onMounted(() => {
  fetchUsers();
});
</script>

<style scoped>
.task-completion {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: auto;
  padding-bottom: 50px;

  ul {
    display: flex;
    gap: 10px;
    flex-direction: column;

    .button-container {
      display: flex;
      gap: 10px;
    }
  }
}
input[type="text"],
input[type="email"],
select {
  display: block;
  margin: 5px 0;
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.user-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

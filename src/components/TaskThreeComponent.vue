<template>
  <div class="task-completion">
    <h1>Lista Użytkowników</h1>
    <InputComponent
      type="text"
      placeholder="Wyszukaj użytkownika"
      v-model="searchQuery"
      @input="filterUsers"
    />
    <div class="list-container">
      <div class="list-title">
        <span>Imię i Nazwisko</span>
        <span>Email</span>
        <span>Akcja</span>
      </div>
      <hr class="divider" />
      <div v-for="user in filteredUsers" :key="user.id" class="user">
        <div class="user-details">
          <span>{{ user.name }}</span>
          <span>({{ user.email }})</span>
          <ButtonComponent
            type="button"
            text="Edytuj"
            radius
            black-text
            white
            @click="editUser(user)"
          ></ButtonComponent>
        </div>
        <div v-if="editingUser && editingUser.id === user.id" class="user-edit">
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
          <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
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
        <hr class="divider" />
      </div>
    </div>
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
const errorMessage = ref("");

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

    if (error.response && error.response.status === 422) {
      const errors = error.response.data;

      if (Array.isArray(errors) && errors.length) {
        const emailError = errors.find(
          (err) =>
            err.field === "email" &&
            err.message.includes("has already been taken"),
        );

        if (emailError) {
          errorMessage.value = "Taki email już istnieje";
        } else {
          errorMessage.value = "Błąd walidacji danych. Sprawdź pola.";
        }
      } else {
        // Ogólny błąd walidacyjny
        errorMessage.value = "Błąd walidacji danych.";
      }
    } else {
      // Inne błędy
      errorMessage.value = "Wystąpił błąd podczas zapisywania użytkownika.";
    }
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
  width: 700px;
  margin: auto;
  padding-bottom: 50px;

  .list-container {
    display: flex;
    gap: 10px;
    flex-direction: column;

    .list-title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        width: 100%;
        text-align: center;
      }
    }

    .divider {
      border: none;
      border-top: 1px solid #ccc;
      margin: 10px 0 10px 0;
    }

    .user {
      .user-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .user-edit {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        margin: auto;
        transition: all 0.3s;

        .error {
          color: red;
        }

        .button-container {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="section columns is-multiline">
    <div class="column is-full">
      <p class="title">Beep Technologies</p>
    </div>
    <div class="column is-full">
      <p class="subtitle">Profile page</p>
    </div>

    <!-- Show this when user data is not loaded -->
    <div class="column is-full" v-if="user === undefined">
      <p class="title">... Loading ...</p>
    </div>

    <div class="column is-full" v-else>
      <div class="section columns is-multiline">
        <div class="column is-full box">
          Name: {{ user.name }}
          <br />

          Email: {{ user.email }}
        </div>

        <div class="column is-full">
          <div class="columns is-multiline">
            <div
              class="column is-full box"
              v-for="(promotion, i) in user.promotions"
              :key="i"
            >
              <p class="title">{{ promotion.title }}</p>
              <p class="subtitle">{{ promotion.type }}</p>

              {{ promotion.discount }} x {{ promotion.quantity }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { oof } from "simpler-fetch";

export default {
  name: "ProfilePage",

  data() {
    return {
      // Create an empty user variable first to be set by API response later
      user: undefined,
    };
  },

  created() {
    // Call API on load
    this.getUserData();
  },

  methods: {
    // Method to call API for user data and set user variable with response
    async getUserData() {
      const res = await oof
        .GET("https://dev.beepbeep.tech/v1/sample_customer?format=json")
        .runJSON()
        .catch((e) => alert(`Error: ${e.message}`));

      if (!res.ok) return alert("Failed to get data");

      this.user = res;
    },
  },
};
</script>

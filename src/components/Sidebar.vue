<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <figure class="image is-128x128">
        <img
          class="is-rounded mt-5 ml-4"
          src="https://cdn.vuetifyjs.com/images/john.jpg"
        />
      </figure>
      <section>
        <div>
          <p class="is-size-5 mt-4 ml-3">{{ user.name }}</p>
          <p class="is-size-6 ml-3">{{ user.email }}</p>
        </div>
      </section>
      <aside class="menu mt-4">
        <ul class="menu-list">
          <li>
            <a>
              <span class="icon-text">
                <span class="icon">
                  <i class="mdi mdi-calendar-today"></i>
                </span>
                <span>My Order</span>
              </span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon-text">
                <span class="icon">
                  <i class="mdi mdi-calendar-today"></i>
                </span>
                <span>My Reward</span>
              </span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon-text">
                <span class="icon">
                  <i class="mdi mdi-calendar-today"></i>
                </span>
                <span>My Account</span>
              </span>
            </a>
          </li>
        </ul>
      </aside>
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

<template>
  <link rel="stylesheet" href="css/mystyles.css" />
  <section class="main-content columns is-fullheight">
    <aside
      class="column is-2 is-narrow-mobile is-fullheight has-text-centered is-hidden-mobile ml-2 mt-2"
    >
      <figure class="image is-128x128 is-inline-block">
        <img
          class="is-rounded mt-3"
          src="https://cdn.vuetifyjs.com/images/john.jpg"
        />
      </figure>
      <section class="has-text-centered">
        <div>
          <p class="is-size-5 mt-5">{{ user.name }}</p>
          <p class="is-size-6">{{ user.email }}</p>
        </div>
      </section>
      <ul class="menu-list mt-4">
        <li>
          <a href="#" class="">
            <span class="icon"><i class="fa fa-house-user"></i></span>
            My Account
          </a>
        </li>
        <li>
          <a href="#" class="is-active">
            <span class="icon"><i class="fa fa-piggy-bank"></i></span> My Reward
          </a>
        </li>
        <li>
          <a href="#" class="">
            <span class="icon"><i class="fa fa-receipt"></i></span> My Order
          </a>
        </li>
      </ul>
    </aside>

    <div class="columns is-multiline mt-4 mr-4">
      <div
        v-for="(promotion, i) in user.promotions"
        :key="i"
        class="column is-one-third"
      >
        <div class="card">
          <header class="card-header">
            <span class="card-header-icon" v-if="promotion.type == 'discount'">
              <i class="fas fa-percent" aria-hidden="true"></i>
            </span>
            <span class="card-header-icon" v-else>
              <i class="fa fa-wallet" aria-hidden="true"></i>
            </span>
            <p class="card-header-title">
              {{ promotion.title }}
            </p>
            <span>
              <p class="card-header-icon has-text-weight-semibold">
                {{ promotion.quantity }}x
              </p>
            </span>
          </header>
          <div class="card-content">
            <!-- Show discount amount if type is discount -->
            <div class="content title is-4" v-if="promotion.type == 'discount'">
              <!-- <i class="fas fa-utensils"></i> -->
              $ {{ promotion.discount }} off your purchase
            </div>
            <p class="subtitle is-6">Valid till: 09-09-2022</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { oof } from "simpler-fetch";

export default {
  name: "Reward",

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

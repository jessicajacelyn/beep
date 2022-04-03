<template>
  <link rel="stylesheet" href="css/mystyles.css" />
  <nav
    class="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="/assets/beep.png" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"> HOME </a>

        <a class="navbar-item"> SEARCH </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="icon mr-2">
            <i class="fas fa-angle-down"> </i>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

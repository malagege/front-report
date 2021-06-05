<template>
<nav class="navbar navbar-light navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" alt="" width="30" height="24" class="logo d-inline-block align-text-top">
      回報系統
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/">回報清單</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/tplword">文字範本</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/leo">管理專區</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
.logo{
    border-radius: 20%;
}
</style>
<template>
  <div class="container">
    <Navbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/images/sukses.png" width="300" />
          <h2><strong>Sukses!!</strong></h2>
          <h4>Note kamu berhasil <strong>tersimpan</strong> <br> terimakasih!</h4>
        </div>
      </div><center>
      <router-link to="/Home"><button class="btn btn-primary" type="button">Kembali</button></router-link>
      </center>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";


export default {
  name: "Sukses",
  components: {
    Navbar,
  }
  }
</script>

<style>
</style>
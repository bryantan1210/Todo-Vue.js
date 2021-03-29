<template>
  <div class="container">
    <Navbar />
    <div class="container">
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/Home" class="text-dark">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/Lihat" class="text-dark">Library</router-link>
          </li>
        </ol>
      </nav>
    </div>
    <div class="container">
      <div class="col md-4">
        <form class="mt-2" v-on:submit.prevent>
          <div class="form-group">
            <label for="isi">Masukan Note</label>
            <input
              type="text"
              class="form-control"
              v-model="masuk.note"
            />
            <label for="isi">Masukan Tanggal</label>
            <input
              type="date"
              class="form-control"
              v-model="masuk.tanggal"
            />
          </div>
          <div class="container">
            <div class="row mt-4">
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <div class="col md-2">
                  <button class="btn btn-primary me-md-2" type="button">
                    Back
                  </button>
                </div>
                <div class="col md-2">
                  <button class="btn btn-primary" type="button" @click="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from 'axios';

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data(){
    return{
      note:{},
      masuk:{},
    };
  },
  methods:{
    setNote(data){
      this.note = data;
    },
    submit(){
      if(this.masuk.note){
        axios
        .post("http://localhost:3000/notes",this.masuk)
        .then(()=>{
          this.$router.push({path: "/Sukses" })
          this.$toast.success("Success!",{
            type:"success",
            position: "top-right",
            duration:3000,
            dismiddable: true,
          })
        })
        .catch((error)=> console.log(error) )
      }
      else{
        this.$toast.error("Error!", {
                    type: "error",
                    position: "top-right",
                    duration:3000,
                    dismissible: true,
      });
    }
  },
  },
};
</script>

<style>
</style>

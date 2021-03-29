<template>
  <div class="container">
    <Navbar />
    <div class="row">
        <div class="col">
          <h2>
            My
            <strong>Note</strong>
          </h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Note</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(note, index) in notes" :key="note.id">
                  <th>{{index+1}}</th>
                  <td>{{note.tanggal}}</td>
                <td>{{note.note}}</td>
                <td align="left" class="text-danger">
                    <b-icon-trash @click="hapusNote(note.id)"></b-icon-trash>
                  </td>
                </tr>
              </tbody>
              </table>
          </div>
          <div class="container">
            <router-link to="/Home"><button type="submit" class="btn btn-success float-right">
              Tambah
            </button></router-link>
          </div>
        </div>
    </div>

  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";


export default {
  name: "Lihat",
  components: {
    Navbar,
  },
  data(){
    return{
      notes: []
    };
  },
  methods: {
    setNotes(data){
      this.notes = data;
    },
    hapusNote(id){
      axios
      .delete("http://localhost:3000/notes/" + id )
      .then(()=> {
        this.$toast.error("Berhasil Hapus!", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
          // Update Data
          axios
            .get("http://localhost:3000/notes")
            .then((response) => this.setNotes(response.data))
            .catch((error) => console.log(error));

      })
      .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/notes")
      .then((response) => this.setNotes(response.data))
      .catch((error) => console.log(error));
  },
  
  }
</script>

<style>
</style>
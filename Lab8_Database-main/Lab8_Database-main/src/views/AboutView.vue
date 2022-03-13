<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="addData()">เพิ่มข้อมูล</button>
    <button @click="readData()">อ่านข้อมูล</button>
    <p>{{ csDoc }}</p>
    <input type="text" v-model="fname" />
  </div>
</template>

<script>
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../plugins/firebaseinit";

export default {
  data() {
    return {
      csDoc: [],
      fname: "",
    };
  },

  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "csmju"), {
          first: this.fname,
          middle: "Golf",
          born: 1912,
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "csmju"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        //this.csDoc.push(doc.data());
        this.csDoc.push({ id: doc.id, data: doc.data() });
      });
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

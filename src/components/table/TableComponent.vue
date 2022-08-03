<template>
  <table class="w-full border-2 mt-10">
        <ModalComponent />
    <tr>
      <th class="border-2 h-12 bg-slate-300">Nome</th>
      <th class="border-2 bg-slate-300">Gender</th>
      <th class="border-2 bg-slate-300">Birth</th>
      <th class="border-2 bg-slate-300">Actions</th>
    </tr>
    <tr
      v-for="dataAllPeoples in dataAllPeople"
      :key="dataAllPeoples"
      class="border-2 h-8"
    >
      <td class="border-2">{{ dataAllPeoples.name.first }}</td>
      <td class="border-2">{{ dataAllPeoples.gender }}</td>
      <td class="border-2">{{ dataAllPeoples.dob.age }}</td>
      <td class="border-2">
        <button
          @click="commitOpenModal(dataAllPeoples)"
          class="bg-slate-300 px-2 rounded color-red">View</button>
      </td>
    </tr>
  </table>
</template>

<script>
import ModalComponent from '../modal/ModalComponent.vue';

export default {
  data() {
    return {
      toggleModal: true,
    };
  },
  computed: {
    dataAllPeople() {
      return this.$store.state.allPeoples;
    },
  },
  components: {
    ModalComponent,
  },
  methods: {
    commitOpenModal(data) {
      this.$store.commit('SET_TOGGLEMODAL', this.toggleModal);
      this.$store.commit('SET_INFOMODAL', data);
      console.log(data);
    },
    // listItems(items, pageActual, limitItems) {
    //   const result = [];
    //   return result;
    // },
  },
  mounted() {},
};
</script>

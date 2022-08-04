<template>
  <div class="mt-10">
    <table class="w-full border-2 h-auto">
      <ModalComponent />
      <tr>
        <th class="border-2 h-12 bg-slate-300">Name</th>
        <th class="border-2 bg-slate-300">Gender</th>
        <th class="border-2 bg-slate-300">Birth</th>
        <th class="border-2 bg-slate-300">Nacionality</th>
        <th class="border-2 bg-slate-300">Actions</th>
      </tr>
      <tr v-for="pagesApi in pagesApi" :key="pagesApi" class="border-2 h-8">
        <td class="border-2">{{ pagesApi.name.first }}</td>
        <td class="border-2">{{ pagesApi.gender }}</td>
        <td class="border-2">{{ stringSlice(pagesApi.dob.date) }}</td>
        <td class="border-2">{{pagesApi.nat}}</td>
        <td class="border-2">
          <button @click="commitOpenModal(pagesApi)" class="bg-slate-300 px-2 rounded color-red">
            View
          </button>
        </td>
      </tr>
    </table>
    <div class="flex">
      <button
        @click="previousPage()"
        class="w-1/2 h-8 flex items-center justify-center hover:bg-[#f2f4f5] mt-5">
        <h3 class="font-sans font-medium">Prevent</h3>
      </button>

      <button
        @click="NextPage()"
        class="w-1/2 h-8 flex items-center justify-center hover:bg-[#f2f4f5] mt-5">
        <img class="w-10" src="../../assets/refresh.png" alt="" />
        <h3 class="font-sans font-medium">Load More...</h3>
      </button>
    </div>
  </div>
</template>

<script>
import ModalComponent from '../modal/ModalComponent.vue';

export default {
  data() {
    return {
      toggleModal: true,
      stepPages: 1,
    };
  },
  computed: {
    // Puxa todos os usuários do estado global (VUEX)
    dataAllPeople() {
      return this.$store.state.allPeoples;
    },

    pagesApi() {
      // Cria método de paginação de pacientes
      const newPageArray = this.peoplesFilterByCategory.slice(
        9 * (this.stepPages - 1),
        9 * this.stepPages,
      );
      return newPageArray;
    },
    // Filtra pacientes
    PeopleFiltered() {
      let arrayFiltered = [];

      arrayFiltered = this.dataAllPeople.filter(
        (item) => item.name.first.toLowerCase().indexOf(this.valueText.toLowerCase()) > -1
        || item.nat.toLowerCase().indexOf(this.valueText.toLowerCase()) > -1,
      );

      return arrayFiltered;
    },
    // Filtra pacientes por Gender
    peoplesFilterByCategory() {
      // const filteredArray = [];

      if (this.valueSelect !== null) {
        const newArrayCategory = this.PeopleFiltered.filter(
          (element) => element.gender === this.valueSelect,
        );
        return newArrayCategory;
      }
      return this.PeopleFiltered;
    },
  },
  components: {
    ModalComponent,
  },
  methods: {
    // Seta mutation que abre modal no VUEX
    commitOpenModal(data) {
      this.$store.commit('SET_TOGGLEMODAL', this.toggleModal);
      this.$store.commit('SET_INFOMODAL', data);
    },
    // Corta os dados de data que vem do backend
    stringSlice(arg) {
      const stringSliced = arg.substring(0, 10);
      return stringSliced;
    },
    // Volta página
    previousPage() {
      if (this.stepPages > 1) {
        this.stepPages -= 1;
      }
    },
    // Passa página
    NextPage() {
      // eslint-disable-next-line max-len
      if (this.pagesApi.length >= 9 && this.dataAllPeople.length / (this.stepPages * 9) > 1) {
        this.stepPages += 1;
      }
    },
  },
  props: ['valueText', 'valueSelect'],
};
</script>

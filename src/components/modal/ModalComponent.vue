<template>
  <div>
    <div
      class="fixed
      overflow-x-hidden
      overflow-y-auto
      inset-0 flex
      justify-center
      items-center
      z-50"
      v-if="toggleModalOpen">
      <div class="relative mx-auto w-auto max-w-2xl">
        <div class="bg-white w-auto pb-8 rounded-lg">
          <section
          class="w-full bg-[#CBD5E1] rounded-t-lg flex justify-center items-center py-8 mb-10">
            <img class="w-24 rounded-full" :src='infoModal.picture.large' alt="Imagem de usuário">
          </section>
          <section
          class="w-full
          pr-16
          pl-4
          pb-8
          lg:w-[100vw]
          flex
          flex-col
          items-initial
          items-start
          text-justify"
          >
            <p>Nome completo: {{infoModal.name.first}}</p>
            <p>Email: {{infoModal.email}}</p>
            <p>Gênero: {{infoModal.gender}}</p>
            <p>Data de nascimento: {{infoModal.dob.age}}</p>
            <p>Telefone: {{infoModal.cell}}</p>
            <p>Nacionalidade: {{infoModal.nat}}</p>
            <p>
              Endereço: {{infoModal.location.street.name}},
              {{infoModal.location.street.number}},
              {{infoModal.location.city}}
              {{infoModal.location.country}}
            </p>
            <p>ID: {{infoModal.login.uuid}}</p>
            <p>URL: http://localhost:8080</p>
          </section>
          <button
            @click="commitCloseModal()"
            class="rounded bg-[#CBD5E1] px-5 mt-1 py-4">Close</button>
        </div>
      </div>
    </div>
    <div
     v-if="toggleModalOpen"
     class="absolute z-40 inset-0 opacity-25 bg-black"/>
  </div>
</template>

<script>
export default {
  name: 'modalComponent',
  data() {
    return {
      toggleModalClosed: false,
    };
  },
  computed: {
    // Retorna o estado que o modal deverá estar
    toggleModalOpen() {
      return this.$store.state.toggleModal;
    },
    // Pega as infos que deveram estar no modal diretamente do estado global (Vuex)
    infoModal() {
      return this.$store.state.modalInfos;
    },
  },
  methods: {
    // Essa function seta o estado global no vuex como falso, fechando o modal
    commitCloseModal() {
      this.$store.commit('SET_TOGGLEMODAL', this.toggleModalClosed);
    },
  },
};
</script>

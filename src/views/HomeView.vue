<template>
  <div class="min-h-[93vh] flex flex-col items-center justify-center bg-[#F7F9FA]">

    <section
    class="w-auto flex flex-col h-auto justify-between  lg:w-2/5 lg:md:auto">

      <div class=" w-full h-auto flex flex-col justify-between">
        <h2 class="text-[#768088] text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quas? Assumenda laudantium
          consequatur, officia consequatur, officia
        </h2>

        <div
          class="
            w-full h-10
            border-2
            flex
            justify-between
            items-center
          border-[#9EADBA]
            bg-white
            rounded
            pr-4
            mb-2
            "
        >
          <label class="w-full h-full" for="search">
            <input
              v-model="inputTextValue"
              class=
              "outline-none
                active:outline-none
                focus:outline-none
                h-full
                w-full
                px-4
                font-sans
                font-medium
                "
                placeholder="Searching" name="search" type="text" />
          </label>
          <img class="w-6" src="../assets/search-user.png" alt="" />
        </div>

        <div class="w-full flex justify-start items-center">
          <label for="select">
          <select v-model="selected" class=" w-20 rounded border-2 border-[#9EADBA]">
            <option
              v-for="option in options"
              :key="option.id"
              :value="option.value">{{option.gender}}</option>
          </select>
          </label>
        </div>

      </div>

        <TableComponent :valueSelect='selected' :valueText='inputTextValue'/>

    </section>
  </div>
</template>

<script>
import TableComponent from '../components/table/TableComponent.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      inputTextValue: '',
      selected: null,
      options: [
        {
          gender: 'Todos',
          value: null,
          id: null,
        },
        {
          gender: 'Male',
          value: 'male',
          id: 1,
        },
        {
          gender: 'Female',
          value: 'female',
          id: 2,
        },
      ],
    };
  },
  components: {
    TableComponent,
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('getPeoples');
  },
};
</script>

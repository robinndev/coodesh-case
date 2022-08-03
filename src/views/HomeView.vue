<template>
  <div class="h-[93vh] flex flex-col items-center justify-center bg-[#F7F9FA]">

    <section class="w-auto h-auto flex flex-col justify-between  lg:w-2/5 lg:md:auto ">

      <div class=" w-full h-[12vh] flex flex-col justify-between">
        <h2 class="text-[#768088] text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quas? Assumenda laudantium
          consequatur, officia consequatur, officia
        </h2>

        <div
          class="
          bg-white
            w-full h-12
            border-2
            flex
            justify-between
            items-center
          border-[#9EADBA]
            rounded
            pr-4
            "
        >
          <label class="w-full h-full" for="search">
            <input class="
              outline-none
              active:outline-none
              focus:outline-none
              h-full
              w-full
              px-4
              font-sans
              font-medium
              " placeholder="Searching" name="search" type="text" />
          </label>
          <img class="w-6" src="../assets/search-user.png" alt="" />
        </div>
      </div>

        <TableComponent/>

        <div class="w-full h-8 flex items-center justify-center hover:bg-[#f2f4f5] mt-5">
          <img class="w-10" src="../assets/refresh.png" alt="">
          <h3 class="font-sans font-medium">Load More...</h3>
        </div>
    </section>
  </div>
</template>

<script>
import TableComponent from '../components/table/TableComponent.vue';

export default {
  name: 'HomeView',
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

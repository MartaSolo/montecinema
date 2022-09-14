<script>
import { defineComponent, ref } from "vue";
import { formattedWeekdayAndDate } from "@/assets/utils/formattedDate.js";

export default defineComponent({
  name: "MovieScreeningDate",
  props: {
    datetime: {
      type: String,
    },
  },

  setup(props) {
    const date = ref(formattedWeekdayAndDate(new Date(props.datetime)));
    const hour = ref(props.datetime.substring(11, 16));
    return { date, hour };
  },
});
</script>

<template>
  <div class="movie__datetime">{{ date }} - {{ hour }}</div>
</template>

<style lang="scss" scoped>
.movie__datetime {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 0.9rem;
  color: $colorRedBittersweet;
  padding: 8px 16px;
  background-color: $colorRedWispPink;
  border-radius: 24px;
  @include mediumScreen {
    font-size: 1rem;
  }
}
</style>

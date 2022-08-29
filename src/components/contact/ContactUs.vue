<script>
import { defineComponent } from "vue";
import Location from "@/assets/images/location.svg";
import Email from "@/assets/images/email.svg";
import Phone from "@/assets/images/phone.svg";

export default defineComponent({
  name: "ContactUs",
  components: { Location, Email, Phone },
  data() {
    return {};
  },
});
</script>

<template>
  <div class="contact__details">
    <div class="contact__adress">
      <div class="contact__adress-icon">
        <Location />
      </div>
      <div class="contact__adress-details">
        <div class="contact__adress-name">Monterail Sp. z o.o.</div>
        <div class="contact__adress-street">ul. Oławska 27-29</div>
        <div class="contact__adress-city">50-123 Wrocław</div>
        <div class="contact__adress-country">Poland</div>
      </div>
    </div>
    <div class="contact__email">
      <div class="contact__email-icon">
        <Email />
      </div>
      <div class="contact__email-adress">hello@monterail.com</div>
    </div>

    <div class="contact__phone">
      <div class="contact__phone-icon">
        <Phone />
      </div>
      <div class="contact__phone-number">+48 533 600 136</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact__details {
  font-family: $fontSecondary;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 32px;
  letter-spacing: 0.015em;
  padding: 24px;
  border-radius: 8px;
  background-color: $colorGreyAthens;
  @include mediumScreen {
    width: 600px;
    height: 400px;
    padding: 64px;
    border-radius: 24px;
  }
}
.contact__adress,
.contact__email,
.contact__phone {
  display: flex;
  gap: 16px;
}
.contact__adress,
.contact__email {
  padding-bottom: 40px;
}
</style>

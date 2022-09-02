<script>
import { defineComponent } from "vue";
import BaseButton from "@/components/global/BaseButton.vue";
import TwitterIcon from "@/assets/images/twitter.svg";
import FacebookIcon from "@/assets/images/facebook.svg";
import LinkedInIcon from "@/assets/images/linkedin.svg";
import InstagramIcon from "@/assets/images/instagram.svg";
import GitHubIcon from "@/assets/images/github.svg";
import BehanceIcon from "@/assets/images/be.svg";
import DribbleIcon from "@/assets/images/dribble.svg";

export default defineComponent({
  name: "ContactSocialMedia",
  components: {
    BaseButton,
    TwitterIcon,
    FacebookIcon,
    LinkedInIcon,
    InstagramIcon,
    GitHubIcon,
    BehanceIcon,
    DribbleIcon,
  },
});
</script>

<template>
  <BaseButton
    href="#"
    target="blank"
    rel="noopener"
    class="contact__page-button"
    aria-label="twitter profile"
    ><TwitterIcon
  /></BaseButton>

  <BaseButton
    href="#"
    target="blank"
    rel="noopener"
    class="contact__page-button"
    aria-label="facebook profile"
    ><FacebookIcon
  /></BaseButton>

  <BaseButton
    href="#"
    target="blank"
    rel="noopener"
    class="contact__page-button"
    aria-label="linkedin profile"
    ><LinkedInIcon
  /></BaseButton>

  <BaseButton
    href="#"
    target="blank"
    rel="noopener"
    class="contact__page-button"
    aria-label="instagram profile"
    ><InstagramIcon
  /></BaseButton>

  <BaseButton
    href="#"
    target="blank"
    rel="noopener"
    class="contact__page-button"
    aria-label="github profile"
    ><GitHubIcon
  /></BaseButton>

  <BaseButton
    href="#"
    target="blank"
    rel="noopener"
    class="contact__page-button"
    aria-label="behance profile"
    ><BehanceIcon
  /></BaseButton>

  <BaseButton
    href="#"
    target="blank"
    rel="noopener"
    class="contact__page-button"
    aria-label="dribble profile"
    ><DribbleIcon
  /></BaseButton>
</template>

<style lang="scss" scoped></style>

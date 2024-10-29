<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Header",
});
</script>

<template>
  <header class="banner">
    <div class="apresentacao">
      <RouterLink to="/">
        <img alt="Logo Menu Chef" class="logo" src="../assets/images/chef.png" />
      </RouterLink>

      <p class="cabecalho-lg frase-cabecalho">
        <span class="texto-verde">Descubra os sabores inesquecíveis</span>
        que só existem na nossa cozinha!
      </p>

      <p class="subtitulo-lg">
        Veja o nosso cardápio e faça a reserva da sua mesa em apenas alguns segundos!
      </p>
    </div>

    <img src="../assets/images/foto-banner.png"
      alt="Foto de uma mulher cozinhando com uma bacia de vidro nas mãos. Ela está sorrindo e esta apoiando um celular entre seu rosto e ombro"
      class="foto-banner">


  </header>
</template>

<style scoped>
.banner {
  padding: 4rem 7.5rem;
  color: var(--creme);

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
}

.logo {
  height: 12.5rem;
  margin-bottom: 3rem;
}

.frase-cabecalho {
  margin-bottom: 2rem;
}

.texto-verde {
  color: var(--verde-medio, #3D6D4A);
}

.foto-banner {
  width: 35rem;
}

@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem;
  }

  .foto-banner {
    width: min(100%, 21.25rem);
  }
}
</style>

<template>
  <div class="background-image">
    <div class="centered-div">
      <h1 class="title">SLEEPHERE ✨🛏️</h1>
      <h2 class="subtitle">Experience Local Life in Our Charming Accommodation</h2>
      <button class="centered-button">SHOP</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.background-image {
  background-image: url('/src/assets/Green.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
}

.centered-button {
  position: absolute;
  /* Changé de fixed à absolute pour positionner le bouton par rapport à la div */
  top: 80%;
  /* Ajustez ces valeurs pour positionner le bouton à l'endroit souhaité dans la div */
  left: 20%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 100px;
  font-size: 20px;
  border-radius: 50px / 25px;
}

.centered-div {
  position: fixed;
  top: 40%;
  /* Ajustez cette valeur pour déplacer la div plus bas sur la page */
  left: 40%;
  right: 60%;

  transform: translate(-50%, -50%);
  width: 65%;
  height: 70%;
  background-color: rgba(255, 255, 255, 0.7);
  
  border-radius: 20px;
  margin-top: 140px;
  /* Augmentez cette valeur pour ajouter plus d'espace entre le header et la div */
}
.title,
.subtitle {
  position: absolute;
  left: 20px;
  width: calc(100% - 40px);
  font-family: 'Hammersmith One', sans-serif;
  font-weight: bold;
  /* Rend le texte en gras */
  color: white;
  /* Rend le texte en blanc */
}

.title {
  top: 20%;
  font-size: 2em;
}

.subtitle {
  top: 30%;
  font-size: 1.5em;
}
</style>
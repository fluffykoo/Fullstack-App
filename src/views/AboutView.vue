<template>
  <div class="home-page">
    <nav class="navbar">
      <div class="logo">SleepHere</div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">About us</a></li>
      </ul>
    </nav>
    <div class="hero-section">
      <h1 class="headline">Live in Luxury</h1>
      <p class="subtext">Explore our upscale apartments for rent</p>
      <button class="cta-button">Learn More</button>
    </div>
    <div class="background-image">
      <!-- Replace with an elegant interior apartment image -->
      <img src="https://a0.muscache.com/im/pictures/47cb07f8-1aaa-472e-bb89-b08aef087c65.jpg?im_w=720"
        alt="Luxury Apartment Interior" />
    </div>
    <footer>
      <p>© 2023 SleepHere. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
/* Add your custom CSS styles here */
.home-page {
  font-family: Arial, sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
}

.hero-section {
  text-align: center;
  padding: 100px 0;
  background-color: #f9f9f9;
}

.headline {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subtext {
  font-size: 18px;
  color: #777;
}

.cta-button {
  background-color: #ff6600;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #e65c00;
}

.background-image img {
  width: 100%;
  height: auto;
}
</style>

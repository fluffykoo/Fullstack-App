<template>
  <div class="container text-center">
    <header class="header"></header>
    <div class="input-group mb-3">
      <input type="text" v-model="searchTerm" class="form-control" placeholder="Search for rooms" />
      <button class="btn btn-primary">Search</button>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="listing in filteredListings" :key="listing._id">
        <div class="card h-100">
          <router-link :to="`/listing/${listing._id}`">
            <img :src="listing.image" class="card-img-top img-fluid listing-image" :alt="listing.title" />
          </router-link>
          <div class="card-body">
            <h5 class="card-title">{{ listing.title }}</h5>
            <p class="card-text">{{ listing.description }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated: 3 minutes ago</small>
            <button @click="openModal(listing)" class="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
  
        <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="cartModalLabel">Item Added to Cart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                The item has been added to your cart.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue Shopping</button>
                <button type="button" class="btn btn-primary">Go to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
import axios from 'axios';

export default {
  name: "HomeView",
  data() {
    return {
      searchTerm: "",
      listings: [],
    };
  },
  computed: {
    filteredListings() {
      return this.listings.filter((listing) =>
        listing.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    openModal(listing) {
      this.$store.dispatch('addToCart', listing);
      $('#cartModal').modal('show'); // Show the modal
    },
    async fetchListings() {
      try {
        const response = await axios.get('http://localhost:3000/houses');
        this.listings = Array.isArray(response.data)
          ? response.data.filter(listing => listing._id)
          : [];
      } catch (error) {
        console.error(error);
        this.listings = [];
      }
    },
  },
  mounted() {
    this.fetchListings();
  },
};
</script>

   


    <style scoped>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f7f7f7;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }

      .header {
        background-color: #ffffff;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .listing-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
    </style>

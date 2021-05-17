<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="titles">Title</h1>
      <div class="post-details">
        <div class="post-detail">Updated On:</div>
        <div class="post-detail">Written By:</div>
      </div>
      <p>Content:</p>
    </section>
    <section class="post-feedback">
      <p>Mail me <a href="mailto:sijoyss@gmail.com" />sijoyss@gmail.com</p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

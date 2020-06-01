<template>
  <section class="hero container">
    <div class="hero__info-wrapper">
      <h2 class="heading-primary hero--title-1 u-cp u-mb-m">
        Create
      </h2>
      <h2 class="heading-primary hero--title-2 u-cs u-mb-m">
        Share
      </h2>
      <h2 class="heading-primary hero--title-3 u-ct">
        Review
      </h2>
      <article class="hero__info">
        <p class="paragraph">
          Quizzery it's easy. Simply create your quizzs and share them with
          other people.
        </p>
        <br />
        <div class="hero__actions">
          <router-link to="/quizzes" class="btn btn--full"
            >Start now</router-link>
          <router-link class="btn btn--outline" to="/login">Login</router-link>
        </div>
      </article>
    </div>
    <div class="hero__img-wrapper">
      <img src="@/assets/img/hero.svg" alt="Hero Image" class="hero__img" />
    </div>
  </section>
</template>

<template>
  <div class="p-home">
    <h1 class="p-home__heading">Ua Elements Vue</h1>

    <p>Привіт. Це сторінка майбутньої Української бібліотеки UI компонентів для Vue 3.</p>

    <p>Поки що тут порожньо (ну майже), але надіюсь вже скоро (якщо я не здуюсь) тут появиться багато компонентів які ти будеш юзати в своїх проектах.</p>

    <h3><span>Женя, якщо ти читаєш це... </span></h3>

    <h2 class="p-home__sub-heading">Моя мета:</h2>

    <ul>
      <li>Хочу створити класну бібліотеку яку як я, так і мої колеги зможуть юзати, і в думках повторювати: <br> <span>"О Боже яка вона ПІЗ**А!! ЧОМУ ВІН НЕ ЗРОБИВ ЦЕ РАНІШЕ?"</span></li>

      <li>Просувати Український продукт, щоб наші колеги по всьому світу також її використовували і знали які Українці круті...</li>
    </ul>

    <h2 class="p-home__sub-heading">Чи потрібна мені допомога?</h2>

    <p class="p-home__help">ОДНОЗНАЧНО!!!</p>

    <p>Мені не вистачає крутого дизайнера, який би зробив КРАСОТУ.</p>

    <div class="p-home__help-list">
      <div>
        <p>Якщо ти знаєш Figma і готовий попрацювати за ідею?</p>
        <p>Якщо ще вчишся і шукаєш новий досвіт?</p>
        <p>Потрібно новий проект в портфоліо?</p>
        <p>Ти просто крутий?</p>
      </div>

      <p class="p-home__welcome">WELCOME!!!</p>
    </div>

    <div class="p-home__sponsor">
      Якщо раптом хочеш <span>проспонсорувати</span> це діло, я точно НЕ морознусь !!!
    </div>
    
    <div class="p-home__instagram">
      <span>Знайди мене в Інсті:</span>
      
      <a href="https://www.instagram.com/zarva.life/" target="_blank">
        <i class="lab la-instagram" />
        <span>Roman Zarva</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.p-home {
  h3 {
    text-align: right;
    position: relative;
    cursor: pointer;

    span {
      transform-origin: center right;
      display: block;
      transition: all .2s;
    }

    &::before {
      content: 'КРАСАВЧИК!!!';
      color: red;
      position: absolute;
      right: 0;
      top: 0;
      opacity: 0;
      transform: scale(.5);
      transform-origin: right center;
      transition: all .7s;
    }

    &:hover {
      span {
        transform: translateX(-150px) scale(.5);
      }

      &::before {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  &__heading {
    margin-bottom: 3rem;
  }

  &__sub-heading {
    margin-top: 3rem;
    margin-left: 5rem;
  }

  ul {
    margin-left: 7rem;

    li {
      margin-bottom: 1rem;
      line-height: 2rem;

      span {
        letter-spacing: .25rem;
      }
    }
  }

  &__help {
    margin-left: 21rem;
    letter-spacing: .25rem;

    & + p {
      margin-left: 30rem;
    }

    &-list {
      display: flex;
      align-items: center;
      justify-content: center;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 1rem;

        p {
          margin: .25rem 0;
        }
      }
    }
  }

  &__welcome {
    margin: 0;
    font-size: 8rem;
    line-height: 1;
  }

  &__instagram {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      margin-left: 1rem;
      display: flex;
      align-items: center;
      text-decoration: none;
      text-transform: uppercase;
      color: #ff1694;
      transition: all .5s;

      i {
        font-size: 1.5rem;
      }

      &:hover {
        opacity: .3;
      }
    }
  }

  &__sponsor {
    text-align: center;
    margin: 2rem;
    font-size: 1.5rem;

    span {
      text-transform: uppercase;
      letter-spacing: .15rem;
    }
  }
}
</style>
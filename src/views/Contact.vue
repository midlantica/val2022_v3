<template>
  <main>
    <section>
      <h2>Send an email</h2>
      <p>
        <a href="mailto:valentina@valentinadesign.com">valentina@valentinadesign.com</a>
      </p>
      <h3>Or simply use this form</h3>
      <!-- Begin myContactForm.com Form HTML -->
      <form
        id="contactForm"
        name="contactForm"
        method="post"
        action="http://www.mycontactform.com/sendform/sendform.php"
      >
        <div class="formInput">
          <label>name<span class="asterisk">*</span></label>
          <input name="q1" type="text" id="q1" value="" size="12" maxlength="40" />
        </div>

        <div class="formInput">
          <label>email<span class="asterisk">*</span></label>
          <input name="email" type="email" id="email" size="12" maxlength="100" required />
        </div>

        <div class="formInput">
          <label>message&nbsp;</label>
          <textarea name="q2" id="q2" />
        </div>

        <div class="formInput">
          <button name="submit" type="submit" value="Submit">submit</button>
          <label><span class="asterisk">*</span>required</label>
        </div>

        <input name="user" type="hidden" id="user" value="valentina_73" />
        <input name="formid" type="hidden" id="formid" value="135001" />
        <input
          name="subject"
          type="hidden"
          id="subject"
          value="ValentinaDesign.com Contact Email"
        />
      </form>
      <!-- End myContactForm.com Form HTML -->
    </section>

    <aside>
      <Social />
    </aside>
  </main>
</template>

<script setup>
  import Social from "../components/Social.vue"
</script>

<style lang="scss" scoped>
  h2 {
    font-size: 1.2em;
    margin-bottom: 0.2em;
  }

  h3 {
    font-size: 1em;
    margin: 1.5em 0 0.25em;
  }

  p {
    // font-family: Register;
    // color: $grey;
    font-size: 1em;
    letter-spacing: 0.065em;
    margin: 0 0.5em 0 0;
    padding: 0;
  }

  #contactForm {
    margin-bottom: 3em;
    max-width: 500px;

    @include breakpoint($SmMd) {
      max-width: 450px;
    }

    @include breakpoint($sm) {
      max-width: 400px;
    }

    .formInput {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: flex-start;
      flex-grow: 1;
      padding-top: 0.75em;

      &:nth-of-type(4) {
        display: flex;
        flex-direction: column;

        button {
          margin: 0.5em 0em 0 4em;

          @include breakpoint($SmMd) {
            margin-left: 0;
          }

          @include breakpoint($sm) {
            margin-left: 0em;
          }
        }

        label {
          // order: 2;
          margin: 0.75em 0.5em 0 5em;
          font-size: 0.9em;
          // align-self: flex-end;
          flex-basis: 0;
          // color: lighten($grey, 30);

          @include breakpoint($SmMd) {
            margin: 0.75em 0.5em 0 0em;
          }

          @include breakpoint($md) {
            margin: 0.75em 0.5em 0 0em;
          }
        }
      }

      label {
        font-size: 1em;
        font-family: $copy-bold;
        color: $purple;
        height: 1.4em;
        flex-basis: 5em;
      }

      .asterisk {
        color: red;
        margin: 0 0 0 0;
      }

      input {
        height: 1.7em;
        align-items: flex-start;
        // flex-basis: 60%;
        // flex-grow: 1;
        background: #fffbf2;
      }

      input,
      select,
      textarea {
        font-size: 1em;
        font-family: $copy-bold;
        color: $purple;
        border: 1px dashed $purple;
        // margin: .5em 0 0 0;
        // width: 100%;
        background: #fffbf2;
        padding: 0 0 0 0.3em;
        outline: none;
        flex-basis: 70%;
        border-radius: 6px;

        @include breakpoint($SmMd) {
          flex-basis: 100%;
        }

        @include breakpoint($sm) {
          flex-basis: 100%;
        }
      }

      textarea {
        padding: 0.3em 0 0 0.3em;
      }

      button {
        background: $orange;
        border: none;
        font-family: $copy;
        color: white;
        font-size: 1.25em;
        letter-spacing: 0.05em;
        padding: 0.25em 0.5em 0.25em 0.5em;
        cursor: pointer;
        border-radius: 6px;
        @include clearfix;

        &:hover {
          background-color: $purple;
        }
      }
    }
  }

  [data-theme="dark"] label {
    color: $white !important;
  }

[data-theme="dark"] button {
    color: $black !important;
    background: $green !important;
  }

  // [data-theme="dark"] input,
  // [data-theme="dark"] select,
  // [data-theme="dark"] textarea {

  // }
</style>

<template>
  <div id="app">
    <div class="eg-slideshow">
      <slide>
        <h2>Improving on Express</h2>
        <ul class="unbulleted center-list left-align white-card">
          <li class="who-am-i">Brian Schiller</li>
          <li>@bgschiller</li>
          <li>brianschiller.com</li>
        </ul>
      </slide>
      <slide :steps="2">
        <h2>Find the bug!</h2>
        <div v-if="step < 2" v-html="uncaughtError" />
        <div v-if="step >= 2" v-html="uncaughtErrorWithWarning" />
      </slide>
      <slide>
        <h2>Too many ways to "return"</h2>
        <ul>
          <li>call <code>next()</code> to pass down the chain</li>
          <li>call <code>next(err)</code> to pass along to next error handler</li>
          <li>send a response directly</li>
          <li>return without sending a response</li>
          <li>throw an error</li>
        </ul>
      </slide>
      <slide>
        <Wishlist :step="1" />
      </slide>
      <slide :steps="2">
        <h2>Find the bug!</h2>
        <div v-if="step < 2" v-html="missingEarlyReturn" />
        <div v-if="step >= 2" v-html="includingEarlyReturn" />
      </slide>
      <slide>
        <Wishlist :step="2" />
      </slide>
      <slide :steps="2">
        <h2>Find the bug!</h2>
        <div v-if="step < 2" v-html="orderDependentCallbacks" />
        <div v-if="step >= 2" v-html="orderDependentCallbacksFlipped" />
      </slide>
      <slide>
        <Wishlist :step="3" />
      </slide>
      <slide :steps="3">
        <h2>Find the bug!</h2>
        <div v-if="step === 1" v-html="forgottenAuth" />
        <div v-if="step === 2" v-html="forgottenAuthFixed" />
        <div v-if="step === 3" v-html="forgottenAuthQuestionFace" />
      </slide>
      <slide :steps="4">
        <h3>How is <code>req.user</code> typed?</h3>
        <div v-if="step >= 2" v-html="passportDeclaration" />
        <p v-if="step >= 3">
          Through the magic of"Declaration merging"
          the <code>.user</code> prop  is added to
          every express <code>Request</code>
        </p>
        <p v-if="step >= 4"><strong>
          EVEN THE ONES NOT USING PASSPORT MIDDLEWARE!
        </strong></p>
      </slide>
      <slide>
        <Wishlist :step="4" />
      </slide>
      <slide :steps="4">
        <h2 v-if="step <= 3" class="floating-header">
          Type-altering middleware
        </h2>
        <div class="by-halves">
          <div v-visible="step >= 2" v-html="typeAlteringMiddlewareA" />
          <div v-visible="step >= 3" v-html="typeAlteringMiddlewareB" />
        </div>
        <div v-if="step >= 4"
          class="img-contain"
          style="
            background-image: url(/improving-on-express/images/thats-impossible.jpg);
            margin-top: -100vh;
            position: fixed;
          "
        />
      </slide>
      <slide>
        <h2 class="title-only">Is that such a big deal?</h2>
      </slide>
      <slide :steps="3">
        <div v-if="step < 3" v-html="mustOwnTicketExpressUnderlined" />
        <div v-if="step === 3" v-html="mustOwnTicketExpress" />
        <div v-if="step >= 2" v-html="ticketDeclarationMerge" />
      </slide>
      <slide>
        <Wishlist :step="5" />
      </slide>
      <slide :steps="4">
        <h2>Plan of Attack</h2>
        <ul class="unbulleted left-align center-list">
          <li v-if="step >= 2">Replace method calls on `res` with return values</li>
          <li v-if="step >= 3">Change callbacks to Promises</li>
          <li v-if="step >= 4">Catch errors and translate them into responses</li>
        </ul>
      </slide>
      <slide>
        <h2 class="title-only">Let's get to work</h2>
      </slide>
      <slide :steps="7">
        <h3 :class="{ 'floating-header': step <= 3 }">Replace method calls with return values</h3>
        <div class="by-halves" v-if="step <= 3">
          <div v-visible="step >= 2" v-html="methodCallsToRes" />
          <div v-visible="step >= 3" v-html="returnValues" />
        </div>
        <div v-if="step === 4" v-html="returnValues" />
        <div v-if="step === 5" v-html="returnValuesTypeChecking" />
        <div v-if="step === 6" v-html="returnValuesTypeCheckingUnderlined" />
        <p v-if="step === 6">
          Property '<code>body</code>' is missing in type
          '<code>{ status_code: number; headers: { 'content-type': string; }; }</code>'
          but required in type '<code>Resp</code>'
        </p>
        <div v-if="step === 7" v-html="returnValuesHelperFunction" />
      </slide>
    </div>
  </div>
</template>

<script>
import eagle from 'eagle.js';
import uncaughtError from './code-snippets/01-uncaught-error.html';
import uncaughtErrorWithWarning from './code-snippets/02-uncaught-error-underlined.html';
import missingEarlyReturn from './code-snippets/03-missing-early-return.html';
import includingEarlyReturn from './code-snippets/04-including-early-return.html';
import orderDependentCallbacks from './code-snippets/05-order-dependent-callbacks.html';
import orderDependentCallbacksFlipped from './code-snippets/06-order-dependent-callbacks-flipped.html';
import forgottenAuth from './code-snippets/07-forgotten-auth.html';
import forgottenAuthFixed from './code-snippets/08-forgotten-auth-fixed.html';
import forgottenAuthQuestionFace from './code-snippets/09-forgotten-auth-question-face.html';
import passportDeclaration from './code-snippets/10-passport.d.html';
import typeAlteringMiddlewareA from './code-snippets/11-type-altering-middleware-a.html';
import typeAlteringMiddlewareB from './code-snippets/12-type-altering-middleware-b.html';
import mustOwnTicketExpressUnderlined from './code-snippets/13-must-own-ticket-express-underlined.html';
import mustOwnTicketExpress from './code-snippets/14-must-own-ticket-express.html';
import ticketDeclarationMerge from './code-snippets/15-ticket-declaration-merge.html';
import methodCallsToRes from './code-snippets/16-method-calls-to-res.html';
import returnValues from './code-snippets/17-return-values.html';
import returnValuesTypeChecking from './code-snippets/18-return-values-typechecking.html';
import returnValuesTypeCheckingUnderlined from './code-snippets/19-return-values-typechecking-underlined.html';
import returnValuesHelperFunction from './code-snippets/20-return-values-helper.html';

import Wishlist from './components/Wishlist';


export default {
  name: 'app',
  mixins: [eagle.slideshow],
  components: {
    Wishlist,
  },
  data() {
    return {
      uncaughtError,
      uncaughtErrorWithWarning,
      missingEarlyReturn,
      includingEarlyReturn,
      orderDependentCallbacks,
      orderDependentCallbacksFlipped,
      forgottenAuth,
      forgottenAuthFixed,
      forgottenAuthQuestionFace,
      passportDeclaration,
      typeAlteringMiddlewareA,
      typeAlteringMiddlewareB,
      mustOwnTicketExpressUnderlined,
      mustOwnTicketExpress,
      ticketDeclarationMerge,
      methodCallsToRes,
      returnValues,
      returnValuesTypeChecking,
      returnValuesTypeCheckingUnderlined,
      returnValuesHelperFunction,
    };
  },
  methods: {
    updateSlides: function () {
      this.currentSlideIndex = +this.$route.params.slide
      const step = +this.$route.params.step;
      this.$nextTick(() => {
        this.step = step;
      })
    },
    updateURL: function () {
      this.$router.push(`/${this.currentSlideIndex}/${this.step}`)
    }
  },
  mounted() {
    this.updateSlides();
  },
  watch: {
    step: 'updateURL',
    currentSlideIndex: 'updateURL',
  },
};
</script>

<style lang="scss">
@import './code-snippets/highlight-styles.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.eg-slideshow {
  background-image: url(/improving-on-express/images/linen_texture_four_times.jpg);
}
.eg-slide {
  background-color: none;
}

.white-card {
  padding: 20px;
  background: white;
  border-radius: 4px;
  box-shadow: 8px 8px 10px rgb(80, 80, 80);

}

ul.white-card:not(.unbulleted) {
  padding-left: 60px;
}


.blockquote {
  justify-self: center;
  .attribution {
    width: 100%;
    text-align: right;
  }
}

.floating-header {
  position: absolute;
  width: 100%;
}
.credit {
  position: absolute;
  width: fit-content;
  right: 20px;
  bottom: 20px;
}
.by-halves {
  display: flex;
  height: 100vh;
  justify-content: space-around;
  > * {
    width: 45vw;
    margin: 0 auto;
    align-self: center;
  }

  ul.left-align.unbulleted {
    margin-left: 63px;
  }
  ul {
    width: 37vw;
  }
}

.who-am-i {
  font-weight: bold;
}


.highlight pre {
  background-color: #f0f3f3;
  text-align: left;
  width: fit-content;
  margin: 0 auto;
  padding: 20px;
}

body {
  margin: 0;
}
.vertical-center {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100vh;
}
p {
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
}
.unbulleted {
  list-style: none;
  max-width: 90vw;
  li {
    margin-bottom: 1rem;
  }
}
.center-list {
  width: fit-content;
  margin-left: auto;
  margin-right:auto;
  text-align: left;
}
.img-contain {
  background-repeat: no-repeat;
  background-position: center;
  background-size:contain;
  width: 100vw;
  height: 100vh;
  max-width: 100vw !important;
}

.stricken {
  text-decoration: line-through;
}

.larger {
  font-size: 3rem;
}
.left-align {
  text-align: left;
}
.title-only {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
}
.white-back {
  background-color: white;
}
.squiggly {
  border-bottom:2px dotted red;
  display: inline-block;
  position: relative;
}

.squiggly:after {
  content: '';
  width: 100%;
  border-bottom:2px dotted red;
  position: absolute;
  bottom:-1px;
  left: -2px;
}
</style>

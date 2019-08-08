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
          Through the magic of declaration merging
          the <code>.user</code> prop  is added to
          every express <code>Request</code>
        </p>
        <p v-if="step >= 4"><strong>
          even the ones not using passport middleware!
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
            background-image: url(/improving-on-express/images/against-the-rules.jpg);
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
        <PlanOfAttack :step="step" />
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
      <slide :steps="2">
        <h3 class="floating-header">
          Handlers eat
          <code>Connection</code>s
          <span v-visible="step == 2">
            and return
            <code>Resp</code>s
          </span>
        </h3>
        <div class="by-halves">
          <div v-html="connType" />
          <div v-visible="step==2" v-html="respType" />
        </div>
      </slide>
      <slide :steps="11">
        <h3>Change callbacks to Promises</h3>
        <div v-if="step === 2" v-html="requiresLoginMiddlewareA" />
        <div v-if="step === 3" v-html="requiresLoginMiddlewareB" />
        <div v-if="step === 4" v-html="requiresLoginMiddlewareC" />
        <div v-if="step === 5" v-html="requiresLoginMiddlewareD" />
        <div v-if="step === 6" v-html="requiresLoginMiddlewareE" />
        <div v-if="step === 7" v-html="requiresLoginMiddlewareF" />
        <div v-if="step === 8" v-html="requiresLoginMiddlewareG" />
        <div v-if="step === 9" v-html="requiresLoginMiddlewareH" />
        <div v-if="step === 10" v-html="requiresLoginMiddlewareI" />
        <div v-if="step === 11" v-html="requiresLoginMiddlewareJ" />
      </slide>
      <slide :steps="8">
        <h3 v-if="step===1">Whoa, things got complicated!</h3>
        <div v-if="step === 1" v-html="requiresLoginMiddlewareJ" />
        <h3 v-if="step === 2">Remember, types are optional</h3>
        <div v-if="step === 2" v-html="requiresLoginMiddlewareH" />
        <h3 v-if="step >= 3">But look what they buy us</h3>
        <div v-if="step === 3" v-html="requiresLoginClient" />
        <div v-if="step === 4" v-html="requiresLoginClientUnderlined" />
        <p v-if="step === 4">
          Property '<code>user</code>' does not exist on type '<code>Connection</code>'
        </p>
        <div v-if="step >= 5" v-html="requiresLoginClientFixed" />
        <div v-if="step === 6" v-html="requiresLoginClientRegister" />
        <div v-if="step === 7" v-html="requiresLoginClientRegisterUnderlined" />
        <p v-if="step === 7">
          Type '<code>Connection</code>' is not assignable to type '<code>Connection &amp; WithUser</code>'.
        </p>
        <p v-if="step === 7">
          Property '<code>user</code>' is missing in type '<code>Connection</code>' but required in type '<code>WithUser</code>'.
        </p>
        <div v-if="step === 8" v-html="requiresLoginClientRegisterFixed" />
      </slide>
      <slide>
        <PlanOfAttack :step="4" just-errors/>
      </slide>
      <slide :steps="5">
        <h3>Errors → Responses</h3>
<div class="highlight"><pre><span></span><span class="kr">export</span> <span class="kr">class</span> <span class="nx">ControllerError</span> <span class="kr">extends</span> <span class="nb">Error</span> <span class="p">{</span> <span class="cm">/* ... */</span> <span class="p">}</span>

<span class="kr">export</span> <span class="kd">function</span> <span class="nx">errorHandler</span><span class="p">(</span><span class="nx">err</span>: <span class="kt">any</span><span class="p">)</span><span class="o">:</span> <span class="nx">Resp</span> <span class="p">{</span>
  <span class="k">if</span> <span class="p">(</span><span class="nx">err</span> <span class="k">instanceof</span> <span class="nx">ControllerError</span><span class="p">)</span> <span class="k">return</span> <span class="nx">err</span><span class="p">.</span><span class="nx">toResponse</span><span class="p">();</span>
  <span v-if="step >= 2"><span class="c1">// all other errors</span></span>
  <span v-if="step >= 2"><span class="k">return</span> <span class="p">{</span></span>
  <span v-if="step >= 2">  <span class="nx">body</span><span class="o">:</span> <span class="s1">&#39;an error occurred&#39;</span><span class="p">,</span></span>
  <span v-if="step >= 2">  <span class="nx">status_code</span>: <span class="kt">500</span><span class="p">,</span></span>
  <span v-if="step >= 2">  <span class="nx">headers</span><span class="o">:</span> <span class="p">{},</span></span>
  <span v-if="step >= 2"><span class="p">};</span></span>
<span class="p">}</span>

<span v-visible="step >= 3"><span class="kr">export</span> <span class="kr">class</span> <span class="nx">NotAuthorized</span> <span class="kr">extends</span> <span class="nx">ControllerError</span> <span class="p">{</span> <span class="cm">/* ... */</span> <span class="p">}</span></span>
<span v-visible="step >= 4"><span class="kr">export</span> <span class="kr">class</span> <span class="nx">Forbidden</span> <span class="kr">extends</span> <span class="nx">ControllerError</span> <span class="p">{</span> <span class="cm">/* ... */</span> <span class="p">}</span></span>
<span v-visible="step >= 5"><span class="kr">export</span> <span class="kr">class</span> <span class="nx">ClientError</span> <span class="kr">extends</span> <span class="nx">ControllerError</span> <span class="p">{</span> <span class="cm">/* ... */</span> <span class="p">}</span></span></pre></div>
      </slide>
      <slide :steps="4">
        <h2>What's this thing do?</h2>
        <div v-if="step === 1" v-html="someMiddleware" />
        <div v-if="step === 2" v-html="someMiddlewareTyped" />
        <div v-if="step === 3" v-html="someMiddlewareUser" />
        <div v-if="step === 4" v-html="someMiddlewareDbFetch" />
      </slide>
      <slide>
        <h1 class="title-only">The Payoff</h1>
      </slide>
      <slide :steps="10">
        <div class="title-only">
          <div :class="{ highlight: true, 'muted-comment': step > 1 }">
<pre><span></span><span v-if="step > 2"><span class="nx">app</span><span class="p">.</span><span class="nx">patch</span><span class="p">(</span></span>
  <span class="c1">// to update a talk, send a PATCH request</span>
  <span class="s1">&#39;/talks/:id&#39;</span><span class="p">,</span> <span class="c1">// to this endpoint</span>
  <span v-if="step > 3"><span class="nx">withConnection</span><span class="p">(</span></span>
    <span class="c1">// you must be logged in</span>
    <span v-if="step > 3"><span class="nx">conn</span> <span class="o">=&gt;</span></span> <span v-if="step > 4"><span class="nx">requiresLogin</span><span class="p">(</span><span class="nx">conn</span><span class="p">)</span></span>
      <span class="c1">// Look to the :id in the url params for which talk</span>
      <span v-if="step > 5"><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">itemIdFromUrl</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">))</span></span>
      <span class="c1">// you must own the talk in question</span>
      <span v-if="step > 6"><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">mustOwnTalk</span><span class="p">)</span></span>
      <span class="c1">// request body must match this interface</span>
      <span v-if="step > 7"><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">decodeBody</span><span class="p">(</span><span class="nx">CreateUpdateTalkV</span><span class="p">))</span></span>
      <span class="c1">// update the database</span>
      <span v-if="step > 8"><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">talkCrud</span><span class="p">.</span><span class="nx">update</span><span class="p">)</span></span>
      <span class="c1">// respond with json</span>
      <span v-if="step > 9"><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">jsonFrom</span><span class="p">(</span><span class="s1">&#39;row&#39;</span><span class="p">)),</span></span>
  <span v-if="step > 2"><span class="p">),</span></span>
<span v-if="step > 2"><span class="p">);</span></span>
</pre></div>
        </div>
      </slide>
      <slide :steps="3">
        <h2>Drawbacks</h2>
        <ul class="left-align center-list">
          <li v-if="step >= 2">Type signatures are kinda complicated</li>
          <li v-if="step >= 3">What's this <code>fascia</code> thing?</li>
        </ul>
      </slide>
      <slide>
        <h2>Future Work</h2>
        <ul class="left-align center-list">
          <li>Better docs</li>
          <li>Solidify API</li>
        </ul>
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
import requiresLoginMiddlewareA from './code-snippets/21-a-requires-login-middleware.html';
import requiresLoginMiddlewareB from './code-snippets/21-b-requires-login-middleware.html';
import requiresLoginMiddlewareC from './code-snippets/21-c-requires-login-middleware.html';
import requiresLoginMiddlewareD from './code-snippets/21-d-requires-login-middleware.html';
import requiresLoginMiddlewareE from './code-snippets/21-e-requires-login-middleware.html';
import requiresLoginMiddlewareF from './code-snippets/21-f-requires-login-middleware.html';
import requiresLoginMiddlewareG from './code-snippets/21-g-requires-login-middleware.html';
import requiresLoginMiddlewareH from './code-snippets/21-h-requires-login-middleware.html';
import requiresLoginMiddlewareI from './code-snippets/21-i-requires-login-middleware.html';
import requiresLoginMiddlewareJ from './code-snippets/21-j-requires-login-middleware.html';
import requiresLoginClient from './code-snippets/22-a-requires-login-client.html';
import requiresLoginClientUnderlined from './code-snippets/22-b-requires-login-client-underlined.html';
import requiresLoginClientFixed from './code-snippets/22-c-requires-login-client-fixed.html';
import requiresLoginClientRegister from './code-snippets/22-d-requires-login-client-register.html';
import requiresLoginClientRegisterUnderlined from './code-snippets/22-e-requires-login-client-register-underlined.html';
import requiresLoginClientRegisterFixed from './code-snippets/22-f-requires-login-client-register-fixed.html';
import someMiddleware from './code-snippets/23-a-some-middleware.html';
import someMiddlewareTyped from './code-snippets/23-b-some-middleware.html';
import someMiddlewareUser from './code-snippets/23-c-some-middleware-with-user.html';
import someMiddlewareDbFetch from './code-snippets/23-d-some-middleware-db-fetch.html';
import respType from './code-snippets/24-resp-type.html';
import connType from './code-snippets/24-conn-type.html';
import payoff from './code-snippets/26-payoff.html';

import Wishlist from './components/Wishlist';
import PlanOfAttack from './components/PlanOfAttack';

export default {
  name: 'app',
  mixins: [eagle.slideshow],
  components: { Wishlist, PlanOfAttack },
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
      requiresLoginMiddlewareA,
      requiresLoginMiddlewareB,
      requiresLoginMiddlewareC,
      requiresLoginMiddlewareD,
      requiresLoginMiddlewareE,
      requiresLoginMiddlewareF,
      requiresLoginMiddlewareG,
      requiresLoginMiddlewareH,
      requiresLoginMiddlewareI,
      requiresLoginMiddlewareJ,
      requiresLoginClient,
      requiresLoginClientUnderlined,
      requiresLoginClientFixed,
      requiresLoginClientRegister,
      requiresLoginClientRegisterUnderlined,
      requiresLoginClientRegisterFixed,
      someMiddleware,
      someMiddlewareTyped,
      someMiddlewareUser,
      someMiddlewareDbFetch,
      respType,
      connType,
      payoff,
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
.highlight {
  margin-bottom: 20px;
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

.highlight.muted-comment .c1 {
  color: grey;
}
</style>

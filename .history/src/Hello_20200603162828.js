import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <section class="mw7 center">
                <h2 class="athelas ph3 ph0-l">News</h2>
                <article class="pv4 bt bb b--black-10 ph3 ph0-l">
                    <div class="flex flex-column flex-row-ns">
                        <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                            <h1 class="f3 athelas mt0 lh-title">Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction</h1>
                            <p class="f5 f4-l lh-copy athelas">
                                The tech giant says it is ready to begin planning a quantum
                                computer, a powerful cpu machine that relies on subatomic particles instead
                                of transistors.
        </p>
                        </div>
                        <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                            <img src="http://mrmrs.github.io/photos/cpu.jpg" class="db" alt="Photo of a dimly lit room with a computer interface terminal.">
      </div>
                        </div>
                        <p class="f6 lh-copy gray mv0">By <span class="ttu">Robin Darnell</span></p>
                        <time class="f6 db gray">Nov. 21, 2016</time>
  </article>
                    <article class="pv4 bb b--black-10 ph3 ph0-l">
                        <div class="flex flex-column flex-row-ns">
                            <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                                <h1 class="f3 athelas mt0 lh-title">A whale takes up residence in a large body of water</h1>
                                <p class="f5 f4-l lh-copy athelas">
                                    This giant of a whale says it is ready to begin planning a new
                                    swim later this afternoon. A powerful mammal that relies on fish and plankton instead
                                    of hamburgers.
        </p>
                            </div>
                            <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src="http://mrmrs.github.io/photos/whale.jpg" class="db" alt="Photo of a whale's tale coming crashing out of the water.">
      </div>
                            </div>
                            <p class="f6 lh-copy gray mv0">By <span class="ttu">Katherine Grant</span></p>
                            <time class="f6 db gray">Nov. 19, 2016</time>
  </article>
                        <article class="pv4 bb b--black-10 ph3 ph0-l">
                            <div class="flex flex-column flex-row-ns">
                                <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                                    <h1 class="f3 athelas mt0 lh-title">
                                        ‘We Couldn’t Believe Our Eyes’: A Lost World of Vinyl Is Found
        </h1>
                                    <p class="f5 f4-l lh-copy athelas">
                                        Archaeologists have found more than 40 tons of vinyl records,
                                        some more than a five years old, shedding light on early hipster
                                        trends.
        </p>
                                </div>
                                <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                                    <img src="http://mrmrs.github.io/photos/warehouse.jpg" class="db" alt="Photo of a warehouse with stacked shelves.">
      </div>
                                </div>
                                <p class="f6 lh-copy gray mv0">By <span class="ttu">Imelda Clancy</span></p>
                                <time class="f6 db gray">Nov. 19, 2016</time>
  </article>
</section>
        );
    }
}

export default Hello;
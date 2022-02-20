'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">address-book documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-699c2122a1b29c2c7fce080103f4abacabf4d67e657fb6eaf173f4363e6abc5e74ae6c5218f1da09f30c74e3ebbb7295a50f343ecf7e21c706a3c137cfc06dbf"' : 'data-target="#xs-controllers-links-module-AppModule-699c2122a1b29c2c7fce080103f4abacabf4d67e657fb6eaf173f4363e6abc5e74ae6c5218f1da09f30c74e3ebbb7295a50f343ecf7e21c706a3c137cfc06dbf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-699c2122a1b29c2c7fce080103f4abacabf4d67e657fb6eaf173f4363e6abc5e74ae6c5218f1da09f30c74e3ebbb7295a50f343ecf7e21c706a3c137cfc06dbf"' :
                                            'id="xs-controllers-links-module-AppModule-699c2122a1b29c2c7fce080103f4abacabf4d67e657fb6eaf173f4363e6abc5e74ae6c5218f1da09f30c74e3ebbb7295a50f343ecf7e21c706a3c137cfc06dbf"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-699c2122a1b29c2c7fce080103f4abacabf4d67e657fb6eaf173f4363e6abc5e74ae6c5218f1da09f30c74e3ebbb7295a50f343ecf7e21c706a3c137cfc06dbf"' : 'data-target="#xs-injectables-links-module-AppModule-699c2122a1b29c2c7fce080103f4abacabf4d67e657fb6eaf173f4363e6abc5e74ae6c5218f1da09f30c74e3ebbb7295a50f343ecf7e21c706a3c137cfc06dbf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-699c2122a1b29c2c7fce080103f4abacabf4d67e657fb6eaf173f4363e6abc5e74ae6c5218f1da09f30c74e3ebbb7295a50f343ecf7e21c706a3c137cfc06dbf"' :
                                        'id="xs-injectables-links-module-AppModule-699c2122a1b29c2c7fce080103f4abacabf4d67e657fb6eaf173f4363e6abc5e74ae6c5218f1da09f30c74e3ebbb7295a50f343ecf7e21c706a3c137cfc06dbf"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContactModule-7842fd398fc618ab4465c4664a1a265bd22e5d83a30c6fef673425de1226a0fff040a5d7ada20d1fc92eeb1c4c6f051dcf1f69a0b4485a1082117d92cb634e7c"' : 'data-target="#xs-controllers-links-module-ContactModule-7842fd398fc618ab4465c4664a1a265bd22e5d83a30c6fef673425de1226a0fff040a5d7ada20d1fc92eeb1c4c6f051dcf1f69a0b4485a1082117d92cb634e7c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactModule-7842fd398fc618ab4465c4664a1a265bd22e5d83a30c6fef673425de1226a0fff040a5d7ada20d1fc92eeb1c4c6f051dcf1f69a0b4485a1082117d92cb634e7c"' :
                                            'id="xs-controllers-links-module-ContactModule-7842fd398fc618ab4465c4664a1a265bd22e5d83a30c6fef673425de1226a0fff040a5d7ada20d1fc92eeb1c4c6f051dcf1f69a0b4485a1082117d92cb634e7c"' }>
                                            <li class="link">
                                                <a href="controllers/ContactController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContactModule-7842fd398fc618ab4465c4664a1a265bd22e5d83a30c6fef673425de1226a0fff040a5d7ada20d1fc92eeb1c4c6f051dcf1f69a0b4485a1082117d92cb634e7c"' : 'data-target="#xs-injectables-links-module-ContactModule-7842fd398fc618ab4465c4664a1a265bd22e5d83a30c6fef673425de1226a0fff040a5d7ada20d1fc92eeb1c4c6f051dcf1f69a0b4485a1082117d92cb634e7c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactModule-7842fd398fc618ab4465c4664a1a265bd22e5d83a30c6fef673425de1226a0fff040a5d7ada20d1fc92eeb1c4c6f051dcf1f69a0b4485a1082117d92cb634e7c"' :
                                        'id="xs-injectables-links-module-ContactModule-7842fd398fc618ab4465c4664a1a265bd22e5d83a30c6fef673425de1226a0fff040a5d7ada20d1fc92eeb1c4c6f051dcf1f69a0b4485a1082117d92cb634e7c"' }>
                                        <li class="link">
                                            <a href="injectables/ContactService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-5ba5df67a4fe6855b01c9fa0a0d6d767f1ece435ae6bdc5cae10ac228a55af04263385be1826f3245259a18b9a1fe8d67681e38130240ceaa45c7be44a78675e"' : 'data-target="#xs-controllers-links-module-UserModule-5ba5df67a4fe6855b01c9fa0a0d6d767f1ece435ae6bdc5cae10ac228a55af04263385be1826f3245259a18b9a1fe8d67681e38130240ceaa45c7be44a78675e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-5ba5df67a4fe6855b01c9fa0a0d6d767f1ece435ae6bdc5cae10ac228a55af04263385be1826f3245259a18b9a1fe8d67681e38130240ceaa45c7be44a78675e"' :
                                            'id="xs-controllers-links-module-UserModule-5ba5df67a4fe6855b01c9fa0a0d6d767f1ece435ae6bdc5cae10ac228a55af04263385be1826f3245259a18b9a1fe8d67681e38130240ceaa45c7be44a78675e"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-5ba5df67a4fe6855b01c9fa0a0d6d767f1ece435ae6bdc5cae10ac228a55af04263385be1826f3245259a18b9a1fe8d67681e38130240ceaa45c7be44a78675e"' : 'data-target="#xs-injectables-links-module-UserModule-5ba5df67a4fe6855b01c9fa0a0d6d767f1ece435ae6bdc5cae10ac228a55af04263385be1826f3245259a18b9a1fe8d67681e38130240ceaa45c7be44a78675e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-5ba5df67a4fe6855b01c9fa0a0d6d767f1ece435ae6bdc5cae10ac228a55af04263385be1826f3245259a18b9a1fe8d67681e38130240ceaa45c7be44a78675e"' :
                                        'id="xs-injectables-links-module-UserModule-5ba5df67a4fe6855b01c9fa0a0d6d767f1ece435ae6bdc5cae10ac228a55af04263385be1826f3245259a18b9a1fe8d67681e38130240ceaa45c7be44a78675e"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ContactDto.html" data-type="entity-link" >ContactDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthMiddleware.html" data-type="entity-link" >AuthMiddleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Contact.html" data-type="entity-link" >Contact</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
## Address Book
#### Dependency
<ul>
<li>NodeJS (v16.14.0 or newer)</li>
<li>npm (v8.3.1 or newer)</li>
<li>mongodb</li>
</ul>

#### Installation
<ol>
<li>clone the repository</li>
<li>install node dependency run `npm i`</li>
<li>run start script `npm start`</li>
</ol>

### API Documentation
<div class="tab-pane fade active in" id="c-info">
            <p class="comment">
                </p><h3>Prefix</h3>
            <p></p>
            <p class="comment">
                <code>api/contact</code>
            </p>
            <section>
    <h3 id="index">Index</h3>
    <table class="table table-sm table-bordered index-table">
        <tbody>
                <tr>
                    <td class="col-md-4">
                        <h6><b>Methods</b></h6>
                    </td>
                </tr>
                <tr>
                    <td class="col-md-4">
                        <ul class="index-list">
                            <li>
                                    <span class="modifier">Async</span>
                                <a href="#addMultipleContact">addMultipleContact</a>
                            </li>
                            <li>
                                    <span class="modifier">Async</span>
                                <a href="#addSingleContact">addSingleContact</a>
                            </li>
                            <li>
                                    <span class="modifier">Async</span>
                                <a href="#deleteContact">deleteContact</a>
                            </li>
                            <li>
                                    <span class="modifier">Async</span>
                                <a href="#filterContact">filterContact</a>
                            </li>
                            <li>
                                    <span class="modifier">Async</span>
                                <a href="#getAllContact">getAllContact</a>
                            </li>
                            <li>
                                    <span class="modifier">Async</span>
                                <a href="#getSingleContact">getSingleContact</a>
                            </li>
                            <li>
                                    <span class="modifier">Async</span>
                                <a href="#updateContact">updateContact</a>
                            </li>
                        </ul>
                    </td>
                </tr>
        </tbody>
    </table></section>
<section>
    <h3 id="methods">
        Methods
    </h3>
    <table class="table table-sm table-bordered">
        <tbody>
            <tr>
                <td class="col-md-4">
                    <a name="addMultipleContact"></a>
                    <span class="name">
                        <span class="modifier">Async</span>
                        <span><b>addMultipleContact</b></span>
                        <a href="#addMultipleContact"><span class="icon ion-ios-link"></span></a>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <span class="modifier-icon icon ion-ios-reset"></span>
                    <code>addMultipleContact(data: <a href="../interfaces/Contact.html" target="_self">ContactDto[]</a>)</code>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <b>Decorators : </b>
                    <br>
                    <code>@Post('add-multiple')<br></code>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <div class="io-line">Defined in <a href="" data-line="25" class="link-to-prism">src/contact/contact.controller.ts:25</a></div>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <div class="io-description">
                        <b>Parameters :</b>
                        <table class="params">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Optional</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>data</td>
                                    <td>
                                                <code><a href="../interfaces/Contact.html" target="_self">ContactDto[]</a></code>
                                    </td>
                                    <td>
                                        No
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                    </div>
                    <div class="io-description">
                        <b>Returns : </b>    <code>Promise&lt;literal type&gt;</code>
                    </div>
                    <div class="io-description">
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="table table-sm table-bordered">
        <tbody>
            <tr>
                <td class="col-md-4">
                    <a name="addSingleContact"></a>
                    <span class="name">
                        <span class="modifier">Async</span>
                        <span><b>addSingleContact</b></span>
                        <a href="#addSingleContact"><span class="icon ion-ios-link"></span></a>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <span class="modifier-icon icon ion-ios-reset"></span>
                    <code>addSingleContact(data: <a href="../interfaces/Contact.html" target="_self">ContactDto</a>)</code>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <b>Decorators : </b>
                    <br>
                    <code>@Post('add')<br></code>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <div class="io-line">Defined in <a href="" data-line="20" class="link-to-prism">src/contact/contact.controller.ts:20</a></div>
                </td>
            </tr>
   <tr>
                <td class="col-md-4">
                    <div class="io-description">
                        <b>Parameters :</b>
                        <table class="params">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Optional</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>data</td>
                                    <td>
                                                <code><a href="../interfaces/Contact.html" target="_self">ContactDto</a></code>
                                    </td>
                                    <td>
                                        No
                                    </td>
</tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                    </div>
                    <div class="io-description">
                        <b>Returns : </b>    <code>Promise&lt;string&gt;</code>
                    </div>
                    <div class="io-description">
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="table table-sm table-bordered">
        <tbody>
            <tr>
                <td class="col-md-4">
                    <a name="deleteContact"></a>
                    <span class="name">
                        <span class="modifier">Async</span>
                        <span><b>deleteContact</b></span>
                        <a href="#deleteContact"><span class="icon ion-ios-link"></span></a>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <span class="modifier-icon icon ion-ios-reset"></span>
                    <code>deleteContact(id: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string" target="_blank">string</a>)</code>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <b>Decorators : </b>
                    <br>
                    <code>@Delete('delete/:id')<br></code>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <div class="io-line">Defined in <a href="" data-line="65" class="link-to-prism">src/contact/contact.controller.ts:65</a></div>
                </td>
            </tr>
    <tr>
                <td class="col-md-4">
                    <div class="io-description">
                        <b>Parameters :</b>
                        <table class="params">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Optional</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>
                                                <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string" target="_blank">string</a></code>
                                    </td>
                                    <td>
                                        No
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                    </div>
                    <div class="io-description">
                        <b>Returns : </b>    <code>Promise&lt;literal type&gt;</code>
                    </div>
                    <div class="io-description">
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="table table-sm table-bordered">
        <tbody>
            <tr>
                <td class="col-md-4">
                    <a name="filterContact"></a>
                    <span class="name">
                        <span class="modifier">Async</span>
                        <span><b>filterContact</b></span>
                        <a href="#filterContact"><span class="icon ion-ios-link"></span></a>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <span class="modifier-icon icon ion-ios-reset"></span>
                    <code>filterContact(name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string" target="_blank">string</a>, contact: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number" target="_blank">number</a>)</code>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <b>Decorators : </b>
                    <br>
                    <code>@Get('filter')<br></code>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <div class="io-line">Defined in <a href="" data-line="45" class="link-to-prism">src/contact/contact.controller.ts:45</a></div>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <div class="io-description">
                        <b>Parameters :</b>
                        <table class="params">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Optional</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>name</td>
                                    <td>
                                                <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string" target="_blank">string</a></code>
                                    </td>
                                    <td>
                                        No
                                    </td>
                                </tr>
                                <tr>
                                    <td>contact</td>
                                    <td>
                                                <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number" target="_blank">number</a></code>
                                    </td>                                    <td>
                                        No
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                    </div>
                    <div class="io-description">
                        <b>Returns : </b>        <code><a href="../interfaces/Contact.html" target="_self">Promise&lt;Contact[]&gt;</a></code>                    </div>
                    <div class="io-description">                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="table table-sm table-bordered">
        <tbody>
            <tr>
                <td class="col-md-4">
                    <a name="getAllContact"></a>
                    <span class="name">
                        <span class="modifier">Async</span>
                        <span><b>getAllContact</b></span>
                        <a href="#getAllContact"><span class="icon ion-ios-link"></span></a>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <span class="modifier-icon icon ion-ios-reset"></span>
                    <code>getAllContact(limit: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number" target="_blank">number</a>, page: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number" target="_blank">number</a>)</code>
                </td>
            </tr>            <tr>
                <td class="col-md-4">
                    <b>Decorators : </b>
                    <br>
                    <code>@Get('all')<br></code>
                </td>
            </tr>            <tr>
                <td class="col-md-4">
                    <div class="io-line">Defined in <a href="" data-line="37" class="link-to-prism">src/contact/contact.controller.ts:37</a></div>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">                    <div class="io-description">
                        <b>Parameters :</b>                        <table class="params">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Optional</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>limit</td>
                                    <td>
                                                <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number" target="_blank">number</a></code>
                                    </td>                                    <td>
                                        No
                                    </td>
                                </tr>
                                <tr>
                                    <td>page</td>
                                    <td>
                                                <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number" target="_blank">number</a></code>
                                    </td>                                    <td>
                                        No
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                    </div>
                    <div class="io-description">
                        <b>Returns : </b>        <code><a href="../interfaces/Contact.html" target="_self">Promise&lt;Contact[]&gt;</a></code>                    </div>
                    <div class="io-description">                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="table table-sm table-bordered">
        <tbody>
            <tr>
                <td class="col-md-4">
                    <a name="getSingleContact"></a>
                    <span class="name">
                        <span class="modifier">Async</span>
                        <span><b>getSingleContact</b></span>
                        <a href="#getSingleContact"><span class="icon ion-ios-link"></span></a>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <span class="modifier-icon icon ion-ios-reset"></span>
                    <code>getSingleContact(id: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string" target="_blank">string</a>)</code>
                </td>
            </tr>            <tr>
                <td class="col-md-4">
                    <b>Decorators : </b>
                    <br>
                    <code>@Get(':id')<br></code>
                </td>
            </tr>            <tr>
                <td class="col-md-4">
                    <div class="io-line">Defined in <a href="" data-line="32" class="link-to-prism">src/contact/contact.controller.ts:32</a></div>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">                    <div class="io-description">
                        <b>Parameters :</b>                        <table class="params">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Optional</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>
                                                <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string" target="_blank">string</a></code>
                                    </td>                                    <td>
                                        No
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                    </div>
                    <div class="io-description">
                        <b>Returns : </b>        <code><a href="../interfaces/Contact.html" target="_self">Promise&lt;Contact&gt;</a></code>                    </div>
                    <div class="io-description">                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="table table-sm table-bordered">
        <tbody>
            <tr>
                <td class="col-md-4">
                    <a name="updateContact"></a>
                    <span class="name">
                        <span class="modifier">Async</span>
                        <span><b>updateContact</b></span>
                        <a href="#updateContact"><span class="icon ion-ios-link"></span></a>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <span class="modifier-icon icon ion-ios-reset"></span>
                    <code>updateContact(data: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object" target="_blank">object</a>, id: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string" target="_blank">string</a>)</code>
                </td>
            </tr>            <tr>
                <td class="col-md-4">
                    <b>Decorators : </b>
                    <br>
                    <code>@Put('update/:id')<br></code>
                </td>
            </tr>            <tr>
                <td class="col-md-4">
                    <div class="io-line">Defined in <a href="" data-line="55" class="link-to-prism">src/contact/contact.controller.ts:55</a></div>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">                    <div class="io-description">
                        <b>Parameters :</b>                        <table class="params">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Optional</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>data</td>
                                    <td>
                                                <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object" target="_blank">object</a></code>
                                    </td>                                    <td>
                                        No
                                    </td>
                                </tr>
                                <tr>
                                    <td>id</td>
                                    <td>
                                                <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string" target="_blank">string</a></code>
                                    </td>                                    <td>
                                        No
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                    </div>
                    <div class="io-description">
                        <b>Returns : </b>    <code>Promise&lt;literal type&gt;</code>                    </div>
                    <div class="io-description">                    </div>
                </td>
            </tr>
        </tbody>
    </table></section>   
</div></div></div>

<hr>
<div class="tab-content">
    <div class="tab-pane fade active in" id="c-info">
            <p class="comment">
                </p><h3>Prefix</h3>
            <p></p>
            <p class="comment">
                <code>api/auth</code>
            </p>
            <section>
    <h3 id="index">Index</h3>
    <table class="table table-sm table-bordered index-table">
        <tbody>
               <tr>
                    <td class="col-md-4">
                        <h6><b>Methods</b></h6>
                    </td>
                </tr>
                <tr>
                    <td class="col-md-4">
                        <ul class="index-list">
                            <li>
                                    <span class="modifier">Async</span>
                                <a href="#login">login</a>
                            </li>
                            <li>
                                    <span class="modifier">Async</span>
                                <a href="#register">register</a>
                            </li>
                        </ul>
                    </td>
                </tr>
        </tbody>
    </table>
</section>
            <section>
    <h3 id="methods">
        Methods
    </h3>
    <table class="table table-sm table-bordered">
        <tbody>
            <tr>
                <td class="col-md-4">
                    <a name="login"></a>
                    <span class="name">
                        <span class="modifier">Async</span>
                        <span><b>login</b></span>
                        <a href="#login"><span class="icon ion-ios-link"></span></a>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <span class="modifier-icon icon ion-ios-reset"></span>
                    <code>login(data: <a href="../interfaces/User.html" target="_self">UserDto</a>)</code>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <b>Decorators : </b>
                    <br>
                    <code>@Post('login')<br></code>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <div class="io-line">Defined in <a href="" data-line="14" class="link-to-prism">src/user/user.controller.ts:14</a></div>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <div class="io-description">
                        <b>Parameters :</b>
                        <table class="params">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Optional</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>data</td>
                                    <td>
                                                <code><a href="../interfaces/User.html" target="_self">UserDto</a></code>
                                    </td>
                                    <td>
                                        No
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                    </div>
                    <div class="io-description">
                        <b>Returns : </b>    <code>unknown</code>
                    </div>
                    <div class="io-description">
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="table table-sm table-bordered">
        <tbody>
            <tr>
                <td class="col-md-4">
                    <a name="register"></a>
                    <span class="name">
                        <span class="modifier">Async</span>
                        <span><b>register</b></span>
                        <a href="#register"><span class="icon ion-ios-link"></span></a>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <span class="modifier-icon icon ion-ios-reset"></span>
                    <code>register(data: <a href="../interfaces/User.html" target="_self">UserDto</a>)</code>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <b>Decorators : </b>
                    <br>
                    <code>@Post('register')<br></code>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <div class="io-line">Defined in <a href="" data-line="9" class="link-to-prism">src/user/user.controller.ts:9</a></div>
                </td>
            </tr>
            <tr>
                <td class="col-md-4">
                    <div class="io-description">
                        <b>Parameters :</b>
                        <table class="params">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Optional</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>data</td>
                                    <td>
                                                <code><a href="../interfaces/User.html" target="_self">UserDto</a></code>
                                    </td>
                                    <td>
                                        No
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                    </div>
                    <div class="io-description">
                        <b>Returns : </b>    <code>unknown</code>
                    </div>
                    <div class="io-description">
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</section>    
</div>
</div>

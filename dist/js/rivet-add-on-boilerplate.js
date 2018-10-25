/*! rivet-add-on-boilerplate - @version 0.1.0-alpha

* Copyright (c) 2018 TheTrustees of Indiana University

* Licensed under the BSD 3-Clause License.

* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*   1.Redistributions of source code must retain the above copyright notice,
*   this list of conditions and the following disclaimer.
*   2.Redistributions in binary form must reproduce the above copyright notice,
*   this list of conditions and the following disclaimer in the documentation
*   and/or other materials provided with the distribution.
*   3.Neither the name of the copyright holder nor the names of its
*   contributors may be used to endorse or promote products derived from
*   this software without specific prior written permission.
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.MyComponent = factory());
}(this, (function () { 'use strict';

  var init = function init() {
    console.log('Rivet Add-on Boilerplate!');
  };

  /**
   * Export the methods you want to make public inside of this object.
   */
  var rivetAddOnBoilerplate = { init: init };

  return rivetAddOnBoilerplate;

})));
//# sourceMappingURL=rivet-add-on-boilerplate.js.map

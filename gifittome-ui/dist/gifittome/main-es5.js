(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Sievers\Documents\NetBeansProjects\Siewares\gifittome\gifittome-ui\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** ws (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "1Lq6":
    /*!**********************************!*\
      !*** ./src/service/game/card.ts ***!
      \**********************************/

    /*! exports provided: Card */

    /***/
    function Lq6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Card", function () {
        return Card;
      });

      var Card = /*#__PURE__*/function () {
        function Card() {
          _classCallCheck(this, Card);

          this._value = '';
        }

        _createClass(Card, [{
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            this._value = value;
          }
        }]);

        return Card;
      }();
      /***/

    },

    /***/
    "3dBE":
    /*!************************************************************!*\
      !*** ./src/app/confirm-dialog/confirm-dialog.component.ts ***!
      \************************************************************/

    /*! exports provided: ConfirmDialogComponent, ConfirmDialogModel */

    /***/
    function dBE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
        return ConfirmDialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogModel", function () {
        return ConfirmDialogModel;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ConfirmDialogComponent = /*#__PURE__*/function () {
        function ConfirmDialogComponent(dialogRef, data) {
          _classCallCheck(this, ConfirmDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data; // Update view with given values

          this.title = data.title;
          this.message = data.message;
        }

        _createClass(ConfirmDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onConfirm",
          value: function onConfirm() {
            // Close the dialog, return true
            this.dialogRef.close(true);
          }
        }, {
          key: "onDismiss",
          value: function onDismiss() {
            // Close the dialog, return false
            this.dialogRef.close(false);
          }
        }]);

        return ConfirmDialogComponent;
      }();

      ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
        return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ConfirmDialogComponent,
        selectors: [["app-confirm-dialog"]],
        decls: 10,
        vars: 2,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "confirm-message"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function ConfirmDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
              return ctx.onConfirm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() {
              return ctx.onDismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        styles: [".confirm-message[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  letter-spacing: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6ImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tbWVzc2FnZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-confirm-dialog',
            templateUrl: './confirm-dialog.component.html',
            styleUrls: ['./confirm-dialog.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]
          }, {
            type: ConfirmDialogModel,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /**
       * Class to represent confirm dialog model.
       *
       * It has been kept here to keep it as part of shared component.
       */


      var ConfirmDialogModel = function ConfirmDialogModel(title, message) {
        _classCallCheck(this, ConfirmDialogModel);

        this.title = title;
        this.message = message;
      };
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        host: 'http://localhost:8082',
        websocket: 'http://localhost:8083'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CNEd":
    /*!**************************************************************!*\
      !*** ./src/service/card-selection/card-selection.service.ts ***!
      \**************************************************************/

    /*! exports provided: CardSelectionService */

    /***/
    function CNEd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardSelectionService", function () {
        return CardSelectionService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardSelectionService = /*#__PURE__*/function () {
        function CardSelectionService() {
          _classCallCheck(this, CardSelectionService);

          this.selectedCardIdx = -1;
        }

        _createClass(CardSelectionService, [{
          key: "cardClicked",
          value: function cardClicked(index) {
            if (this.getSelectedCardIdx() === index) {
              this.resetSelectedCardIdx();
            } else {
              this.setSelectedCardIdx(index);
            }
          }
        }, {
          key: "getSelectedCardIdx",
          value: function getSelectedCardIdx() {
            return this.selectedCardIdx;
          }
        }, {
          key: "setSelectedCardIdx",
          value: function setSelectedCardIdx(selectedCardIdx) {
            this.selectedCardIdx = selectedCardIdx;
          }
        }, {
          key: "resetSelectedCardIdx",
          value: function resetSelectedCardIdx() {
            this.selectedCardIdx = -1;
          }
        }, {
          key: "isCardSelected",
          value: function isCardSelected() {
            return this.getSelectedCardIdx() >= 0;
          }
        }]);

        return CardSelectionService;
      }();

      CardSelectionService.ɵfac = function CardSelectionService_Factory(t) {
        return new (t || CardSelectionService)();
      };

      CardSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CardSelectionService,
        factory: CardSelectionService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardSelectionService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ENeX":
    /*!********************************************************!*\
      !*** ./src/app/data-privacy/data-privacy.component.ts ***!
      \********************************************************/

    /*! exports provided: DataPrivacyComponent */

    /***/
    function ENeX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataPrivacyComponent", function () {
        return DataPrivacyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");

      var DataPrivacyComponent = /*#__PURE__*/function () {
        function DataPrivacyComponent() {
          _classCallCheck(this, DataPrivacyComponent);
        }

        _createClass(DataPrivacyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DataPrivacyComponent;
      }();

      DataPrivacyComponent.ɵfac = function DataPrivacyComponent_Factory(t) {
        return new (t || DataPrivacyComponent)();
      };

      DataPrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DataPrivacyComponent,
        selectors: [["app-data-privacy"]],
        decls: 198,
        vars: 0,
        consts: [["fxFlex", "none", "fxFlexFill", "", "fxLayout", "column", "fxLayoutAlign", "start start", 2, "margin", "1em", "overflow-y", "auto"], [2, "max-width", "600px"], [1, "mat-h1", 2, "margin-bottom", "28px"], [1, "mat-h2"], [1, "mat-h3"], [1, "mat-h4"], [2, "font-weight", "bold"], ["href", "https://www.e-recht24.de", 2, "color", "white"]],
        template: function DataPrivacyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Datenschutz\xADerkl\xE4rung");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1. Datenschutz auf einen Blick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Allgemeine Hinweise");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Die folgenden Hinweise geben einen einfachen \xDCberblick dar\xFCber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers\xF6nlich identifiziert werden k\xF6nnen. Ausf\xFChrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef\xFChrten Datenschutzerkl\xE4rung.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Datenerfassung auf dieser Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Wer ist verantwortlich f\xFCr die Datenerfassung auf dieser Website?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k\xF6nnen Sie dem Abschnitt \u201EHinweis zur Verantwortlichen Stelle\u201C in dieser Datenschutzerkl\xE4rung entnehmen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Wie erfassen wir Ihre Daten?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.\xA0B. um Daten handeln, die Sie in ein Kontaktformular eingeben.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.\xA0B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Wof\xFCr nutzen wir Ihre Daten?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew\xE4hrleisten. Andere Daten k\xF6nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Welche Rechte haben Sie bez\xFCglich Ihrer Daten?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sie haben jederzeit das Recht, unentgeltlich Auskunft \xFCber Herkunft, Empf\xE4nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au\xDFerdem ein Recht, die Berichtigung oder L\xF6schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k\xF6nnen Sie diese Einwilligung jederzeit f\xFCr die Zukunft widerrufen. Au\xDFerdem haben Sie das Recht, unter bestimmten Umst\xE4nden die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust\xE4ndigen Aufsichtsbeh\xF6rde zu.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k\xF6nnen Sie sich jederzeit an uns wenden.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Analyse-Tools und Tools von Dritt\xADanbietern");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerkl\xE4rung.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2. Hosting und Content Delivery Networks (CDN)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Externes Hosting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die \xFCber eine Website generiert werden, handeln.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserf\xFCllung gegen\xFCber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erf\xFCllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Wir setzen folgenden Hoster ein:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Strato AG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Pascalstra\xDFe 10 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " 10587 Berlin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "3. Allgemeine Hinweise und Pflicht\xADinformationen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Datenschutz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers\xF6nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl\xE4rung.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers\xF6nlich identifiziert werden k\xF6nnen. Die vorliegende Datenschutzerkl\xE4rung erl\xE4utert, welche Daten wir erheben und wof\xFCr wir sie nutzen. Sie erl\xE4utert auch, wie und zu welchem Zweck das geschieht.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Wir weisen darauf hin, dass die Daten\xFCbertragung im Internet (z.\xA0B. bei der Kommunikation per E-Mail) Sicherheitsl\xFCcken aufweisen kann. Ein l\xFCckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m\xF6glich.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Hinweis zur verantwortlichen Stelle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Die verantwortliche Stelle f\xFCr die Datenverarbeitung auf dieser Website ist:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Klaus Sievers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Ottenschlag 33");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " 46244 Bottrop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Germany");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Telefon: +492045 8959724");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " E-Mail: info@gif-it-to-me.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Verantwortliche Stelle ist die nat\xFCrliche oder juristische Person, die allein oder gemeinsam mit anderen \xFCber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.\xA0B. Namen, E-Mail-Adressen o. \xC4.) entscheidet.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Speicherdauer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Soweit innerhalb dieser Datenschutzerkl\xE4rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f\xFCr die Datenverarbeitung entf\xE4llt. Wenn Sie ein berechtigtes L\xF6schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel\xF6scht, sofern wir keinen anderen rechtlich zul\xE4ssigen\xA0 Gr\xFCnde f\xFCr die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L\xF6schung nach Fortfall dieser Gr\xFCnde.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Widerruf Ihrer Einwilligung zur Datenverarbeitung");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Viele Datenverarbeitungsvorg\xE4nge sind nur mit Ihrer ausdr\xFCcklichen Einwilligung m\xF6glich. Sie k\xF6nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm\xE4\xDFigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber\xFChrt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Widerspruchsrecht gegen die Datenerhebung in besonderen F\xE4llen sowie gegen Direktwerbung (Art. 21 DSGVO)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR\xDCNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F\xDCR EIN AUF DIESE BESTIMMUNGEN GEST\xDCTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL\xC4RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K\xD6NNEN ZWINGENDE SCHUTZW\xDCRDIGE GR\xDCNDE F\xDCR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN \xDCBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS\xDCBUNG ODER VERTEIDIGUNG VON RECHTSANSPR\xDCCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F\xDCR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Beschwerde\xADrecht bei der zust\xE4ndigen Aufsichts\xADbeh\xF6rde");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Im Falle von Verst\xF6\xDFen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh\xF6rde, insbesondere in dem Mitgliedstaat ihres gew\xF6hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma\xDFlichen Versto\xDFes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Recht auf Daten\xAD\xFCbertrag\xADbarkeit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf\xFCllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g\xE4ngigen, maschinenlesbaren Format aush\xE4ndigen zu lassen. Sofern Sie die direkte \xDCbertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "SSL- bzw. TLS-Verschl\xFCsselung");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Diese Seite nutzt aus Sicherheitsgr\xFCnden und zum Schutz der \xDCbertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl\xFCsselung. Eine verschl\xFCsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \u201Ehttp://\u201C auf \u201Ehttps://\u201C wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Wenn die SSL- bzw. TLS-Verschl\xFCsselung aktiviert ist, k\xF6nnen die Daten, die Sie an uns \xFCbermitteln, nicht von Dritten mitgelesen werden.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Auskunft, L\xF6schung und Berichtigung");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft \xFCber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf\xE4nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L\xF6schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k\xF6nnen Sie sich jederzeit an uns wenden.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Recht auf Einschr\xE4nkung der Verarbeitung");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Sie haben das Recht, die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k\xF6nnen Sie sich jederzeit an uns wenden. Das Recht auf Einschr\xE4nkung der Verarbeitung besteht in folgenden F\xE4llen:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben\xF6tigen wir in der Regel Zeit, um dies zu \xFCberpr\xFCfen. F\xFCr die Dauer der Pr\xFCfung haben Sie das Recht, die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm\xE4\xDFig geschah/geschieht, k\xF6nnen Sie statt der L\xF6schung die Einschr\xE4nkung der Datenverarbeitung verlangen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Wenn wir Ihre personenbezogenen Daten nicht mehr ben\xF6tigen, Sie sie jedoch zur Aus\xFCbung, Verteidigung oder Geltendmachung von Rechtsanspr\xFCchen ben\xF6tigen, haben Sie das Recht, statt der L\xF6schung die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw\xE4gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen \xFCberwiegen, haben Sie das Recht, die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr\xE4nkt haben, d\xFCrfen diese Daten \u2013 von ihrer Speicherung abgesehen \u2013 nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus\xFCbung oder Verteidigung von Rechtsanspr\xFCchen oder zum Schutz der Rechte einer anderen nat\xFCrlichen oder juristischen Person oder aus Gr\xFCnden eines wichtigen \xF6ffentlichen Interesses der Europ\xE4ischen Union oder eines Mitgliedstaats verarbeitet werden.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Widerspruch gegen Werbe-E-Mails");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Der Nutzung von im Rahmen der Impressumspflicht ver\xF6ffentlichten Kontaktdaten zur \xDCbersendung von nicht ausdr\xFCcklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdr\xFCcklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "4. Datenerfassung auf dieser Website ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Cookies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Unsere Internetseiten verwenden so genannte \u201ECookies\u201C. Cookies sind kleine Textdateien und richten auf Ihrem Endger\xE4t keinen Schaden an. Sie werden entweder vor\xFCbergehend f\xFCr die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endger\xE4t gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gel\xF6scht. Permanente Cookies bleiben auf Ihrem Endger\xE4t gespeichert, bis Sie diese selbst l\xF6schen\xA0oder eine automatische L\xF6schung durch Ihren Webbrowser erfolgt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Teilweise k\xF6nnen auch Cookies von Drittunternehmen auf Ihrem Endger\xE4t gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese erm\xF6glichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren w\xFCrden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten\xA0oder Werbung anzuzeigen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Cookies, die zur Durchf\xFChrung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung bestimmter, von Ihnen erw\xFCnschter Funktionen (funktionale Cookies, z. B. f\xFCr die Warenkorbfunktion) oder zur Optimierung der Website (z.B. Cookies zur Messung des Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies ausschlie\xDFlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Sie k\xF6nnen Ihren Browser so einstellen, dass Sie \xFCber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f\xFCr bestimmte F\xE4lle oder generell ausschlie\xDFen sowie das automatische L\xF6schen der Cookies beim Schlie\xDFen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit\xE4t dieser Website eingeschr\xE4nkt sein.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hier\xFCber im Rahmen dieser Datenschutzerkl\xE4rung gesondert informieren und ggf. eine Einwilligung abfragen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Server-Log-Dateien");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns \xFCbermittelt. Dies sind:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Browsertyp und Browserversion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "verwendetes Betriebssystem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Referrer URL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Hostname des zugreifenden Rechners");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Uhrzeit der Serveranfrage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "IP-Adresse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Eine Zusammenf\xFChrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website \u2013 hierzu m\xFCssen die Server-Log-Files erfasst werden.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Anfrage per E-Mail, Telefon oder Telefax");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf\xFCllung eines Vertrags zusammenh\xE4ngt oder zur Durchf\xFChrung vorvertraglicher Ma\xDFnahmen erforderlich ist. In allen \xFCbrigen F\xE4llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Die von Ihnen an uns per Kontaktanfragen \xFCbersandten Daten verbleiben bei uns, bis Sie uns zur L\xF6schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f\xFCr die Datenspeicherung entf\xE4llt (z.\xA0B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen \u2013 insbesondere gesetzliche Aufbewahrungsfristen \u2013 bleiben unber\xFChrt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "5. Analyse-Tools und Werbung ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Matomo (ehemals Piwik)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Diese Website benutzt den Open Source Webanalysedienst Matomo. Matomo verwendet Technologien, die die seiten\xFCbergreifende Wiedererkennung des Nutzers zur Analyse des Nutzerverhaltens erm\xF6glichen (z.B. Cookies oder Device-Fingerprinting). Die durch Matomo erfassten Informationen \xFCber die Benutzung dieser Website werden auf unserem Server gespeichert. Die IP-Adresse wird vor der Speicherung anonymisiert.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Mit Hilfe von Matomo sind wir in der Lage Daten \xFCber die Nutzung unserer Website durch die Websitebesucher zu erfassen und zu analysieren. Hierdurch k\xF6nnen wir u. a. herausfinden, wann welche Seitenaufrufe get\xE4tigt wurden und aus welcher Region sie kommen. Au\xDFerdem erfassen wir verschiedene Logdateien (z.B. IP-Adresse, Referrer, verwendete Browser und Betriebssysteme) und k\xF6nnen messen, ob unsere Websitebesucher bestimmte Aktionen durchf\xFChren (z.B. Klicks, K\xE4ufe u. \xC4.).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschlie\xDFlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Hosting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Wir hosten Matomo ausschlie\xDFlich auf unseren eigenen Servern, sodass alle Analysedaten bei uns verbleiben und nicht weitergegeben werden.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Quelle der deutschen Texte: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "eRecht24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  padding: 1em;\n  padding-bottom: 0;\n}\n\ndiv.mat-display-1[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  letter-spacing: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRhdGEtcHJpdmFjeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoiZGF0YS1wcml2YWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbmRpdi5tYXQtZGlzcGxheS0xIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataPrivacyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-data-privacy',
            templateUrl: './data-privacy.component.html',
            styleUrls: ['./data-privacy.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Khja":
    /*!********************************************!*\
      !*** ./src/app/create/create.component.ts ***!
      \********************************************/

    /*! exports provided: CreateComponent */

    /***/
    function Khja(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
        return CreateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_game_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/game/game.service */
      "iaKJ");
      /* harmony import */


      var _service_gif_gif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/gif/gif.service */
      "p0Sd");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var CreateComponent = /*#__PURE__*/function () {
        function CreateComponent(gameService, gifService, router) {
          _classCallCheck(this, CreateComponent);

          this.gameService = gameService;
          this.gifService = gifService;
          this.router = router;
        }

        _createClass(CreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //@todo same as in join
            var startGifSubscribtion = this.gifService.start().subscribe(function (data) {
              startGifSubscribtion.unsubscribe();
              _this.startGifs = data;

              _this.shuffle(_this.startGifs);

              var gifInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, 15000);
              _this.gifIntervalSubscribtion = gifInterval.subscribe(function (n) {
                return _this.currentGif = _this.startGifs[n % _this.startGifs.length];
              });
            });
          }
        }, {
          key: "createGame",
          value: function createGame() {
            var _this2 = this;

            if (this.gifIntervalSubscribtion) {
              this.gifIntervalSubscribtion.unsubscribe();
            }

            this.gameService.create().subscribe(function (ids) {
              _this2.router.navigate(['game', ids.gameId, 'join']);
            });
          }
        }, {
          key: "getGame",
          value: function getGame() {
            this.router.navigate(['game', this.gameId, 'join']);
          }
        }, {
          key: "shuffle",
          value: function shuffle(a) {
            var j, x, i;

            for (i = a.length - 1; i > 0; i--) {
              j = Math.floor(Math.random() * (i + 1));
              x = a[i];
              a[i] = a[j];
              a[j] = x;
            }
          }
        }]);

        return CreateComponent;
      }();

      CreateComponent.ɵfac = function CreateComponent_Factory(t) {
        return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_game_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gif_gif_service__WEBPACK_IMPORTED_MODULE_2__["GifService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateComponent,
        selectors: [["app-create"]],
        decls: 18,
        vars: 3,
        consts: [["fxFlex", "none", "fxFlexFill", "", "fxLayout", "column", "fxLayoutAlign", "space-between center", 2, "margin", "1em"], ["fxFlex", "", 1, "mat-display-4", 2, "margin-bottom", "28px"], ["fxFlex", "", "id", "start-gif-container", "fxFlex", "no-grow", "fxLayout", "column", "fxLayoutAlign", "center center"], [1, "gif"], ["id", "start-gif", "alt", "start-gif", 3, "src"], ["layout", "row", "fxLayoutAlign", "end"], ["alt", "via-tenor", "src", "../../assets/tenor/via_tenor_logo_white.png", 2, "width", "10%", "max-width", "100px"], ["fxFlex", "none", "fxLayout", "column", "fxLayoutAlign", "end center", 2, "margin-top", "2em"], ["mat-raised-button", "", "color", "primary", 2, "width", "100%", 3, "click"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "padding-top", "0.5em"], ["appearance", "outline"], ["matInput", "", "placeholder", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "0.5em", 3, "disabled", "click"]],
        template: function CreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gif it to me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_9_listener() {
              return ctx.createGame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Gif me a NEW game");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Game-Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.gameId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_16_listener() {
              return ctx.getGame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Gif me MY game");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentGif == null ? null : ctx.currentGif.media[0].gif.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gameId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.gameId);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  padding: 1em;\n  padding-bottom: 0;\n}\n\n#start-gif-container[_ngcontent-%COMP%] {\n  height: calc(100% - 265px);\n  max-height: calc(100% - 265px);\n}\n\n#start-gif[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbiNzdGFydC1naWYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI2NXB4KTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNjVweCk7XHJcbn1cclxuXHJcbiNzdGFydC1naWYge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create',
            templateUrl: './create.component.html',
            styleUrls: ['./create.component.scss']
          }]
        }], function () {
          return [{
            type: _service_game_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]
          }, {
            type: _service_gif_gif_service__WEBPACK_IMPORTED_MODULE_2__["GifService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "M6+A":
    /*!********************************************************!*\
      !*** ./src/app/round-status/round-status.component.ts ***!
      \********************************************************/

    /*! exports provided: RoundStatusComponent */

    /***/
    function M6A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoundStatusComponent", function () {
        return RoundStatusComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_service_game_round__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/service/game/round */
      "rIm7");
      /* harmony import */


      var src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/service/game/game.service */
      "iaKJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function RoundStatusComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose Gif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Choose cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reveal cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Choose winner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start next round");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Round ", ctx_r0.gameService.get().round, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.gameService.isRoundStatus(ctx_r0.RoundStatus.CHOOSE_GIF)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.gameService.isRoundStatus(ctx_r0.RoundStatus.CHOOSE_CARDS)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.gameService.isRoundStatus(ctx_r0.RoundStatus.REVEAL_CARDS)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r0.gameService.isRoundStatus(ctx_r0.RoundStatus.CHOOSE_WINNER)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r0.gameService.isRoundStatus(ctx_r0.RoundStatus.START_NEXT_ROUND)));
        }
      }

      var RoundStatusComponent = /*#__PURE__*/function () {
        function RoundStatusComponent(gameService) {
          _classCallCheck(this, RoundStatusComponent);

          this.gameService = gameService;
          this.RoundStatus = src_service_game_round__WEBPACK_IMPORTED_MODULE_1__["RoundStatus"];
        }

        _createClass(RoundStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RoundStatusComponent;
      }();

      RoundStatusComponent.ɵfac = function RoundStatusComponent_Factory(t) {
        return new (t || RoundStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]));
      };

      RoundStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RoundStatusComponent,
        selectors: [["app-round-status"]],
        decls: 1,
        vars: 1,
        consts: [["class", "round-status", "fxLayout", "column", 4, "ngIf"], ["fxLayout", "column", 1, "round-status"], [1, "round-status-list"], [1, "round-status-item", 3, "ngClass"]],
        template: function RoundStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RoundStatusComponent_div_0_Template, 14, 16, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameService.get() && ctx.gameService.get().round > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"]],
        styles: [".round-status-list[_ngcontent-%COMP%] {\n  padding-left: 1em;\n}\n\n.round-status-item.active[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJvdW5kLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoicm91bmQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kLXN0YXR1cy1saXN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxufVxyXG5cclxuLnJvdW5kLXN0YXR1cy1pdGVtLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNlOTFlNjM7IC8vQHRvZG8gdmFyaWFibGVcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoundStatusComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-round-status',
            templateUrl: './round-status.component.html',
            styleUrls: ['./round-status.component.scss']
          }]
        }], function () {
          return [{
            type: src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OaXM":
    /*!**************************************************************!*\
      !*** ./src/app/wait-game-start/wait-game-start.component.ts ***!
      \**************************************************************/

    /*! exports provided: WaitGameStartComponent */

    /***/
    function OaXM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WaitGameStartComponent", function () {
        return WaitGameStartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/service/game/game.service */
      "iaKJ");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function WaitGameStartComponent_div_42_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "min. 3 Gifer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WaitGameStartComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaitGameStartComponent_div_42_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.startGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WaitGameStartComponent_div_42_div_3_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.gameService.get().player.length < 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.gameService.get().player.length < 3);
        }
      }

      function WaitGameStartComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wating for game start...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WaitGameStartComponent = /*#__PURE__*/function () {
        function WaitGameStartComponent(gameService, snackBar) {
          _classCallCheck(this, WaitGameStartComponent);

          this.gameService = gameService;
          this.snackBar = snackBar;
          this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        }

        _createClass(WaitGameStartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "startGame",
          value: function startGame() {
            this.gameService.start();
          }
        }, {
          key: "copyLink",
          value: function copyLink() {
            var copyText = document.getElementById("link-input");
            copyText.select();
            document.execCommand("copy");
            this.snackBar.open('Link copied', '', {
              duration: 2000
            });
          }
        }]);

        return WaitGameStartComponent;
      }();

      WaitGameStartComponent.ɵfac = function WaitGameStartComponent_Factory(t) {
        return new (t || WaitGameStartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
      };

      WaitGameStartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WaitGameStartComponent,
        selectors: [["app-wait-game-start"]],
        decls: 44,
        vars: 4,
        consts: [["fxFlex", "100", "fxLayout", "column", "fxLayoutAlign", "center center"], [1, "gif", 2, "max-width", "500px"], [2, "font-family", "Roboto", "letter-spacing", "normal"], ["id", "rule-list"], [1, "highlight", 2, "text-decoration", "underline"], [1, "highlight", 2, "color", "#e91e63"], [1, "highlight", 2, "color", "#76FF03"], ["fxLayout", "row", "fxLayoutAlign", "start end", 2, "margin-top", "2em"], [2, "color", "white", "padding-bottom", "2.3em", "padding-right", "1em"], ["appearance", "outline"], ["id", "link-input", "matInput", "", "placeholder", "", 3, "value"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "0.5em", "margin-bottom", "1.7em", 3, "click"], [2, "position", "relative", "top", "-1.5em", "font-size", "smaller"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["style", "color: #e91e63; font-size: x-small;", 4, "ngIf"], [2, "color", "#e91e63", "font-size", "x-small"]],
        template: function WaitGameStartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The Rules: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " You are the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "underlined player");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " The red player is the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gif Master");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " . This will change every round ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " In each round you will see a different gif. All player except of the Gif Master enter an as funny as possible text in their card. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Player");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " who committed their card will appear green. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " When all Gifer has entered their masterpieces the Gif Master reveal one card after each other and may read them loudly to share the funniness ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " The Gif Master crowns the winner of the round. The winner gets one point ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Each Gifer clicks Next Round when ready. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ready player");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " appear green again. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaitGameStartComponent_Template_button_click_37_listener() {
              return ctx.copyLink();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Copy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-hint", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Share this link or the game id with your friends, to invite them to your game");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, WaitGameStartComponent_div_42_Template, 4, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, WaitGameStartComponent_div_43_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID: ", ctx.gameService.get().id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.environment.host + "/game/" + ctx.gameService.get().id + "/join");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameService.isHost());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameService.isHost());
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
        styles: ["#rule-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1rem;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  font-family: \"Bangers\";\n  letter-spacing: 0.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdhaXQtZ2FtZS1zdGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoid2FpdC1nYW1lLXN0YXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3J1bGUtbGlzdCBsaTpub3QoOmxhc3QtY2hpbGQpe1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5oaWdobGlnaHQge1xyXG4gIGZvbnQtZmFtaWx5OiAnQmFuZ2Vycyc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitGameStartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-wait-game-start',
            templateUrl: './wait-game-start.component.html',
            styleUrls: ['./wait-game-start.component.scss']
          }]
        }], function () {
          return [{
            type: src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QYWb":
    /*!******************************************************!*\
      !*** ./src/app/game-status/game-status.component.ts ***!
      \******************************************************/

    /*! exports provided: GameStatusComponent */

    /***/
    function QYWb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameStatusComponent", function () {
        return GameStatusComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/service/game/game.service */
      "iaKJ");
      /* harmony import */


      var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../confirm-dialog/confirm-dialog.component */
      "3dBE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function GameStatusComponent_ng_container_1_ng_template_7_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameStatusComponent_ng_container_1_ng_template_7_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var player_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().player;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.kickPlayer(player_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GameStatusComponent_ng_container_1_ng_template_7_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameStatusComponent_ng_container_1_ng_template_7_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r10.leaveGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Leave");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GameStatusComponent_ng_container_1_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GameStatusComponent_ng_container_1_ng_template_7_button_0_Template, 3, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameStatusComponent_ng_container_1_ng_template_7_button_1_Template, 3, 0, "button", 6);
        }

        if (rf & 2) {
          var player_r4 = ctx.player;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isMyself(player_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isMyself(player_r4));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          player: a0
        };
      };

      var _c1 = function _c1(a0, a1, a2, a3) {
        return {
          "myself": a0,
          "choosing": a1,
          "okay": a2,
          "clickable": a3
        };
      };

      var _c2 = function _c2(a0, a1, a2) {
        return {
          "myself": a0,
          "choosing": a1,
          "okay": a2
        };
      };

      function GameStatusComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GameStatusComponent_ng_container_1_ng_template_7_Template, 2, 2, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var p_r1 = ctx.$implicit;

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2)("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, p_r1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](8, _c1, ctx_r0.isMyself(p_r1), ctx_r0.gameService.isChoosingPlayer(p_r1), p_r1.okay, ctx_r0.gameService.isHost() || ctx_r0.isMyself(p_r1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c2, ctx_r0.isMyself(p_r1), ctx_r0.gameService.isChoosingPlayer(p_r1), p_r1.okay));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.won, " ");
        }
      }

      var GameStatusComponent = /*#__PURE__*/function () {
        function GameStatusComponent(dialog, gameService) {
          _classCallCheck(this, GameStatusComponent);

          this.dialog = dialog;
          this.gameService = gameService; // @ViewChild(MatMenuTrigger) playerMenu: MatMenuTrigger;

          this.menuData = {
            player: null
          };
          this.menuName = '';
        }

        _createClass(GameStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isMyself",
          value: function isMyself(player) {
            //@todo vor game start -> cannot read property name of undefined
            return player.name === this.gameService.getPlayer().name;
          } // public selectPlayer(player: Player) {
          //   if (this.gameService.isHost() || this.isMyself(player)) {
          //     this.menuData.player = player;
          //     this.menuName = 'playerMenu';
          //     ((this.playerMenu.openMenu();
          //   }
          // }

        }, {
          key: "kickPlayer",
          value: function kickPlayer(player) {
            var _this3 = this;

            var message = 'Are you sure you want to kick ' + player.name + ' ?';
            var dialogData = new _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogModel"]("Confirm Action", message);
            var dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
              maxWidth: "400px",
              data: dialogData
            });
            dialogRef.afterClosed().subscribe(function (dialogResult) {
              if (dialogResult) {
                _this3.gameService.kick(player);
              }
            });
          }
        }, {
          key: "leaveGame",
          value: function leaveGame() {
            this.gameService.leave();
          }
        }]);

        return GameStatusComponent;
      }();

      GameStatusComponent.ɵfac = function GameStatusComponent_Factory(t) {
        return new (t || GameStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]));
      };

      GameStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GameStatusComponent,
        selectors: [["app-game-status"]],
        decls: 2,
        vars: 1,
        consts: [[1, "game-status", 2, "display", "grid", "grid-template-columns", "auto auto"], [4, "ngFor", "ngForOf"], [1, "player", 3, "matMenuTriggerFor", "matMenuTriggerData", "ngClass"], [1, "player", 3, "ngClass"], ["playerMenu", "matMenu"], ["matMenuContent", ""], ["mat-raised-button", "", "color", "primary", "style", "width: 100%;", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 2, "width", "100%", 3, "click"]],
        template: function GameStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameStatusComponent_ng_container_1_Template, 9, 17, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gameService.get().player);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: [".player.myself[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.player.choosing[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n\n.player.okay[_ngcontent-%COMP%] {\n  color: #76FF03;\n}\n\n.player.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdhbWUtc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJnYW1lLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5ZXIubXlzZWxmIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnBsYXllci5jaG9vc2luZyB7XHJcbiAgY29sb3I6ICNlOTFlNjM7IC8vQHRvZG8gdmFyaWFibGUgcGluayA1MDBcclxufVxyXG5cclxuLnBsYXllci5va2F5IHtcclxuICBjb2xvcjogIzc2RkYwMyAvL2xpZ2h0IGdyZWVuIEE0MDBcclxufVxyXG5cclxuLnBsYXllci5jbGlja2FibGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameStatusComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-game-status',
            templateUrl: './game-status.component.html',
            styleUrls: ['./game-status.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_gif_gif_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../service/gif/gif.service */
      "p0Sd");
      /* harmony import */


      var _service_game_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/game/game.service */
      "iaKJ");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent(gifService, gameSevice) {
        _classCallCheck(this, AppComponent);

        // this.gifService.trending().subscribe((data: Gif[]) =>  {
        //   this.currentGifs = data;
        //   console.log(this.currentGifs);
        // });
        this.gifService = gifService;
        this.gameSevice = gameSevice;
        this.title = 'gifittome';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gif_gif_service__WEBPACK_IMPORTED_MODULE_1__["GifService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 10,
        vars: 0,
        consts: [["fxFlex", "100", "fxLayout", "column", 2, "max-width", "100vw", "max-height", "100vh"], [2, "max-height", "calc(100% - 21px)", "height", "calc(100% - 21px)"], ["fxLayout", "row", 2, "padding-left", "1em"], ["routerLink", "/legal", 2, "font-size", "xx-small", "text-decoration", "none", "color", "black"], [2, "padding-left", "1em"], ["routerLink", "/privacy", 2, "font-size", "xx-small", "text-decoration", "none", "color", "black"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legal notice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Data privacy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _service_gif_gif_service__WEBPACK_IMPORTED_MODULE_1__["GifService"]
          }, {
            type: _service_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
          }];
        }, null);
      })();

      ;
      /***/
    },

    /***/
    "UOyo":
    /*!****************************************!*\
      !*** ./src/app/join/join.component.ts ***!
      \****************************************/

    /*! exports provided: JoinComponent */

    /***/
    function UOyo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoinComponent", function () {
        return JoinComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_gif_gif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/gif/gif.service */
      "p0Sd");
      /* harmony import */


      var _service_game_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/game/game.service */
      "iaKJ");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var JoinComponent = /*#__PURE__*/function () {
        function JoinComponent(gameSevice, gifService, route, router) {
          _classCallCheck(this, JoinComponent);

          this.gameSevice = gameSevice;
          this.gifService = gifService;
          this.route = route;
          this.router = router;
          this.playerName = '';
        }

        _createClass(JoinComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.route.params.subscribe(function (params) {
              _this4.gameId = params['gameId'];
            });
            var startGifSubscribtion = this.gifService.start().subscribe(function (data) {
              startGifSubscribtion.unsubscribe();
              _this4.startGifs = data;

              _this4.shuffle(_this4.startGifs);

              var gifInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, 15000);
              _this4.gifIntervalSubscribtion = gifInterval.subscribe(function (n) {
                return _this4.currentGif = _this4.startGifs[n % _this4.startGifs.length];
              });
            });
          }
        }, {
          key: "joinGame",
          value: function joinGame() {
            var _this5 = this;

            if (this.playerName) {
              if (this.gifIntervalSubscribtion) {
                this.gifIntervalSubscribtion.unsubscribe();
              }

              var cookie = this.getCookieValue('game');
              var player = {
                name: this.playerName,
                id: cookie.playerId
              };
              this.gameSevice.join(this.gameId, player).subscribe(function (game) {
                _this5.router.navigate(['game', _this5.gameId, 'play']);
              });
            }
          }
        }, {
          key: "getCookieValue",
          value: function getCookieValue(name) {
            var _a;

            var cookieString = ((_a = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')) === null || _a === void 0 ? void 0 : _a.pop()) || '';
            cookieString = decodeURIComponent(cookieString);
            cookieString = cookieString.substring(2); //express is prefixing json cookies with j: -> remove this befor parsing

            return JSON.parse(cookieString);
          }
        }, {
          key: "shuffle",
          value: function shuffle(a) {
            var j, x, i;

            for (i = a.length - 1; i > 0; i--) {
              j = Math.floor(Math.random() * (i + 1));
              x = a[i];
              a[i] = a[j];
              a[j] = x;
            }
          }
        }]);

        return JoinComponent;
      }();

      JoinComponent.ɵfac = function JoinComponent_Factory(t) {
        return new (t || JoinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_game_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gif_gif_service__WEBPACK_IMPORTED_MODULE_2__["GifService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      JoinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JoinComponent,
        selectors: [["app-join"]],
        decls: 16,
        vars: 3,
        consts: [["fxFlex", "none", "fxFlexFill", "", "fxLayout", "column", "fxLayoutAlign", "space-between center", 2, "margin", "1em"], ["fxFlex", "", 1, "mat-display-4", 2, "margin-bottom", "28px"], ["fxFlex", "", "id", "start-gif-container", "fxFlex", "no-grow", "fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayoutAlign", "center center", 1, "gif"], ["id", "start-gif", "alt", "start-gif", 3, "src"], ["layout", "row", "fxLayoutAlign", "end"], ["alt", "via-tenor", "src", "../../assets/tenor/via_tenor_logo_white.png", 2, "width", "10%", "max-width", "100px"], ["fxFlex", "none", "fxLayout", "column", "fxLayoutAlign", "end center", 2, "margin-top", "2em"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "padding-top", "0.5em"], ["appearance", "outline"], ["matInput", "", "placeholder", "", 3, "ngModel", "ngModelChange", "keyup.enter"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "0.5em", 3, "disabled", "click"]],
        template: function JoinComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Gif it to me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Gif me your name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JoinComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.playerName = $event;
            })("keyup.enter", function JoinComponent_Template_input_keyup_enter_13_listener() {
              return ctx.joinGame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinComponent_Template_button_click_14_listener() {
              return ctx.joinGame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter Game");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentGif == null ? null : ctx.currentGif.media[0].gif.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.playerName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playerName);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  padding: 1em;\n}\n\n#start-gif-container[_ngcontent-%COMP%] {\n  height: calc(100% - 265px);\n  max-height: calc(100% - 265px);\n}\n\n#start-gif[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  width: 100%;\n  height: auto;\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGpvaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiam9pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG4jc3RhcnQtZ2lmLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNjVweCk7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjY1cHgpO1xyXG59XHJcblxyXG4jc3RhcnQtZ2lmIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-join',
            templateUrl: './join.component.html',
            styleUrls: ['./join.component.scss']
          }]
        }], function () {
          return [{
            type: _service_game_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
          }, {
            type: _service_gif_gif_service__WEBPACK_IMPORTED_MODULE_2__["GifService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Wxu/":
    /*!********************************************************!*\
      !*** ./src/app/legal-notice/legal-notice.component.ts ***!
      \********************************************************/

    /*! exports provided: LegalNoticeComponent */

    /***/
    function Wxu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegalNoticeComponent", function () {
        return LegalNoticeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");

      var LegalNoticeComponent = /*#__PURE__*/function () {
        function LegalNoticeComponent() {
          _classCallCheck(this, LegalNoticeComponent);
        }

        _createClass(LegalNoticeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LegalNoticeComponent;
      }();

      LegalNoticeComponent.ɵfac = function LegalNoticeComponent_Factory(t) {
        return new (t || LegalNoticeComponent)();
      };

      LegalNoticeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LegalNoticeComponent,
        selectors: [["app-legal-notice"]],
        decls: 72,
        vars: 0,
        consts: [["fxFlex", "none", "fxFlexFill", "", "fxLayout", "column", "fxLayoutAlign", "start start", 2, "margin", "1em", "overflow-y", "auto"], [2, "max-width", "600px"], [1, "mat-h4", 2, "margin-bottom", "28px"], [2, "margin-bottom", "28px"], [1, "mat-h4"], ["href", "mailto:info@gif-it-to-me.com", 2, "color", "white"], ["href", "https://www.e-recht24.de", 2, "color", "white"], ["href", "https://www.DeepL.com/Translator", 2, "color", "white"]],
        template: function LegalNoticeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Impressum / Legal notice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Adresse / Adress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Klaus Sievers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ottenschlag 33");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "46244 Bottrop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Germany");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+492045 8959724");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "info@gif-it-to-me.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Haftung f\xFCr Inhalte / Liability for content ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Als Diensteanbieter sind wir gem\xE4\xDF \xA7 7 Abs.1 TMG f\xFCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \xA7\xA7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \xFCbermittelte oder gespeicherte fremde Informationen zu \xFCberwachen oder nach Umst\xE4nden zu forschen, die auf eine rechtswidrige T\xE4tigkeit hinweisen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\xFChrt. Eine diesbez\xFCgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\xF6glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "----------------------");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " As a service provider, we are responsible for our own content on these pages in accordance with \xA7 7 para. 1 TMG. general laws. However, according to \xA7\xA7 8 to 10 TMG, as a service provider we are not to monitor transmitted or stored information from third parties or to investigate circumstances or to investigate circumstances that indicate illegal activity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Obligations to remove or block the use of information in accordance with general remain unaffected by this. However, any liability in this respect is only possible from the time of possible only from the time of knowledge of a concrete infringement. If we become aware of corresponding infringements infringements, we will remove these contents immediately. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Haftung f\xFCr Links / Liability for links");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Unser Angebot enth\xE4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\xF6nnen wir f\xFCr diese fremden Inhalte auch keine Gew\xE4hr \xFCbernehmen. F\xFCr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\xF6gliche Rechtsverst\xF6\xDFe \xFCberpr\xFCft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "----------------------");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always the responsibility of the respective provider or operator of the pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognisable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without specific infringement is not reasonable. If we become aware of any infringements, we will remove the links in question immediately. such links immediately. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Urheberrecht/ Copyrights");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\xE4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\xDFerhalb der Grenzen des Urheberrechtes bed\xFCrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f\xFCr den privaten, nicht kommerziellen Gebrauch gestattet.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "----------------------");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "The contents and works created by the site operators on these pages are subject to German copyright law. copyright law. The reproduction, editing, distribution and any kind of utilisation outside of the of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. copyrights are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. At If we become aware of any infringements, we will remove such content immediately. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Quelle der deutschen Texte: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "eRecht24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Translated with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "www.DeepL.com/Translator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " (free version)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  padding: 1em;\n  padding-bottom: 0;\n}\n\ndiv.mat-display-1[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  letter-spacing: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxlZ2FsLW5vdGljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoibGVnYWwtbm90aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbmRpdi5tYXQtZGlzcGxheS0xIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LegalNoticeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-legal-notice',
            templateUrl: './legal-notice.component.html',
            styleUrls: ['./legal-notice.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "X0CE":
    /*!**************************************************!*\
      !*** ./src/app/gif-board/gif-board.component.ts ***!
      \**************************************************/

    /*! exports provided: GifBoardComponent */

    /***/
    function X0CE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GifBoardComponent", function () {
        return GifBoardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_service_game_round__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/service/game/round */
      "rIm7");
      /* harmony import */


      var src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/service/game/game.service */
      "iaKJ");
      /* harmony import */


      var src_service_card_selection_card_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/service/card-selection/card-selection.service */
      "CNEd");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function GifBoardComponent_div_5_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GifBoardComponent_div_5_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.chooseWinner();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Als Gewinner w\xE4hlen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GifBoardComponent_div_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gewinner ausw\xE4hlen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GifBoardComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GifBoardComponent_div_5_button_1_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GifBoardComponent_div_5_div_2_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cardSelectionService.isCardSelected());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.cardSelectionService.isCardSelected());
        }
      }

      function GifBoardComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.gameService.getWinnerCard().player, " is the winner");
        }
      }

      function GifBoardComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GifBoardComponent_div_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.nextRound();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next round");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var GifBoardComponent = /*#__PURE__*/function () {
        function GifBoardComponent(gameService, cardSelectionService) {
          _classCallCheck(this, GifBoardComponent);

          this.gameService = gameService;
          this.cardSelectionService = cardSelectionService;
          this.RoundStatus = src_service_game_round__WEBPACK_IMPORTED_MODULE_1__["RoundStatus"];
        }

        _createClass(GifBoardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isOkay",
          value: function isOkay() {
            var _this6 = this;

            return this.gameService.get().player.find(function (p) {
              return p.name === _this6.gameService.getPlayer().name;
            })['okay']; //@todo
          }
        }, {
          key: "nextRound",
          value: function nextRound() {
            this.gameService.nextRoundVote();
          }
        }, {
          key: "chooseWinner",
          value: function chooseWinner() {
            this.gameService.chooseWinner();
            this.cardSelectionService.resetSelectedCardIdx();
          }
        }]);

        return GifBoardComponent;
      }();

      GifBoardComponent.ɵfac = function GifBoardComponent_Factory(t) {
        return new (t || GifBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_card_selection_card_selection_service__WEBPACK_IMPORTED_MODULE_3__["CardSelectionService"]));
      };

      GifBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GifBoardComponent,
        selectors: [["app-gif-board"]],
        decls: 8,
        vars: 4,
        consts: [["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "1em"], [1, "gif"], ["alt", "current-round-gif", 3, "src"], ["layout", "row", "fxLayoutAlign", "end"], ["alt", "via-tenor", "src", "../../assets/tenor/via_tenor_logo_white.png", 2, "width", "10%", "max-width", "100px"], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "mat-display-2", "style", "margin-bottom: 0;color: #e91e63;", 4, "ngIf"], ["fxFlex", "", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-display-2", 2, "margin-bottom", "0", "color", "#e91e63"], ["fxLayout", "column", "fxLayoutAlign", "center center"]],
        template: function GifBoardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GifBoardComponent_div_5_Template, 3, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GifBoardComponent_div_6_Template, 3, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GifBoardComponent_div_7_Template, 3, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.gameService.getRound().gif.media[0].gif.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameService.isRoundStatus(ctx.RoundStatus.CHOOSE_WINNER));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameService.getWinnerCard());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameService.isRoundStatus(ctx.RoundStatus.START_NEXT_ROUND) && !ctx.isOkay());
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaWYtYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GifBoardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-gif-board',
            templateUrl: './gif-board.component.html',
            styleUrls: ['./gif-board.component.scss']
          }]
        }], function () {
          return [{
            type: src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
          }, {
            type: src_service_card_selection_card_selection_service__WEBPACK_IMPORTED_MODULE_3__["CardSelectionService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _create_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./create/create.component */
      "Khja");
      /* harmony import */


      var _join_join_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./join/join.component */
      "UOyo");
      /* harmony import */


      var _game_game_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./game/game.component */
      "jBAD");
      /* harmony import */


      var _round_status_round_status_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./round-status/round-status.component */
      "M6+A");
      /* harmony import */


      var _game_status_game_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./game-status/game-status.component */
      "QYWb");
      /* harmony import */


      var _gif_board_gif_board_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./gif-board/gif-board.component */
      "X0CE");
      /* harmony import */


      var _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./card-list/card-list.component */
      "h/Ou");
      /* harmony import */


      var _wait_game_start_wait_game_start_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./wait-game-start/wait-game-start.component */
      "OaXM");
      /* harmony import */


      var _legal_notice_legal_notice_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./legal-notice/legal-notice.component */
      "Wxu/");
      /* harmony import */


      var _data_privacy_data_privacy_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./data-privacy/data-privacy.component */
      "ENeX");
      /* harmony import */


      var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./confirm-dialog/confirm-dialog.component */
      "3dBE");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_16__["CreateComponent"], _join_join_component__WEBPACK_IMPORTED_MODULE_17__["JoinComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_18__["GameComponent"], _round_status_round_status_component__WEBPACK_IMPORTED_MODULE_19__["RoundStatusComponent"], _game_status_game_status_component__WEBPACK_IMPORTED_MODULE_20__["GameStatusComponent"], _gif_board_gif_board_component__WEBPACK_IMPORTED_MODULE_21__["GifBoardComponent"], _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_22__["CardListComponent"], _wait_game_start_wait_game_start_component__WEBPACK_IMPORTED_MODULE_23__["WaitGameStartComponent"], _legal_notice_legal_notice_component__WEBPACK_IMPORTED_MODULE_24__["LegalNoticeComponent"], _data_privacy_data_privacy_component__WEBPACK_IMPORTED_MODULE_25__["DataPrivacyComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ConfirmDialogComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_16__["CreateComponent"], _join_join_component__WEBPACK_IMPORTED_MODULE_17__["JoinComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_18__["GameComponent"], _round_status_round_status_component__WEBPACK_IMPORTED_MODULE_19__["RoundStatusComponent"], _game_status_game_status_component__WEBPACK_IMPORTED_MODULE_20__["GameStatusComponent"], _gif_board_gif_board_component__WEBPACK_IMPORTED_MODULE_21__["GifBoardComponent"], _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_22__["CardListComponent"], _wait_game_start_wait_game_start_component__WEBPACK_IMPORTED_MODULE_23__["WaitGameStartComponent"], _legal_notice_legal_notice_component__WEBPACK_IMPORTED_MODULE_24__["LegalNoticeComponent"], _data_privacy_data_privacy_component__WEBPACK_IMPORTED_MODULE_25__["DataPrivacyComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ConfirmDialogComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "h/Ou":
    /*!**************************************************!*\
      !*** ./src/app/card-list/card-list.component.ts ***!
      \**************************************************/

    /*! exports provided: CardListComponent */

    /***/
    function hOu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardListComponent", function () {
        return CardListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_service_game_round__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/service/game/round */
      "rIm7");
      /* harmony import */


      var src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/service/game/game.service */
      "iaKJ");
      /* harmony import */


      var src_service_game_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/service/game/card */
      "1Lq6");
      /* harmony import */


      var src_service_card_selection_card_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/service/card-selection/card-selection.service */
      "CNEd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      function CardListComponent_div_0_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gif me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardListComponent_div_0_mat_card_1_Template_textarea_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.sentence = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardListComponent_div_0_mat_card_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.playSentence();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.sentence);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.sentence || !ctx_r2.sentence.trim());
        }
      }

      function CardListComponent_div_0_mat_card_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Waiting for other Gifer ... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CardListComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardListComponent_div_0_mat_card_1_Template, 7, 2, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardListComponent_div_0_mat_card_2_Template, 2, 0, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.gameService.isChoosingPlayer(ctx_r0.gameService.player) && !ctx_r0.gameService.getRound().cardPlayed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.gameService.isChoosingPlayer(ctx_r0.gameService.player) || ctx_r0.gameService.getRound().cardPlayed);
        }
      }

      function CardListComponent_div_1_mat_card_1_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("by ", ctx_r10.gameService.getCards()[i_r8].player, "");
        }
      }

      function CardListComponent_div_1_mat_card_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardListComponent_div_1_mat_card_1_div_1_div_3_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.gameService.getCards()[i_r8]._value || ctx_r9.gameService.getCards()[i_r8].value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.gameService.getCards()[i_r8].player);
        }
      }

      var _c0 = function _c0(a0, a1, a2, a3) {
        return {
          "closed": a0,
          "choosing": a1,
          "selected": a2,
          "winner": a3
        };
      };

      function CardListComponent_div_1_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardListComponent_div_1_mat_card_1_Template_mat_card_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var i_r8 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.cardClicked(i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardListComponent_div_1_mat_card_1_div_1_Template, 4, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r8 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c0, !ctx_r7.isOpen(i_r8), ctx_r7.gameService.isChoosingPlayer(ctx_r7.gameService.player), ctx_r7.cardSelectionService.getSelectedCardIdx() === i_r8, ctx_r7.isWinner(i_r8)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isOpen(i_r8));
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "voting": a0
        };
      };

      function CardListComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardListComponent_div_1_mat_card_1_Template, 2, 7, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.gameService.isRoundStatus(ctx_r1.RoundStatus.CHOOSE_WINNER)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.getPlayerIndezes());
        }
      }

      var CardListComponent = /*#__PURE__*/function () {
        function CardListComponent(gameService, cardSelectionService) {
          _classCallCheck(this, CardListComponent);

          this.gameService = gameService;
          this.cardSelectionService = cardSelectionService;
          this.RoundStatus = src_service_game_round__WEBPACK_IMPORTED_MODULE_1__["RoundStatus"];
        }

        _createClass(CardListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "playCard",
          value: function playCard(card) {
            this.gameService.playCard(card); //   .subscribe(() => {
            //     console.log('Karte gespielt')
            //     //@todo so anzeigen
            //   });
          }
        }, {
          key: "playSentence",
          value: function playSentence() {
            var card = new src_service_game_card__WEBPACK_IMPORTED_MODULE_3__["Card"]();
            card.value = this.sentence;
            this.gameService.playCard(card);
            this.sentence = null; // .subscribe(() => {
            //   console.log('Karte gespielt')
            //   //@todo so anzeigen
            // });
          }
        }, {
          key: "cardClicked",
          value: function cardClicked(index) {
            if (this.gameService.isRoundStatus(src_service_game_round__WEBPACK_IMPORTED_MODULE_1__["RoundStatus"].CHOOSE_WINNER)) {
              this.cardSelectionService.cardClicked(index);
            } else {
              if (this.gameService.isChoosingPlayer(this.gameService.getPlayer()) && !this.gameService.getCards()[index].value) {
                this.gameService.revealCard(index);
              }
            }
          }
        }, {
          key: "getPlayerIndezes",
          value: function getPlayerIndezes() {
            return Array(this.gameService.get().player.length - 1).fill(0).map(function (x, i) {
              return i;
            });
          }
        }, {
          key: "isOpen",
          value: function isOpen(i) {
            return !!this.gameService.getCards()[i].value;
          }
        }, {
          key: "isWinner",
          value: function isWinner(i) {
            if (this.gameService.getWinnerCard()) {
              //@todo ugly -> other card definition as in Card
              return this.gameService.getWinnerCard()['player'] === this.gameService.getCards()[i]['player'];
            } else {
              return false;
            }
          }
        }]);

        return CardListComponent;
      }();

      CardListComponent.ɵfac = function CardListComponent_Factory(t) {
        return new (t || CardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_card_selection_card_selection_service__WEBPACK_IMPORTED_MODULE_4__["CardSelectionService"]));
      };

      CardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardListComponent,
        selectors: [["app-card-list"]],
        decls: 2,
        vars: 2,
        consts: [["class", "card-list", "fxFlex", "100", "fxLayout", "row", "fxLayoutGap", "1em", 4, "ngIf"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutGap", "1em", "style", "overflow-x: scroll;", 3, "ngClass", 4, "ngIf"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutGap", "1em", 1, "card-list"], ["fxLayout", "row", "fxLayoutAlign", "start end", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start end"], ["appearance", "outline", 2, "height", "100%"], ["matInput", "", "placeholder", "", 2, "resize", "none", "height", "100%", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "0.5em", 3, "disabled", "click"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutGap", "1em", 2, "overflow-x", "scroll", 3, "ngClass"], ["class", "card", "fxFlex", "", "fxLayoutGap", "1em", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["fxFlex", "", "fxLayoutGap", "1em", 1, "card", 3, "ngClass", "click"], ["fxLayout", "column", 4, "ngIf"], ["fxLayout", "column"], [1, "value"]],
        template: function CardListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardListComponent_div_0_Template, 3, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardListComponent_div_1_Template, 2, 4, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameService.getRound().status < ctx.RoundStatus.REVEAL_CARDS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameService.getRound().status >= ctx.RoundStatus.REVEAL_CARDS);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: [".card.closed.choosing[_ngcontent-%COMP%], .voting[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.card.selected[_ngcontent-%COMP%] {\n  border: #e91e63 solid 4px;\n}\n\n.card.winner[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n\n.card[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  overflow-y: auto;\n  min-width: 200px;\n}\n\n.card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  letter-spacing: normal;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcmQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJjYXJkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC5jbG9zZWQuY2hvb3NpbmcsIC52b3RpbmcgLmNhcmQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQuc2VsZWN0ZWQge1xyXG4gIGJvcmRlcjogI2U5MWU2MyBzb2xpZCA0cHg7XHJcbn1cclxuXHJcbi5jYXJkLndpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5jYXJkIC52YWx1ZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-card-list',
            templateUrl: './card-list.component.html',
            styleUrls: ['./card-list.component.scss']
          }]
        }], function () {
          return [{
            type: src_service_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
          }, {
            type: src_service_card_selection_card_selection_service__WEBPACK_IMPORTED_MODULE_4__["CardSelectionService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "iaKJ":
    /*!******************************************!*\
      !*** ./src/service/game/game.service.ts ***!
      \******************************************/

    /*! exports provided: GameService */

    /***/
    function iaKJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameService", function () {
        return GameService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! socket.io-client */
      "gFX4");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./player */
      "nwNA");
      /* harmony import */


      var _round__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./round */
      "rIm7");
      /* harmony import */


      var _card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./card */
      "1Lq6");
      /* harmony import */


      var _card_selection_card_selection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../card-selection/card-selection.service */
      "CNEd");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var GameService = /*#__PURE__*/function () {
        function GameService(http, snackBar, router, cardSelectionService) {
          _classCallCheck(this, GameService);

          this.http = http;
          this.snackBar = snackBar;
          this.router = router;
          this.cardSelectionService = cardSelectionService;
          this.game = null;
          this.playerId = null;
          this.round = null;
        }

        _createClass(GameService, [{
          key: "get",
          value: function get() {
            return this.game;
          }
        }, {
          key: "getRound",
          value: function getRound() {
            return this.round;
          }
        }, {
          key: "getPlayer",
          value: function getPlayer() {
            return this.player;
          }
        }, {
          key: "getCards",
          value: function getCards() {
            return this.openCards;
          }
        }, {
          key: "getWinnerCard",
          value: function getWinnerCard() {
            return this.winnerCard;
          }
        }, {
          key: "isHost",
          value: function isHost() {
            return this.game.host.id === this.getPlayer().id;
          }
        }, {
          key: "create",
          value: function create() {
            var _this7 = this;

            if (this.game) {
              this.leave();
            }

            var idObserveable = this.http.get('/game/create');
            idObserveable.subscribe(function (ids) {
              _this7.playerId = ids.playerId;

              _this7.getSocket().subscribe(function () {
                console.log('connected');
              });
            });
            return idObserveable;
          }
        }, {
          key: "getSocket",
          value: function getSocket() {
            var _this8 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
              if (_this8.socket) {
                observer.next(_this8.socket);
                observer.complete();
              } else {
                _this8.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].websocket);

                _this8.socket.on('connect', function () {
                  observer.next(_this8.socket);
                  observer.complete();
                });

                _this8.socket.on('player-joined', function (response) {
                  _this8.game = response.game;
                  console.log('Round: ' + _this8.game.round);

                  _this8.snackBar.open(response.newPlayer + ' has joined the game', '', {
                    duration: 2000
                  });

                  console.log('player-joined', response);
                });

                _this8.socket.on('game-update', function (response) {
                  _this8.game = response.game;

                  if (response.msg) {
                    _this8.snackBar.open(response.msg, '', {
                      duration: 2000
                    });
                  }

                  console.log('Round: ' + _this8.game.round);
                  console.log('game-update', response);
                });

                _this8.socket.on('start-round', function (response) {
                  _this8.round = response;
                  _this8.round.status = _round__WEBPACK_IMPORTED_MODULE_6__["RoundStatus"].CHOOSE_CARDS;
                  _this8.winnerCard = null;
                  _this8.openCards = [];
                  console.log('start-round', response);
                });

                _this8.socket.on('reveal-cards', function () {
                  _this8.snackBar.open(_this8.round.choosingPlayer.name + ' reveal cards', '', {
                    duration: 2000
                  });

                  _this8.openCards = [];

                  for (var i = 0; i < _this8.game.player.length - 1; i++) {
                    _this8.openCards.push(new _card__WEBPACK_IMPORTED_MODULE_7__["Card"]());
                  }

                  _this8.round.status = _round__WEBPACK_IMPORTED_MODULE_6__["RoundStatus"].REVEAL_CARDS;
                });

                _this8.socket.on('card-revealed', function (card) {
                  var c = new _card__WEBPACK_IMPORTED_MODULE_7__["Card"]();
                  c.value = card._value;
                  _this8.openCards[card.index] = c;
                });

                _this8.socket.on('start-voting', function () {
                  _this8.round.status = _round__WEBPACK_IMPORTED_MODULE_6__["RoundStatus"].CHOOSE_WINNER;
                });

                _this8.socket.on('winner-selected', function (response) {
                  _this8.game = response.game;
                  console.log('Round: ' + _this8.game.round);
                  _this8.openCards = response.cards;
                  _this8.winnerCard = response.winner;
                  _this8.round.status = _round__WEBPACK_IMPORTED_MODULE_6__["RoundStatus"].START_NEXT_ROUND;
                });
              }
            });
          }
        }, {
          key: "join",
          value: function join(gameId, rawPlayer) {
            var _this9 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
              _this9.emit('/game/join', {
                gameId: gameId,
                player: rawPlayer
              }).subscribe(function () {
                _this9.getSocket().subscribe(function (socket) {
                  _this9.player = new _player__WEBPACK_IMPORTED_MODULE_5__["Player"](rawPlayer.id, rawPlayer.name, socket);
                  observer.next();
                  observer.complete();
                });
              });
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this10 = this;

            console.log('Round: ' + this.game.round);
            return this.emit('/game/start', {
              gameId: this.game.id
            }).subscribe(function () {
              _this10.snackBar.open('Let the games begin', '', {
                duration: 2000
              });
            });
          }
        }, {
          key: "playCard",
          value: function playCard(card) {
            var _this11 = this;

            return this.emit('card-selected', card).subscribe(function () {
              _this11.round.cardPlayed = true;
            });
          }
        }, {
          key: "revealCard",
          value: function revealCard(index) {
            this.emit('card-revealed', {
              index: index
            }).subscribe();
          }
        }, {
          key: "chooseWinner",
          value: function chooseWinner() {
            this.emit('winner-selected', {
              index: this.cardSelectionService.getSelectedCardIdx()
            }).subscribe();
          }
        }, {
          key: "nextRoundVote",
          value: function nextRoundVote() {
            this.emit('next-round-vote', {}).subscribe();
          }
        }, {
          key: "emit",
          value: function emit(route, data) {
            var _this12 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
              _this12.getSocket().subscribe(function (socket) {
                socket.emit(route, data, function (response) {
                  if (response.error) {
                    _this12.snackBar.open(response.reason, '', {
                      duration: 2000
                    });

                    observer.error(response);
                  } else {
                    _this12.game = response.game;
                    console.log('Round: ' + _this12.game.round);
                    observer.next(response);
                    observer.complete();
                  }
                });
              });
            });
          }
        }, {
          key: "leave",
          value: function leave() {
            var _this13 = this;

            this.emit('game/leave', {}).subscribe(function () {
              _this13.router.navigate(['/']);
            });
          }
        }, {
          key: "kick",
          value: function kick(player) {
            this.emit('game/kick', player).subscribe();
          } //--------------------

        }, {
          key: "isRoundStatus",
          value: function isRoundStatus(status) {
            if (this.getRound()) {
              return this.getRound().status === status;
            } else {
              return false;
            }
          }
        }, {
          key: "isChoosingPlayer",
          value: function isChoosingPlayer(player) {
            if (this.getRound()) {
              return this.getRound().choosingPlayer.name === player.name;
            } else {
              return false;
            }
          }
        }]);

        return GameService;
      }();

      GameService.ɵfac = function GameService_Factory(t) {
        return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_card_selection_card_selection_service__WEBPACK_IMPORTED_MODULE_8__["CardSelectionService"]));
      };

      GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GameService,
        factory: GameService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
          }, {
            type: _card_selection_card_selection_service__WEBPACK_IMPORTED_MODULE_8__["CardSelectionService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jBAD":
    /*!****************************************!*\
      !*** ./src/app/game/game.component.ts ***!
      \****************************************/

    /*! exports provided: GameComponent */

    /***/
    function jBAD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
        return GameComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_service_game_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/service/game/game.service */
      "iaKJ");
      /* harmony import */


      var src_service_game_round__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/service/game/round */
      "rIm7");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _game_status_game_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../game-status/game-status.component */
      "QYWb");
      /* harmony import */


      var _round_status_round_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../round-status/round-status.component */
      "M6+A");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _wait_game_start_wait_game_start_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../wait-game-start/wait-game-start.component */
      "OaXM");
      /* harmony import */


      var _gif_board_gif_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../gif-board/gif-board.component */
      "X0CE");
      /* harmony import */


      var _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../card-list/card-list.component */
      "h/Ou");

      function GameComponent_app_wait_game_start_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-wait-game-start", 4);
        }
      }

      function GameComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-gif-board", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var GameComponent = /*#__PURE__*/function () {
        function GameComponent(gameService) {
          _classCallCheck(this, GameComponent);

          this.gameService = gameService;
          this.RoundStatus = src_service_game_round__WEBPACK_IMPORTED_MODULE_2__["RoundStatus"];
        }

        _createClass(GameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GameComponent;
      }();

      GameComponent.ɵfac = function GameComponent_Factory(t) {
        return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_game_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]));
      };

      GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GameComponent,
        selectors: [["app-game"]],
        decls: 6,
        vars: 2,
        consts: [["fxLayout", "row", "fxLayoutGap", "20px", "fxFlex", ""], ["fxFlex", "20", "fxLayout", "column", "fxLayoutAlign", "space-between", 1, "sidenav"], ["fxFlex", "100", 4, "ngIf"], ["fxFlex", "100", "fxLayout", "column", "fxLayoutGap", "1em", 4, "ngIf"], ["fxFlex", "100"], ["fxFlex", "100", "fxLayout", "column", "fxLayoutGap", "1em"], ["fxFlex", "80"], ["fxFlex", "20"]],
        template: function GameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-game-status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-round-status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameComponent_app_wait_game_start_4_Template, 1, 0, "app-wait-game-start", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameComponent_div_5_Template, 3, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameService.get().active);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameService.get().active);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _game_status_game_status_component__WEBPACK_IMPORTED_MODULE_5__["GameStatusComponent"], _round_status_round_status_component__WEBPACK_IMPORTED_MODULE_6__["RoundStatusComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _wait_game_start_wait_game_start_component__WEBPACK_IMPORTED_MODULE_8__["WaitGameStartComponent"], _gif_board_gif_board_component__WEBPACK_IMPORTED_MODULE_9__["GifBoardComponent"], _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_10__["CardListComponent"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  padding: 1em;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-game',
            templateUrl: './game.component.html',
            styleUrls: ['./game.component.scss']
          }]
        }], function () {
          return [{
            type: src_service_game_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nwNA":
    /*!************************************!*\
      !*** ./src/service/game/player.ts ***!
      \************************************/

    /*! exports provided: Player */

    /***/
    function nwNA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Player", function () {
        return Player;
      });

      var Player = /*#__PURE__*/function () {
        function Player(id, name, socket) {
          _classCallCheck(this, Player);

          this._id = null;
          this._name = '';
          this._cards = [];
          this.won = 0;
          this.id = id;
          this.name = name;
          this.socket = socket;
          this.socket.on('new-cards', this.newCardsReceived.bind(this));
        }

        _createClass(Player, [{
          key: "newCardsReceived",
          value: function newCardsReceived(newCards) {
            this.cards = newCards;
          }
        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(value) {
            this._name = value;
          }
        }, {
          key: "cards",
          get: function get() {
            return this._cards;
          },
          set: function set(value) {
            this._cards = value;
          }
        }]);

        return Player;
      }();
      /***/

    },

    /***/
    "p0Sd":
    /*!****************************************!*\
      !*** ./src/service/gif/gif.service.ts ***!
      \****************************************/

    /*! exports provided: GifService */

    /***/
    function p0Sd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GifService", function () {
        return GifService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var GifService = /*#__PURE__*/function () {
        function GifService(http) {
          _classCallCheck(this, GifService);

          this.http = http;
          this.startUrl = 'gif/';
        }

        _createClass(GifService, [{
          key: "trending",
          value: function trending() {
            return this.http.get(this.startUrl + 'trending');
          }
        }, {
          key: "start",
          value: function start() {
            return this.http.get(this.startUrl + 'start');
          }
        }]);

        return GifService;
      }();

      GifService.ɵfac = function GifService_Factory(t) {
        return new (t || GifService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      GifService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GifService,
        factory: GifService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GifService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rIm7":
    /*!***********************************!*\
      !*** ./src/service/game/round.ts ***!
      \***********************************/

    /*! exports provided: RoundStatus, Round */

    /***/
    function rIm7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoundStatus", function () {
        return RoundStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Round", function () {
        return Round;
      });

      var RoundStatus;

      (function (RoundStatus) {
        RoundStatus[RoundStatus["CHOOSE_GIF"] = 0] = "CHOOSE_GIF";
        RoundStatus[RoundStatus["CHOOSE_CARDS"] = 1] = "CHOOSE_CARDS";
        RoundStatus[RoundStatus["REVEAL_CARDS"] = 2] = "REVEAL_CARDS";
        RoundStatus[RoundStatus["CHOOSE_WINNER"] = 3] = "CHOOSE_WINNER";
        RoundStatus[RoundStatus["START_NEXT_ROUND"] = 4] = "START_NEXT_ROUND";
      })(RoundStatus || (RoundStatus = {}));

      var Round = /*#__PURE__*/function () {
        function Round() {
          _classCallCheck(this, Round);
        }

        _createClass(Round, [{
          key: "gif",
          get: function get() {
            return this._gif;
          },
          set: function set(value) {
            this._gif = value;
          }
        }, {
          key: "choosingPlayer",
          get: function get() {
            return this._choosingPlayer;
          },
          set: function set(value) {
            this._choosingPlayer = value;
          }
        }, {
          key: "cardPlayed",
          get: function get() {
            return this._cardPlayed;
          },
          set: function set(value) {
            this._cardPlayed = value;
          }
        }, {
          key: "status",
          get: function get() {
            return this._status;
          },
          set: function set(value) {
            this._status = value;
          }
        }]);

        return Round;
      }();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _join_join_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./join/join.component */
      "UOyo");
      /* harmony import */


      var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./game/game.component */
      "jBAD");
      /* harmony import */


      var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./create/create.component */
      "Khja");
      /* harmony import */


      var _legal_notice_legal_notice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./legal-notice/legal-notice.component */
      "Wxu/");
      /* harmony import */


      var _data_privacy_data_privacy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./data-privacy/data-privacy.component */
      "ENeX");

      var routes = [{
        path: '',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]
      }, {
        path: 'game/:gameId/join',
        component: _join_join_component__WEBPACK_IMPORTED_MODULE_2__["JoinComponent"]
      }, {
        path: 'game/:gameId/play',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]
      }, {
        path: 'legal',
        component: _legal_notice_legal_notice_component__WEBPACK_IMPORTED_MODULE_5__["LegalNoticeComponent"]
      }, {
        path: 'privacy',
        component: _data_privacy_data_privacy_component__WEBPACK_IMPORTED_MODULE_6__["DataPrivacyComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
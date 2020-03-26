function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<app-main-response></app-main-response>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"main-header\">\r\n  <div class=\"logo\" routerLink=\"/\">\r\n    <b>ONE</b>TIME\r\n  </div>\r\n  <!-- <div class=\"navbar-right\">\r\n    Loggout\r\n  </div> -->\r\n</header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading-spinner/loading-spinner.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading-spinner/loading-spinner.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoadingSpinnerLoadingSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"lds-roller\">\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/home/home.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/home/home.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainResponseHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav>\r\n  <a class=\"userName\" title=\"{{ userEmail }}\">{{ name }}</a>\r\n  <a (click)=\"onLogout()\">Logout</a>\r\n</nav>\r\n\r\n<div class=\"main\">\r\n  <div class=\"main-body\">\r\n    <div class=\"outlet\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/home/reports/reports.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/home/reports/reports.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainResponseHomeReportsReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Filter Form -->\r\n<!-- <form [formGroup]=\"filterForm\" class=\"filter-form\">\r\n   <mat-form-field>\r\n    <mat-label>Project</mat-label>\r\n    <mat-select formControlName=\"filterProjectControl\">\r\n      <mat-option>All</mat-option>\r\n      <mat-option *ngFor=\"let project of projects\" [value]=\"project.id\">\r\n        {{ project.name }}</mat-option\r\n      >\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Task</mat-label>\r\n    <mat-select formControlName=\"filterTaskControl\">\r\n      <mat-option>All</mat-option>\r\n      <mat-option *ngFor=\"let task of tasks\" [value]=\"task.id\">\r\n        {{ task.name }}</mat-option\r\n      >\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Status</mat-label>\r\n    <mat-select formControlName=\"filterStatusControl\">\r\n      <mat-option>All</mat-option>\r\n      <mat-option *ngFor=\"let status of statuses\" [value]=\"status.id\">\r\n        {{ status.name }}</mat-option\r\n      >\r\n    </mat-select>\r\n  </mat-form-field>\r\n   <hr />\r\n</form> -->\r\n\r\n<!-- Filter Date Form -->\r\n<!-- <form\r\n  [formGroup]=\"filterDateForm\"\r\n  class=\"filter-form\"\r\n  (ngSubmit)=\"onApplyDateFilters()\"\r\n>\r\n  <mat-form-field>\r\n    <mat-label>From</mat-label>\r\n    <input matInput type=\"date\" formControlName=\"filterFromControl\" required />\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>To</mat-label>\r\n    <input matInput type=\"date\" formControlName=\"filterToControl\" required />\r\n  </mat-form-field>\r\n\r\n  <button\r\n    mat-button\r\n    class=\"btn-custom\"\r\n    [disabled]=\"filterDateForm.invalid || applyBtnDisabled\"\r\n    type=\"submit\"\r\n  >\r\n    Apply\r\n  </button>\r\n  <button\r\n    mat-button\r\n    class=\"btn-custom\"\r\n    [disabled]=\"!applyBtnDisabled || filterDateForm.invalid\"\r\n    (click)=\"onClearFilters()\"\r\n  >\r\n    Clear\r\n  </button>\r\n</form> -->\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- Project Column -->\r\n    <!-- <ng-container matColumnDef=\"project\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        Project\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let report\">\r\n        {{ getProjectById(report.projectId) }}\r\n      </td>\r\n    </ng-container> -->\r\n\r\n    <ng-container matColumnDef=\"creator\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        Creator\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let report\">\r\n        {{ getCreatorEmail(report.creatorEmail)}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Task Column -->\r\n    <!-- <ng-container matColumnDef=\"task\">\r\n      <th mat-header-cell *matHeaderCellDef>Task</th>\r\n      <td mat-cell *matCellDef=\"let report\">\r\n        {{ getTaskById(report.assignmentId) }}\r\n      </td>\r\n    </ng-container> -->\r\n\r\n    <!-- Time Column -->\r\n    <!-- <ng-container matColumnDef=\"time\">\r\n      <th mat-header-cell *matHeaderCellDef>Time</th>\r\n      <td mat-cell *matCellDef=\"let report\">{{ report.time }}</td>\r\n    </ng-container> -->\r\n\r\n    <!-- Overtime Column -->\r\n    <!-- <ng-container matColumnDef=\"overtime\">\r\n      <th mat-header-cell *matHeaderCellDef>Overtime</th>\r\n      <td mat-cell *matCellDef=\"let report\">{{ report.overtime }}</td>\r\n    </ng-container> -->\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef>Name</th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let report\"\r\n        matTooltip=\"{{ report.name }}\"\r\n      >\r\n        {{ report.name }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Description Column -->\r\n    <ng-container matColumnDef=\"description\">\r\n      <th mat-header-cell *matHeaderCellDef>Description</th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let report\"\r\n        matTooltip=\"{{ report.description }}\"\r\n      >\r\n        {{ report.description }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- StartDate Column -->\r\n    <!-- <ng-container matColumnDef=\"startDate\">\r\n      <th mat-header-cell *matHeaderCellDef>Start date</th>\r\n      <td mat-cell *matCellDef=\"let report\">{{ report.startDate }}</td>\r\n    </ng-container> -->\r\n\r\n    <!-- EndDate Column -->\r\n    <!-- <ng-container matColumnDef=\"endDate\">\r\n      <th mat-header-cell *matHeaderCellDef>End date</th>\r\n      <td mat-cell *matCellDef=\"let report\">{{ report.endDate }}</td>\r\n    </ng-container> -->\r\n\r\n\r\n\r\n    <!-- Actions-menu Column -->\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n      <td mat-cell *matCellDef=\"let report\">\r\n        <button\r\n          class=\"btn btn-custom\"\r\n          mat-button\r\n          [matMenuTriggerFor]=\"menu\"\r\n        >\r\n          ...\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item (click)=\"onEdit(report)\">&#9998; Edit</button>\r\n          <button\r\n            mat-menu-item\r\n            (click)=\"onNotify(report)\"\r\n          >\r\n            &#9993; Share\r\n          </button>\r\n          <button mat-menu-item (click)=\"onDelete(report)\">\r\n            &#10006; Delete\r\n          </button>\r\n        </mat-menu>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!--  CHANGE CLASSES PICKER -->\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr\r\n      mat-row\r\n      *matRowDef=\"let report; columns: displayedColumns\"\r\n    ></tr>\r\n  </table>\r\n\r\n  <mat-paginator\r\n    [pageSizeOptions]=\"[5, 10, 15]\"\r\n    showFirstLastButtons\r\n  ></mat-paginator>\r\n</div>\r\n\r\n<!-- Form to input report -->\r\n<div class=\"mat-elevation-z8 report-form\">\r\n  <form [formGroup]=\"reportForm\" (ngSubmit)=\"onSubmit()\">\r\n    <!-- <mat-form-field>\r\n      <mat-label>Select project</mat-label>\r\n      <mat-select\r\n        formControlName=\"projectControl\"\r\n        name=\"projectControl\"\r\n        required\r\n      >\r\n        <mat-option *ngFor=\"let project of projects\" [value]=\"project.id\">\r\n          {{ project.name }}</mat-option\r\n        >\r\n      </mat-select>\r\n    </mat-form-field> -->\r\n\r\n    <!-- <mat-form-field>\r\n      <mat-label>Select task</mat-label>\r\n      <mat-select formControlName=\"taskControl\" name=\"taskControl\" required>\r\n        <mat-option *ngFor=\"let task of tasks\" [value]=\"task.id\">\r\n          {{ task.name }}</mat-option\r\n        >\r\n      </mat-select>\r\n    </mat-form-field> -->\r\n\r\n    <!-- <mat-form-field>\r\n      <mat-label>Time</mat-label>\r\n      <input\r\n        matInput\r\n        formControlName=\"timeControl\"\r\n        type=\"number\"\r\n        min=\"0\"\r\n        step=\"0.5\"\r\n        pattern=\"^(([1-9][0-9]?)|(0))((\\.(?=0|5)+(0|5))?)$\"\r\n        name=\"timeControl\"\r\n        required\r\n      />\r\n    </mat-form-field> -->\r\n\r\n    <!-- <mat-form-field>\r\n      <mat-label>Overtime</mat-label>\r\n      <input\r\n        matInput\r\n        formControlName=\"overtimeControl\"\r\n        type=\"number\"\r\n        min=\"0\"\r\n        step=\"0.5\"\r\n        pattern=\"^(([1-9][0-9]?)|(0))((\\.(?=0|5)+(0|5))?)$\"\r\n        name=\"overtimeControl\"\r\n        required\r\n      />\r\n    </mat-form-field> -->\r\n\r\n    <mat-form-field class=\"description\">\r\n      <mat-label>Name</mat-label>\r\n      <input\r\n        matInput\r\n        type=\"text\"\r\n        formControlName=\"nameControl\"\r\n        name=\"nameControl\"\r\n        required\r\n      >\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"description\">\r\n      <mat-label>Description</mat-label>\r\n      <textarea\r\n        matInput\r\n        class=\"description\"\r\n        formControlName=\"descriptionControl\"\r\n        name=\"descriptionControl\"\r\n        required\r\n      >\r\n      </textarea>\r\n    </mat-form-field>\r\n\r\n    <!-- <mat-form-field>\r\n      <mat-label>Start date</mat-label>\r\n      <input\r\n        matInput\r\n        type=\"date\"\r\n        formControlName=\"startDateControl\"\r\n        name=\"startDateControl\"\r\n        required\r\n      />\r\n      <span *ngIf=\"reportForm.get('startDateControl').hasError('weekendDay')\"\r\n        >You need to sleep on weekend!!!</span\r\n      >\r\n    </mat-form-field> -->\r\n\r\n    <!-- <mat-form-field>\r\n      <mat-label>End date</mat-label>\r\n      <input\r\n        matInput\r\n        type=\"date\"\r\n        formControlName=\"endDateControl\"\r\n        name=\"endDateControl\"\r\n        required\r\n      />\r\n    </mat-form-field> -->\r\n\r\n    <button\r\n      mat-button\r\n      *ngIf=\"!isEdited\"\r\n      class=\"btn-custom\"\r\n      type=\"submit\"\r\n      [disabled]=\"reportForm.invalid\"\r\n    >\r\n      Add report\r\n    </button>\r\n\r\n    <button\r\n      mat-button\r\n      *ngIf=\"isEdited\"\r\n      class=\"btn-custom edit\"\r\n      type=\"submit\"\r\n      [disabled]=\"reportForm.invalid\"\r\n    >\r\n      &#10004;\r\n    </button>\r\n    <button\r\n      mat-button\r\n      *ngIf=\"isEdited\"\r\n      class=\"btn-custom edit\"\r\n      [disabled]=\"reportForm.invalid\"\r\n      (click)=\"onCancel()\"\r\n    >\r\n      &#10006;\r\n    </button>\r\n  </form>\r\n</div>\r\n<!-- <button (click)=\"onGet()\">GET</button> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/home/share-with-dialog/share-with-dialog.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/home/share-with-dialog/share-with-dialog.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainResponseHomeShareWithDialogShareWithDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"new-event-dialog\">\r\n  <h1>Share this project with...</h1>\r\n\r\n  <div mat-dialog-content class=\"main-container\">\r\n    <form [formGroup]=\"shareForm\" >\r\n      <mat-form-field>\r\n        <mat-label>Users</mat-label>\r\n        <mat-select formControlName=\"usersToShareWith\" multiple>\r\n          <mat-option *ngFor=\"let user of users\" [value]=\"user.id\">\r\n            {{ user.email }}</mat-option\r\n          >\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </form>\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <button mat-button (click)=\"onNoClick()\" class=\"submit-button\">Ok</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/loginin-form/loginin-form.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/loginin-form/loginin-form.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainResponseLogininFormLogininFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"container\">\r\n  <form\r\n    class=\"registration-form\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n    [formGroup]=\"loginInForm\"\r\n  >\r\n    <div class=\"form-text-div\">\r\n      <strong>Login In</strong>\r\n    </div>\r\n\r\n    <div class=\"div-for-field\">\r\n      <label for=\"userEmail\">Email</label>\r\n      <input\r\n        formControlName=\"userEmail\"\r\n        name=\"userEmail\"\r\n        type=\"email\"\r\n        class=\"field\"\r\n        placeholder=\"example@gmail.com\"\r\n      />\r\n\r\n      <span *ngIf=\"loginInForm.get('userEmail').hasError('doesNotRegistered')\"\r\n        >Email does not registered!</span\r\n      >\r\n    </div>\r\n\r\n    <div class=\"div-for-field\">\r\n      <label for=\"userPassword\">Password</label>\r\n      <input\r\n        formControlName=\"userPassword\"\r\n        name=\"userPassword\"\r\n        type=\"password\"\r\n        class=\"field\"\r\n      />\r\n      <span\r\n        *ngIf=\"\r\n          loginInForm.get('userPassword').hasError('incorrectPassword') &&\r\n          loginInForm.get('userPassword').touched\r\n        \"\r\n        >Incorrect password for this account!</span\r\n      >\r\n    </div>\r\n\r\n    <div class=\"div-for-field\">\r\n      <input\r\n        type=\"submit\"\r\n        value=\"Submit\"\r\n        class=\"submit-button\"\r\n        [disabled]=\"loginInForm.invalid\"\r\n      />\r\n    </div>\r\n\r\n    <a routerLink=\"/registration\">Do not have an account?</a>\r\n  </form>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/main-response.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/main-response.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainResponseMainResponseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"loading-div\" *ngIf=\"isLoading\">\r\n  <app-loading-spinner></app-loading-spinner>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/registration-form/registration-form.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/registration-form/registration-form.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainResponseRegistrationFormRegistrationFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"container\">\r\n  <form\r\n    class=\"registration-form\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n    [formGroup]=\"registrationForm\"\r\n  >\r\n    <div class=\"form-text-div\">\r\n      <strong>Sign Up</strong>\r\n    </div>\r\n\r\n    <div class=\"div-for-field\">\r\n      <label for=\"userName\">Name</label>\r\n      <input\r\n        formControlName=\"userName\"\r\n        name=\"userName\"\r\n        type=\"text\"\r\n        class=\"field\"\r\n        placeholder=\"Sam\"\r\n      />\r\n      <span\r\n        *ngIf=\"\r\n          registrationForm.get('userName').hasError('incorrectName') &&\r\n          registrationForm.get('userName').touched\r\n        \"\r\n        >Only 1 Latin word! First letter Upper! No number!\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"div-for-field\">\r\n      <label for=\"userSurname\">Surname</label>\r\n      <input\r\n        formControlName=\"userSurname\"\r\n        name=\"userSurname\"\r\n        type=\"text\"\r\n        class=\"field\"\r\n        placeholder=\"Smith\"\r\n      />\r\n      <span\r\n        *ngIf=\"\r\n          registrationForm.get('userSurname').hasError('incorrectSurname') &&\r\n          registrationForm.get('userSurname').touched\r\n        \"\r\n        >Only 1 Latin word! First letter Upper! No number!\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"div-for-field\">\r\n      <label for=\"userEmail\">Email</label>\r\n      <input\r\n        formControlName=\"userEmail\"\r\n        name=\"userEmail\"\r\n        type=\"email\"\r\n        class=\"field\"\r\n        placeholder=\"example@gmail.com\"\r\n      />\r\n      <span\r\n        *ngIf=\"\r\n          registrationForm.get('userEmail').hasError('incorrectEmail') &&\r\n          registrationForm.get('userEmail').touched\r\n        \"\r\n        >Started with letter! Without special symbols!</span\r\n      >\r\n      <span\r\n        *ngIf=\"registrationForm.get('userEmail').hasError('alreadyRegistered')\"\r\n        >Email already registered!</span\r\n      >\r\n    </div>\r\n\r\n    <div formGroupName=\"passwords\">\r\n      <div class=\"div-for-field\">\r\n        <label for=\"userPassword\">Password</label>\r\n        <input\r\n          formControlName=\"userPassword\"\r\n          name=\"userPassword\"\r\n          type=\"password\"\r\n          class=\"field\"\r\n        />\r\n        <span\r\n          *ngIf=\"\r\n            registrationForm\r\n              .get('passwords')\r\n              .get('userPassword')\r\n              .hasError('doesNotStrongPassword') &&\r\n            registrationForm.get('passwords').get('userPassword').touched\r\n          \"\r\n          >At least: 1 upper & lowercase letter, 1 number, 1 special symbol, 8\r\n          characters!</span\r\n        >\r\n      </div>\r\n\r\n      <div class=\"div-for-field\">\r\n        <label for=\"userConfirmPassword\">Confirm Password</label>\r\n        <input\r\n          formControlName=\"userConfirmPassword\"\r\n          name=\"userConfirmPassword\"\r\n          type=\"password\"\r\n          class=\"field\"\r\n        />\r\n        <span\r\n          *ngIf=\"\r\n            registrationForm.get('passwords').hasError('passwordsDoNotMatch') &&\r\n            registrationForm.get('passwords').touched\r\n          \"\r\n        >\r\n          Passwords do not match!</span\r\n        >\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"div-for-field\">\r\n      <input\r\n        type=\"submit\"\r\n        value=\"Submit\"\r\n        class=\"submit-button\"\r\n        [disabled]=\"registrationForm.invalid\"\r\n      />\r\n    </div>\r\n\r\n    <a routerLink=\"/login\">Already have an account?</a>\r\n  </form>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/successfully-registered-dialog/successfully-registered-dialog.component.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/successfully-registered-dialog/successfully-registered-dialog.component.html ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainResponseSuccessfullyRegisteredDialogSuccessfullyRegisteredDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"new-event-dialog\">\n  <h1>Welcome, {{ userName }}!!!</h1>\n  <p>We hope you'll enjoy our app :)</p>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\" class=\"submit-button\">Thanks!</button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/welcome-page/welcome-page.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/welcome-page/welcome-page.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainResponseWelcomePageWelcomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav >\r\n<a [routerLink]=\"'/login'\">Sign in</a>\r\n<a [routerLink]=\"'/registration'\">Sign up</a>\r\n</nav>\r\n<main>\r\n<div class=\"left-part\">\r\n    <div class=\"card\">\r\n        <p class=\"heading\">Welcome to OneTime</p>\r\n   <p class=\"text\">OneTime is a simple task-managment service</p>\r\n</div>\r\n</div>\r\n<div class=\"right-part\">\r\n    <app-registration-form></app-registration-form>\r\n</div>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-webstorage-service */
    "./node_modules/ngx-webstorage-service/fesm2015/ngx-webstorage-service.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_app_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/app/app.component */
    "./src/app/components/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_main_response_main_response_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/main-response/main-response.component */
    "./src/app/components/main-response/main-response.component.ts");
    /* harmony import */


    var _components_main_response_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/main-response/registration-form/registration-form.component */
    "./src/app/components/main-response/registration-form/registration-form.component.ts");
    /* harmony import */


    var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/loading-spinner/loading-spinner.component */
    "./src/app/components/loading-spinner/loading-spinner.component.ts");
    /* harmony import */


    var _services_sign_in_up_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/sign-in-up.service */
    "./src/app/services/sign-in-up.service.ts");
    /* harmony import */


    var _validators_sign_in_up_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./validators/sign-in-up.validator */
    "./src/app/validators/sign-in-up.validator.ts");
    /* harmony import */


    var _components_main_response_successfully_registered_dialog_successfully_registered_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/main-response/successfully-registered-dialog/successfully-registered-dialog.component */
    "./src/app/components/main-response/successfully-registered-dialog/successfully-registered-dialog.component.ts");
    /* harmony import */


    var _components_main_response_loginin_form_loginin_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/main-response/loginin-form/loginin-form.component */
    "./src/app/components/main-response/loginin-form/loginin-form.component.ts");
    /* harmony import */


    var _components_main_response_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/main-response/home/home.component */
    "./src/app/components/main-response/home/home.component.ts");
    /* harmony import */


    var _components_main_response_home_reports_reports_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/main-response/home/reports/reports.component */
    "./src/app/components/main-response/home/reports/reports.component.ts");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _services_report_http_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/report-http.service */
    "./src/app/services/report-http.service.ts");
    /* harmony import */


    var _validators_reports_validator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./validators/reports.validator */
    "./src/app/validators/reports.validator.ts");
    /* harmony import */


    var _services_is_loading_emitter_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/is-loading-emitter.service */
    "./src/app/services/is-loading-emitter.service.ts");
    /* harmony import */


    var _components_main_response_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/main-response/welcome-page/welcome-page.component */
    "./src/app/components/main-response/welcome-page/welcome-page.component.ts");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _components_main_response_home_share_with_dialog_share_with_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/main-response/home/share-with-dialog/share-with-dialog.component */
    "./src/app/components/main-response/home/share-with-dialog/share-with-dialog.component.ts");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");

    var appRoutes = [{
      path: "",
      component: _components_main_response_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_24__["WelcomePageComponent"]
    }, {
      path: "login",
      component: _components_main_response_loginin_form_loginin_form_component__WEBPACK_IMPORTED_MODULE_17__["LogininFormComponent"]
    }, {
      path: "registration",
      component: _components_main_response_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationFormComponent"]
    }, {
      path: "home",
      component: _components_main_response_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]],
      children: [{
        path: "reportslist",
        component: _components_main_response_home_reports_reports_component__WEBPACK_IMPORTED_MODULE_19__["ReportsComponent"]
      }]
    }, {
      path: "**",
      redirectTo: "/home"
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_main_response_main_response_component__WEBPACK_IMPORTED_MODULE_11__["MainResponseComponent"], _components_main_response_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationFormComponent"], _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_13__["LoadingSpinnerComponent"], _components_main_response_successfully_registered_dialog_successfully_registered_dialog_component__WEBPACK_IMPORTED_MODULE_16__["SuccessfullyRegisteredDialogComponent"], _components_main_response_loginin_form_loginin_form_component__WEBPACK_IMPORTED_MODULE_17__["LogininFormComponent"], _components_main_response_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _components_main_response_home_reports_reports_component__WEBPACK_IMPORTED_MODULE_19__["ReportsComponent"], _components_main_response_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_24__["WelcomePageComponent"], _components_main_response_home_share_with_dialog_share_with_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ShareTaskWithDialogComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_7__["StorageServiceModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes), _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ScrollingModule"]],
      entryComponents: [_components_main_response_successfully_registered_dialog_successfully_registered_dialog_component__WEBPACK_IMPORTED_MODULE_16__["SuccessfullyRegisteredDialogComponent"], _components_main_response_home_share_with_dialog_share_with_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ShareTaskWithDialogComponent"]],
      providers: [_services_sign_in_up_service__WEBPACK_IMPORTED_MODULE_14__["SignInUpService"], _validators_sign_in_up_validator__WEBPACK_IMPORTED_MODULE_15__["SignInUpValidator"], _services_report_http_service__WEBPACK_IMPORTED_MODULE_21__["ReportService"], _validators_reports_validator__WEBPACK_IMPORTED_MODULE_22__["ReportValidator"], _services_is_loading_emitter_service__WEBPACK_IMPORTED_MODULE_23__["IsPageLoading"]],
      bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/app/app.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/components/app/app.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/app/app.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/app/app.component.ts ***!
    \*************************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppComponentsAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_sign_in_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/sign-in-up.service */
    "./src/app/services/sign-in-up.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(signInUpService) {
        _classCallCheck(this, AppComponent);

        this.signInUpService = signInUpService;
        this.title = "OneTime";
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signInUpService.autoLogin();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.signInUpService.logout();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: src_app_services_sign_in_up_service__WEBPACK_IMPORTED_MODULE_2__["SignInUpService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/components/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  z-index: 100;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: #ca5c50;\n}\n.main-header .logo {\n  padding: 1.5%;\n  font-family: \"Montserrat\", sans-serif;\n  color: #f0e9d7;\n  font-size: 3.2vw;\n  cursor: pointer;\n}\n@media (max-width: 450px) {\n  .main-header .logo {\n    font-size: 10vw;\n    min-height: -webkit-fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n  }\n}\n.main-header .logo:focus {\n  outline: none;\n}\n@media (max-width: 450px) {\n  .main-header {\n    min-height: -webkit-fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n    padding-bottom: 1vw;\n    padding-top: 1vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXEpPQlxcT25lVGltZVxcT25lVGltZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0FGO0FERUU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7QURFSTtFQVBGO0lBUUksZUFBQTtJQUNBLCtCQUFBO0lBQUEsNEJBQUE7SUFBQSx1QkFBQTtFQ0NKO0FBQ0Y7QURLRTtFQUNFLGFBQUE7QUNISjtBRE1FO0VBaENGO0lBaUNJLCtCQUFBO0lBQUEsNEJBQUE7SUFBQSx1QkFBQTtJQUVBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taGVhZGVyIHtcclxuICAvLyBwb3NpdGlvbjogc3RhdGljO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYTVjNTA7XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHBhZGRpbmc6IDEuNSU7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2YwZTlkNztcclxuICAgIGZvbnQtc2l6ZTogMy4ydnc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTB2dztcclxuICAgICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMXZ3O1xyXG4gICAgICAvLyBwYWRkaW5nLXRvcDogMXZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ286Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDF2dztcclxuICAgIHBhZGRpbmctdG9wOiAxdnc7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhNWM1MDtcbn1cbi5tYWluLWhlYWRlciAubG9nbyB7XG4gIHBhZGRpbmc6IDEuNSU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmMGU5ZDc7XG4gIGZvbnQtc2l6ZTogMy4ydnc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAubWFpbi1oZWFkZXIgLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMTB2dztcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxufVxuLm1haW4taGVhZGVyIC5sb2dvOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAubWFpbi1oZWFkZXIge1xuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxdnc7XG4gICAgcGFkZGluZy10b3A6IDF2dztcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/loading-spinner/loading-spinner.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/loading-spinner/loading-spinner.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoadingSpinnerLoadingSpinnerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  -webkit-transform-origin: 40px 40px;\n          transform-origin: 40px 40px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #f0e9d7;\n  margin: -4px 0 0 -4px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nLXNwaW5uZXIvRDpcXEpPQlxcT25lVGltZVxcT25lVGltZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9hZGluZy1zcGlubmVyXFxsb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0Usd0VBQUE7VUFBQSxnRUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0dGOztBRERBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ0lGOztBREZBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNLRjs7QURIQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNNRjs7QURKQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDT0Y7O0FETEE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDUUY7O0FETkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ1NGOztBRFBBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ1VGOztBRFJBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNXRjs7QURUQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNZRjs7QURWQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDYUY7O0FEWEE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDY0Y7O0FEWkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ2VGOztBRGJBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ2dCRjs7QURkQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDaUJGOztBRGZBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ2tCRjs7QURoQkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ21CRjs7QURqQkE7RUFDRTtJQUNFLCtCQUFBO1lBQUEsdUJBQUE7RUNvQkY7RURsQkE7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDb0JGO0FBQ0Y7O0FEMUJBO0VBQ0U7SUFDRSwrQkFBQTtZQUFBLHVCQUFBO0VDb0JGO0VEbEJBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ29CRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1yb2xsZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdiB7XHJcbiAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDdweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogI2YwZTlkNztcclxuICBtYXJnaW46IC00cHggMCAwIC00cHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xyXG4gIHRvcDogNjNweDtcclxuICBsZWZ0OiA2M3B4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcclxuICB0b3A6IDY4cHg7XHJcbiAgbGVmdDogNTZweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XHJcbiAgdG9wOiA3MXB4O1xyXG4gIGxlZnQ6IDQ4cHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiA0MHB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xyXG4gIHRvcDogNzFweDtcclxuICBsZWZ0OiAzMnB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcclxuICB0b3A6IDY4cHg7XHJcbiAgbGVmdDogMjRweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XHJcbiAgdG9wOiA2M3B4O1xyXG4gIGxlZnQ6IDE3cHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xyXG4gIHRvcDogNTZweDtcclxuICBsZWZ0OiAxMnB4O1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIiwiLmxkcy1yb2xsZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2IHtcbiAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2YwZTlkNztcbiAgbWFyZ2luOiAtNHB4IDAgMCAtNHB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgdG9wOiA2M3B4O1xuICBsZWZ0OiA2M3B4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgdG9wOiA2OHB4O1xuICBsZWZ0OiA1NnB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgdG9wOiA3MXB4O1xuICBsZWZ0OiA0OHB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgdG9wOiA3MnB4O1xuICBsZWZ0OiA0MHB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICB0b3A6IDcxcHg7XG4gIGxlZnQ6IDMycHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDI0cHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICB0b3A6IDYzcHg7XG4gIGxlZnQ6IDE3cHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuICB0b3A6IDU2cHg7XG4gIGxlZnQ6IDEycHg7XG59XG5cbkBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/loading-spinner/loading-spinner.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/loading-spinner/loading-spinner.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LoadingSpinnerComponent */

  /***/
  function srcAppComponentsLoadingSpinnerLoadingSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function () {
      return LoadingSpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoadingSpinnerComponent =
    /*#__PURE__*/
    function () {
      function LoadingSpinnerComponent() {
        _classCallCheck(this, LoadingSpinnerComponent);
      }

      _createClass(LoadingSpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingSpinnerComponent;
    }();

    LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loading-spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading-spinner/loading-spinner.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loading-spinner.component.scss */
      "./src/app/components/loading-spinner/loading-spinner.component.scss")).default]
    })], LoadingSpinnerComponent);
    /***/
  },

  /***/
  "./src/app/components/main-response/home/home.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/main-response/home/home.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainResponseHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\n  position: fixed;\n  top: 3vh;\n  right: 5vw;\n  font-size: 1.5em;\n  cursor: pointer;\n  z-index: 100;\n}\nnav a {\n  text-decoration: none;\n  color: white;\n  margin: 1vw;\n}\nnav a:hover {\n  color: black;\n}\nnav .userName:hover {\n  color: white;\n}\n.nav-tabs {\n  margin: 0% 0%;\n}\na {\n  color: #ece9e1;\n}\na:hover {\n  color: black;\n}\ndiv .filter-line {\n  margin: 5% 0%;\n}\ndiv .filter-header {\n  display: inline;\n}\ndiv .select-block {\n  margin: 0% 0% 0% 0%;\n  display: inline;\n}\n.main {\n  margin-top: 4.1vw;\n  margin-bottom: 3vw;\n  z-index: -4;\n}\n.main-body {\n  margin: 0% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL2hvbWUvRDpcXEpPQlxcT25lVGltZVxcT25lVGltZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpbi1yZXNwb25zZVxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNERjtBREtFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0hKO0FESUk7RUFDRSxZQUFBO0FDRk47QURPSTtFQUNFLFlBQUE7QUNMTjtBRGNBO0VBQ0UsYUFBQTtBQ1hGO0FEY0E7RUFDRSxjQUFBO0FDWEY7QURjQTtFQUNFLFlBQUE7QUNYRjtBRGVFO0VBQ0UsYUFBQTtBQ1pKO0FEZUU7RUFDRSxlQUFBO0FDYko7QURnQkU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNkSjtBRGtCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDZkY7QURrQkE7RUFDRSxhQUFBO0FDZkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tcmVzcG9uc2UvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhY2tncm91bmQtbWFpbjogI2NhYzViOTc5O1xyXG5cclxubmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzdmg7XHJcbiAgcmlnaHQ6IDV2dztcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG5cclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDF2dztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXNlck5hbWUge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uYXYtYmFyIHtcclxuICAvLyBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLm5hdi10YWJzIHtcclxuICBtYXJnaW46IDAlIDAlO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogI2VjZTllMTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5kaXYge1xyXG4gIC5maWx0ZXItbGluZSB7XHJcbiAgICBtYXJnaW46IDUlIDAlO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLnNlbGVjdC1ibG9jayB7XHJcbiAgICBtYXJnaW46IDAlIDAlIDAlIDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDQuMXZ3O1xyXG4gIG1hcmdpbi1ib3R0b206IDN2dztcclxuICB6LWluZGV4OiAtNDtcclxufVxyXG5cclxuLm1haW4tYm9keSB7XHJcbiAgbWFyZ2luOiAwJSA1JTtcclxufVxyXG5cclxuXHJcbiIsIm5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzdmg7XG4gIHJpZ2h0OiA1dnc7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwO1xufVxubmF2IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxdnc7XG59XG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cbm5hdiAudXNlck5hbWU6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXYtdGFicyB7XG4gIG1hcmdpbjogMCUgMCU7XG59XG5cbmEge1xuICBjb2xvcjogI2VjZTllMTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuZGl2IC5maWx0ZXItbGluZSB7XG4gIG1hcmdpbjogNSUgMCU7XG59XG5kaXYgLmZpbHRlci1oZWFkZXIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5kaXYgLnNlbGVjdC1ibG9jayB7XG4gIG1hcmdpbjogMCUgMCUgMCUgMCU7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLm1haW4ge1xuICBtYXJnaW4tdG9wOiA0LjF2dztcbiAgbWFyZ2luLWJvdHRvbTogM3Z3O1xuICB6LWluZGV4OiAtNDtcbn1cblxuLm1haW4tYm9keSB7XG4gIG1hcmdpbjogMCUgNSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/main-response/home/home.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/main-response/home/home.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsMainResponseHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_sign_in_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/sign-in-up.service */
    "./src/app/services/sign-in-up.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(signInUp, router, route) {
        _classCallCheck(this, HomeComponent);

        this.signInUp = signInUp;
        this.router = router;
        this.route = route;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.navigate(["reportslist"], {
            relativeTo: this.route
          });
          this.name = JSON.parse(localStorage.getItem("userData")).firstName + " " + JSON.parse(localStorage.getItem("userData")).secondName;
          this.userEmail = JSON.parse(localStorage.getItem("userData")).email;
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.signInUp.logout();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_sign_in_up_service__WEBPACK_IMPORTED_MODULE_2__["SignInUpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/components/main-response/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/main-response/home/reports/reports.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/components/main-response/home/reports/reports.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainResponseHomeReportsReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-custom {\n  background-color: #ca5c50;\n  color: white;\n}\n\n.mat-table {\n  margin: 0;\n  table-layout: fixed;\n}\n\n.mat-table .mat-row {\n  color: #fefefe;\n  background-color: #e4e4e7;\n  border-bottom: 2px solid #595959;\n}\n\n.mat-table .mat-header-cell {\n  background-color: #595959;\n}\n\n.mat-cell {\n  color: #1b1b1b;\n}\n\nmat-paginator {\n  background-color: #595959;\n}\n\n::ng-deep .mat-tooltip {\n  font-size: 12px;\n  text-overflow: clip;\n  white-space: normal;\n  word-break: break-all;\n}\n\n.basic-field {\n  color: #fefefe;\n  background-color: #e4e4e7;\n}\n\n.mat-form-field {\n  font-size: 14px;\n}\n\nth,\ntd {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.progress {\n  background-color: #afd6ff !important;\n}\n\n.done {\n  background-color: #a8edb8 !important;\n}\n\n.report-form {\n  width: 100%;\n  padding: 2vm;\n  background: rgba(0, 0, 0, 0.404);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.report-form .mat-form-field {\n  margin: 1vw;\n  width: 8vw;\n}\n\n.report-form .description {\n  width: 16vw;\n}\n\n.report-form button {\n  margin: 1vw;\n}\n\n.report-form .edit {\n  margin: 5px;\n  width: 1vw;\n}\n\ntextarea {\n  color: white;\n}\n\ninput {\n  color: white;\n}\n\n.checkbox-margin {\n  margin: 0 10px;\n}\n\n.filter-form {\n  background: rgba(0, 0, 0, 0.404);\n}\n\n.filter-form mat-form-field {\n  margin: 1vw;\n}\n\n.filter-form button {\n  margin: 1vw;\n}\n\nspan {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL2hvbWUvcmVwb3J0cy9EOlxcSk9CXFxPbmVUaW1lXFxPbmVUaW1lL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluLXJlc3BvbnNlXFxob21lXFxyZXBvcnRzXFxyZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4tcmVzcG9uc2UvaG9tZS9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0UseUJBSFk7RUFJWixZQUFBO0FDakJGOztBRHFCQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQ2xCRjs7QURvQkU7RUFDRSxjQTFCUztFQTJCVCx5QkE1QlU7RUE2QlYsZ0NBQUE7QUNsQko7O0FEcUJFO0VBQ0UseUJBekJXO0FDTWY7O0FEd0JBO0VBQ0UsY0FBQTtBQ3JCRjs7QUR3QkE7RUFFRSx5QkFwQ2E7QUNjZjs7QUR5QkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDdEJGOztBRHlCQTtFQUNFLGNBdERXO0VBdURYLHlCQXhEWTtBQ2tDZDs7QUR5QkE7RUFDRSxlQUFBO0FDdEJGOztBRHlCQTs7RUFFRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN0QkY7O0FEMEJBO0VBQ0Usb0NBQUE7QUN2QkY7O0FEMEJBO0VBQ0Usb0NBQUE7QUN2QkY7O0FEMkJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDeEJGOztBRDJCRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDekJKOztBRDZCRTtFQUNFLFdBQUE7QUMzQko7O0FEOEJFO0VBQ0UsV0FBQTtBQzVCSjs7QUQrQkU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQzdCSjs7QURtQ0E7RUFDRSxZQUFBO0FDaENGOztBRG1DQTtFQUNFLFlBQUE7QUNoQ0Y7O0FEbUNBO0VBQ0UsY0FBQTtBQ2hDRjs7QURtQ0E7RUFDRSxnQ0FBQTtBQ2hDRjs7QURtQ0E7RUFDRSxXQUFBO0FDakNGOztBRG9DQTtFQUNFLFdBQUE7QUNsQ0Y7O0FEcUNBO0VBQ0UsWUFBQTtBQ2xDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1yZXNwb25zZS9ob21lL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAtYmV0YS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7XHJcblxyXG4kY29sb3ItYmFzaWM6ICNlNGU0ZTc7XHJcbiR0ZXh0LWJhc2ljOiAjZmVmZWZlO1xyXG4vLyAkY29sb3Itbm90aWZpZWQ6ICM5NGI2ZGI7XHJcbi8vICR0ZXh0LW5vdGlmaWVkOiAjMDA0MDg1O1xyXG4vLyAkY29sb3ItYWNjZXB0ZWQ6ICM1ZWU3OGM7XHJcbi8vICR0ZXh0LWFjY2VwdGVkOiAjMTU1NzI0O1xyXG4vLyAkY29sb3ItZGVjbGluZWQ6ICNjODcyN2E7XHJcbi8vICR0ZXh0LWRlY2xpbmVkOiAjNzIxYzI0O1xyXG4kdGFibGUtaGVhZGVyOiAjNTk1OTU5O1xyXG5cclxuJGRhbmdlcjogI2Y4ZDdkYTtcclxuJGluZm86ICNhZmQ2ZmY7XHJcbiRzdWNjZXNzOiAjYThlZGI4O1xyXG5cclxuJGNvbG9yLXRoZW1lOiAjY2E1YzUwO1xyXG5cclxuLmJ0bi1jdXN0b20ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10aGVtZTtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG4ubWF0LXRhYmxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuXHJcbiAgLm1hdC1yb3cge1xyXG4gICAgY29sb3I6ICR0ZXh0LWJhc2ljO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJhc2ljO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR0YWJsZS1oZWFkZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1oZWFkZXI7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1hdC1jZWxsIHtcclxuICBjb2xvcjogIzFiMWIxYjtcclxufVxyXG5cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgLy9jb2xvcjogJHRleHQtYmFzaWM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRhYmxlLWhlYWRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdG9vbHRpcCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbi5iYXNpYy1maWVsZCB7XHJcbiAgY29sb3I6ICR0ZXh0LWJhc2ljO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iYXNpYztcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbnRoLFxyXG50ZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vLyBTVFlMRVMgRk9SIFJPV1MgSU4gVEFCTEUgREVQRU5EUyBPTiBTVEFUVVNcclxuLnByb2dyZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5mbyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZG9uZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3MgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5yZXBvcnQtZm9ybXtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAydm07XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQwNCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgbWFyZ2luOiAxdnc7XHJcbiAgICB3aWR0aDogOHZ3O1xyXG5cclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogMTZ2dztcclxuICB9XHJcblxyXG4gIGJ1dHRvbntcclxuICAgIG1hcmdpbjogMXZ3O1xyXG4gIH1cclxuXHJcbiAgLmVkaXR7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiAxdnc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbnRleHRhcmVhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jaGVja2JveC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyLWZvcm17XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQwNCk7XHJcblxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMXZ3O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgbWFyZ2luOiAxdnc7XHJcbn1cclxufVxyXG5zcGFuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIiwiLmJ0bi1jdXN0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E1YzUwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtdGFibGUge1xuICBtYXJnaW46IDA7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4ubWF0LXRhYmxlIC5tYXQtcm93IHtcbiAgY29sb3I6ICNmZWZlZmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTc7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTk1OTU5O1xufVxuLm1hdC10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTk1OTtcbn1cblxuLm1hdC1jZWxsIHtcbiAgY29sb3I6ICMxYjFiMWI7XG59XG5cbm1hdC1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xufVxuXG46Om5nLWRlZXAgLm1hdC10b29sdGlwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5iYXNpYy1maWVsZCB7XG4gIGNvbG9yOiAjZmVmZWZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU3O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbnRoLFxudGQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnByb2dyZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmZDZmZiAhaW1wb3J0YW50O1xufVxuXG4uZG9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGVkYjggIWltcG9ydGFudDtcbn1cblxuLnJlcG9ydC1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJ2bTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQwNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlcG9ydC1mb3JtIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogMXZ3O1xuICB3aWR0aDogOHZ3O1xufVxuLnJlcG9ydC1mb3JtIC5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxNnZ3O1xufVxuLnJlcG9ydC1mb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbjogMXZ3O1xufVxuLnJlcG9ydC1mb3JtIC5lZGl0IHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAxdnc7XG59XG5cbnRleHRhcmVhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoZWNrYm94LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uZmlsdGVyLWZvcm0ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcbn1cbi5maWx0ZXItZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogMXZ3O1xufVxuLmZpbHRlci1mb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbjogMXZ3O1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/main-response/home/reports/reports.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/main-response/home/reports/reports.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ReportsComponent */

  /***/
  function srcAppComponentsMainResponseHomeReportsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
      return ReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_report_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/report-http.service */
    "./src/app/services/report-http.service.ts");
    /* harmony import */


    var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! bootstrap/dist/js/bootstrap.bundle */
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
    /* harmony import */


    var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_is_loading_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/is-loading-emitter.service */
    "./src/app/services/is-loading-emitter.service.ts");

    var ReportsComponent =
    /*#__PURE__*/
    function () {
      function ReportsComponent(reportService, pageLoading) {
        _classCallCheck(this, ReportsComponent);

        this.reportService = reportService;
        this.pageLoading = pageLoading;
        this.isEdited = false;
        this.applyBtnDisabled = false; // Displayed columns in the main table

        this.displayedColumns = ["creator", "name", "description", "actions"];
        this.reports = new Array();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.reports);
      }

      _createClass(ReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.pageLoading.isLoading.next(true);
          this.createReportForm();
          this.reportForm.reset();
          this.onGet();

          this.dataSource._updateChangeSubscription();

          this.pageLoading.isLoading.next(false);
        }
      }, {
        key: "createReportForm",
        value: function createReportForm() {
          this.reportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(24)]),
            descriptionControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)])
          });
        }
      }, {
        key: "onClearFilters",
        value: function onClearFilters() {
          this.dataSource.data = this.reports;
          this.applyBtnDisabled = false;
        } // pushing new report to array

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.pageLoading.isLoading.next(true);
          var reportData = {
            name: this.reportForm.get("nameControl").value,
            description: this.reportForm.get("descriptionControl").value,
            creatorEmail: JSON.parse(localStorage.getItem("userData")).email
          };

          if (this.isEdited) {
            reportData.id = this.currentReportId;
          }

          if (this.isEdited) {
            this.isEdited = false;
            reportData.id = this.currentReportId;
            var currReport = this.reportService.putData(reportData, this.currentReportId);
            this.pageLoading.isLoading.next(false);
            this.dataSource.data[this.currentReportIndex] = currReport;

            this.dataSource._updateChangeSubscription();
          } else {
            // CHANGE TO GET ID FROM POST RESPONSE
            var report = this.reportService.postData(reportData);
            this.pageLoading.isLoading.next(false);
            this.dataSource.data.push(report);

            this.dataSource._updateChangeSubscription();
          } // reseting form


          this.reportForm.reset();
        } // LATER CHANGE
        // delete current report from array, set its values on form

      }, {
        key: "onEdit",
        value: function onEdit(report) {
          this.isEdited = true;
          this.currentReportId = report.id;
          this.reportForm.reset();
          this.reportForm.patchValue({
            nameControl: report.name
          });
          this.reportForm.patchValue({
            descriptionControl: report.description
          });
          var index = this.dataSource.data.indexOf(report);

          if (index !== -1) {
            this.currentReportIndex = index;
          } else {
            console.log("onEdit: cant find index of report in dataSource");
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.isEdited = false;
          this.currentReportIndex = -1;
          this.currentReportId = -1;
          this.reportForm.reset();
        } // change report status CHANGE

      }, {
        key: "onNotify",
        value: function onNotify(report) {
          this.pageLoading.isLoading.next(true);
          this.reportService.shareReport(report);
          this.pageLoading.isLoading.next(false);
        }
      }, {
        key: "onGet",
        value: function onGet() {
          this.pageLoading.isLoading.next(true);
          this.user = JSON.parse(localStorage.getItem("userData"));
          this.reports = this.reportService.getData(this.user.id);
          this.dataSource.data = this.reports;
          console.log(this.dataSource.data);

          this.dataSource._updateChangeSubscription();
        }
      }, {
        key: "onDelete",
        value: function onDelete(report) {
          this.dataSource.data = this.reportService.deleteData(report);
          this.pageLoading.isLoading.next(false);

          this.dataSource._updateChangeSubscription();
        }
      }, {
        key: "getCreatorEmail",
        value: function getCreatorEmail(email) {
          return email === this.user.email ? "Me" : email;
        }
      }]);

      return ReportsComponent;
    }();

    ReportsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_report_http_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
      }, {
        type: src_app_services_is_loading_emitter_service__WEBPACK_IMPORTED_MODULE_6__["IsPageLoading"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], {
      static: true
    })], ReportsComponent.prototype, "paginator", void 0);
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-reports",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/home/reports/reports.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reports.component.scss */
      "./src/app/components/main-response/home/reports/reports.component.scss")).default]
    })], ReportsComponent);
    /***/
  },

  /***/
  "./src/app/components/main-response/home/share-with-dialog/share-with-dialog.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/components/main-response/home/share-with-dialog/share-with-dialog.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainResponseHomeShareWithDialogShareWithDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".new-event-dialog {\n  font-family: \"Montserrat\", sans-serif;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  line-height: 2em;\n  padding-right: 0.7em;\n  padding-left: 0.7em;\n}\n.new-event-dialog h1 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: wrap column;\n}\n.new-event-dialog p {\n  margin-top: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: wrap column;\n}\n.new-event-dialog .main-container {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.new-event-dialog .main-container .subcontainer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  margin: 10px 20px;\n  max-width: 19vw;\n}\n.new-event-dialog .main-container .subcontainer p {\n  margin: 0;\n  font-size: 2em;\n}\n.new-event-dialog .main-container .subcontainer span {\n  margin-bottom: 10px;\n}\n.new-event-dialog .main-container .subcontainer .description {\n  word-wrap: break-word;\n  font-size: 1.5em;\n  margin-bottom: 10px;\n}\n.new-event-dialog .main-container .subcontainer .details {\n  font-size: 1.35em;\n}\n.new-event-dialog .main-container .subcontainer .example-viewport {\n  height: 115px;\n  width: 18vw;\n  border: 1px solid rgba(216, 211, 211, 0.986);\n  border-radius: 5px;\n}\n.new-event-dialog .main-container .subcontainer .example-viewport .example-item {\n  height: 35px;\n  padding: 0;\n  margin-bottom: 20px;\n}\n.new-event-dialog .main-container .subcontainer .example-viewport .example-item p {\n  font-size: 20px;\n  margin: 0;\n}\n.new-event-dialog .submit-button {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1em;\n  padding: 0.5em;\n  margin-bottom: 15px;\n  color: white;\n  border: white 2px solid;\n  background-color: #0a0a0a00;\n  border-radius: 50px;\n  box-shadow: 0 4px 14px 4px rgba(24, 23, 23, 0.705);\n  min-width: 100px;\n  cursor: pointer;\n}\n.new-event-dialog .submit-button:hover {\n  background-color: #615f5e;\n}\n.new-event-dialog .submit-button:active {\n  background-color: #9c3623;\n}\n@media (max-width: 450px) {\n  body {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL2hvbWUvc2hhcmUtd2l0aC1kaWFsb2cvRDpcXEpPQlxcT25lVGltZVxcT25lVGltZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpbi1yZXNwb25zZVxcaG9tZVxcc2hhcmUtd2l0aC1kaWFsb2dcXHNoYXJlLXdpdGgtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4tcmVzcG9uc2UvaG9tZS9zaGFyZS13aXRoLWRpYWxvZy9zaGFyZS13aXRoLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBRUEsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQUo7QURJRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNGSjtBREtFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDSEo7QURJSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRk47QURJTTtFQUNFLFNBQUE7RUFDQSxjQUFBO0FDRlI7QURLTTtFQUNFLG1CQUFBO0FDSFI7QURNTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxtQkFBQTtBQ05SO0FEU007RUFDRSxpQkFBQTtBQ1BSO0FEV007RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUNUUjtBRFdRO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ1RWO0FEV1U7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ1RaO0FEaUJFO0VBQ0UscUNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFFQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDaEJKO0FEa0JFO0VBQ0UseUJBQUE7QUNoQko7QURrQkU7RUFDRSx5QkFBQTtBQ2hCSjtBRG9CQTtFQUNFO0lBQ0UsVUFBQTtFQ2pCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL2hvbWUvc2hhcmUtd2l0aC1kaWFsb2cvc2hhcmUtd2l0aC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWV2ZW50LWRpYWxvZyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMC43ZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjdlbTtcclxuXHJcbiAgaDEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBmbGV4LWZsb3c6IHdyYXAgY29sdW1uO1xyXG4gIH1cclxuICAvLyBib3gtc2hhZG93OiAwIDVweCA1MHB4IDEycHggcmdiYSgzNywgMzYsIDM2LCAwLjcwNSk7XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogd3JhcCBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAuc3ViY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBtYXJnaW46IDEwcHggMjBweDtcclxuICAgICAgbWF4LXdpZHRoOiAxOXZ3IDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxNiwgMjExLCAyMTEsIDAuOTg2KTtcclxuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjM1ZW07XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAuZXhhbXBsZS12aWV3cG9ydCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTVweDtcclxuICAgICAgICB3aWR0aDogMTh2dztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxNiwgMjExLCAyMTEsIDAuOTg2KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIC5leGFtcGxlLWl0ZW0ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdWJtaXQtYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMGEwYTAwO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IDRweCByZ2JhKDI0LCAyMywgMjMsIDAuNzA1KTtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTUsIDk0KTtcclxuICB9XHJcbiAgLnN1Ym1pdC1idXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTYsIDU0LCAzNSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICBib2R5IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcbiIsIi5uZXctZXZlbnQtZGlhbG9nIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuN2VtO1xuICBwYWRkaW5nLWxlZnQ6IDAuN2VtO1xufVxuLm5ldy1ldmVudC1kaWFsb2cgaDEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXAgY29sdW1uO1xufVxuLm5ldy1ldmVudC1kaWFsb2cgcCB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiB3cmFwIGNvbHVtbjtcbn1cbi5uZXctZXZlbnQtZGlhbG9nIC5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5uZXctZXZlbnQtZGlhbG9nIC5tYWluLWNvbnRhaW5lciAuc3ViY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDEwcHggMjBweDtcbiAgbWF4LXdpZHRoOiAxOXZ3O1xufVxuLm5ldy1ldmVudC1kaWFsb2cgLm1haW4tY29udGFpbmVyIC5zdWJjb250YWluZXIgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyZW07XG59XG4ubmV3LWV2ZW50LWRpYWxvZyAubWFpbi1jb250YWluZXIgLnN1YmNvbnRhaW5lciBzcGFuIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5uZXctZXZlbnQtZGlhbG9nIC5tYWluLWNvbnRhaW5lciAuc3ViY29udGFpbmVyIC5kZXNjcmlwdGlvbiB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5uZXctZXZlbnQtZGlhbG9nIC5tYWluLWNvbnRhaW5lciAuc3ViY29udGFpbmVyIC5kZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxLjM1ZW07XG59XG4ubmV3LWV2ZW50LWRpYWxvZyAubWFpbi1jb250YWluZXIgLnN1YmNvbnRhaW5lciAuZXhhbXBsZS12aWV3cG9ydCB7XG4gIGhlaWdodDogMTE1cHg7XG4gIHdpZHRoOiAxOHZ3O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxNiwgMjExLCAyMTEsIDAuOTg2KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm5ldy1ldmVudC1kaWFsb2cgLm1haW4tY29udGFpbmVyIC5zdWJjb250YWluZXIgLmV4YW1wbGUtdmlld3BvcnQgLmV4YW1wbGUtaXRlbSB7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5uZXctZXZlbnQtZGlhbG9nIC5tYWluLWNvbnRhaW5lciAuc3ViY29udGFpbmVyIC5leGFtcGxlLXZpZXdwb3J0IC5leGFtcGxlLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuLm5ldy1ldmVudC1kaWFsb2cgLnN1Ym1pdC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHdoaXRlIDJweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMGEwYTAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IDRweCByZ2JhKDI0LCAyMywgMjMsIDAuNzA1KTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5ldy1ldmVudC1kaWFsb2cgLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE1ZjVlO1xufVxuLm5ldy1ldmVudC1kaWFsb2cgLnN1Ym1pdC1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMzYyMztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIGJvZHkge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/main-response/home/share-with-dialog/share-with-dialog.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/components/main-response/home/share-with-dialog/share-with-dialog.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: ShareTaskWithDialogComponent */

  /***/
  function srcAppComponentsMainResponseHomeShareWithDialogShareWithDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareTaskWithDialogComponent", function () {
      return ShareTaskWithDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ShareTaskWithDialogComponent =
    /*#__PURE__*/
    function () {
      function ShareTaskWithDialogComponent(dialogRef, reportData) {
        _classCallCheck(this, ShareTaskWithDialogComponent);

        this.dialogRef = dialogRef;
        this.reportData = reportData;
      }

      _createClass(ShareTaskWithDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.shareForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            usersToShareWith: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
          });
          console.log(this.reportData);
          this.users = JSON.parse(localStorage.getItem("usersData"));
          console.log(this.users);
          this.users.splice(this.users.indexOf(this.users.find(function (user) {
            return user.email === _this.reportData.creatorEmail;
          })), 1);
          console.log(this.users);
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          var shareToUserId = this.shareForm.get("usersToShareWith").value;
          this.dialogRef.close(shareToUserId);
        }
      }]);

      return ShareTaskWithDialogComponent;
    }();

    ShareTaskWithDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ShareTaskWithDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-project-info-dialog",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./share-with-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/home/share-with-dialog/share-with-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./share-with-dialog.component.scss */
      "./src/app/components/main-response/home/share-with-dialog/share-with-dialog.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ShareTaskWithDialogComponent);
    /***/
  },

  /***/
  "./src/app/components/main-response/loginin-form/loginin-form.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/main-response/loginin-form/loginin-form.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainResponseLogininFormLogininFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat&display=swap\");\n.container {\n  width: 100%;\n  height: 91%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.container .registration-form {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 1.5vw;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #cac5b9;\n  box-shadow: 0 5px 50px 12px rgba(37, 36, 36, 0.705);\n  border-radius: 10px;\n  font-family: \"Montserrat\", sans-serif;\n  color: #5f5530;\n}\n.container .registration-form .form-text-div {\n  flex-wrap: wrap;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 2vh;\n  font-size: calc(1vw + 3vh);\n}\n.container .registration-form .div-for-field {\n  margin: 0.5vw;\n  margin-right: 1.5vw;\n  margin-left: 1.5vw;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  max-width: 260px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n@media (max-width: 450px) {\n  .container .registration-form .div-for-field {\n    font-size: 1em;\n    margin: 0.7vw;\n    margin-right: 3.5vw;\n    margin-left: 3.5vw;\n  }\n}\n.container .registration-form .div-for-field label {\n  font-weight: bold;\n}\n.container .registration-form .field {\n  padding-left: 2%;\n  padding-right: 2%;\n  font-size: 1.7em;\n  font-family: \"Montserrat\", sans-serif;\n  border: #757373 2px solid;\n  background-color: #e7e5e5;\n  border-radius: 5px;\n}\n.container .registration-form .red-border {\n  border-color: red;\n}\n.container .registration-form .submit-button {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.5em;\n  padding: 0.5em;\n  color: #e7e5e5;\n  border: none;\n  background-color: #ca5c50;\n  border-radius: 50px;\n  box-shadow: 0 4px 14px 4px rgba(105, 104, 104, 0.705);\n  min-width: 100px;\n  cursor: pointer;\n}\n@media (max-width: 450px) {\n  .container .registration-form .submit-button {\n    font-size: 1.2em;\n    min-width: 60px;\n  }\n}\n.container .registration-form .submit-button:hover {\n  background-color: #c98c81;\n}\n.container .registration-form .submit-button:active {\n  background-color: #db482e;\n}\n.container .registration-form .submit-button:disabled {\n  background-color: #6a6e6b;\n  color: #e7e5e5;\n  cursor: no-drop;\n}\n@media (max-width: 450px) {\n  .container .registration-form .submit-button:disabled {\n    font-size: 1.2em;\n    min-width: 60px;\n  }\n}\n.container .registration-form a {\n  color: #424141;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL2xvZ2luaW4tZm9ybS9EOlxcSk9CXFxPbmVUaW1lXFxPbmVUaW1lL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluLXJlc3BvbnNlXFxsb2dpbmluLWZvcm1cXGxvZ2luaW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL2xvZ2luaW4tZm9ybS9sb2dpbmluLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFFUjtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBRjtBREVFO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0VBRUEscUNBQUE7RUFDQSxjQUFBO0FDREo7QURHSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNETjtBRElJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNGTjtBRElNO0VBVkY7SUFXSSxjQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUNETjtBQUNGO0FER007RUFDRSxpQkFBQTtBQ0RSO0FES0k7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0hOO0FETUk7RUFDRSxpQkFBQTtBQ0pOO0FET0k7RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTk47QURRTTtFQWJGO0lBY0ksZ0JBQUE7SUFDQSxlQUFBO0VDTE47QUFDRjtBRFFJO0VBQ0UseUJBQUE7QUNOTjtBRFFJO0VBQ0UseUJBQUE7QUNOTjtBRFFJO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ05OO0FEVU07RUFQRjtJQVFJLGdCQUFBO0lBQ0EsZUFBQTtFQ1BOO0FBQ0Y7QURVSTtFQUNFLGNBQUE7QUNSTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1yZXNwb25zZS9sb2dpbmluLWZvcm0vbG9naW5pbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkxJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLnJlZ2lzdHJhdGlvbi1mb3JtIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDEuNXZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjNWI5O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNTBweCAxMnB4IHJnYmEoMzcsIDM2LCAzNiwgMC43MDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzVmNTUzMDtcclxuXHJcbiAgICAuZm9ybS10ZXh0LWRpdiB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBwYWRkaW5nOiAydmg7XHJcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxdncgKyAzdmgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtZm9yLWZpZWxkIHtcclxuICAgICAgbWFyZ2luOiAwLjV2dztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjV2dztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEuNXZ3O1xyXG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBtYXgtd2lkdGg6IDI2MHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIG1hcmdpbjogMC43dnc7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzLjV2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMy41dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGJvcmRlcjogcmdiKDExNywgMTE1LCAxMTUpIDJweCBzb2xpZDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjI5LCAyMjkpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZC1ib3JkZXIge1xyXG4gICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VibWl0LWJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgIGNvbG9yOiByZ2IoMjMxLCAyMjksIDIyOSk7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NhNWM1MDtcclxuXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggNHB4IHJnYmEoMTA1LCAxMDQsIDEwNCwgMC43MDUpO1xyXG4gICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMTQwLCAxMjkpO1xyXG4gICAgfVxyXG4gICAgLnN1Ym1pdC1idXR0b246YWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgNzIsIDQ2KTtcclxuICAgIH1cclxuICAgIC5zdWJtaXQtYnV0dG9uOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNiwgMTEwLCAxMDcpO1xyXG4gICAgICBjb2xvcjogcmdiKDIzMSwgMjI5LCAyMjkpO1xyXG4gICAgICBjdXJzb3I6IG5vLWRyb3A7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAvLyBmb250LXNpemU6IDEuNWVtO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IHJnYig2NiwgNjUsIDY1KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXBcIik7XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTElO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnJlZ2lzdHJhdGlvbi1mb3JtIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAxLjV2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWM1Yjk7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDUwcHggMTJweCByZ2JhKDM3LCAzNiwgMzYsIDAuNzA1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzVmNTUzMDtcbn1cbi5jb250YWluZXIgLnJlZ2lzdHJhdGlvbi1mb3JtIC5mb3JtLXRleHQtZGl2IHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDJ2aDtcbiAgZm9udC1zaXplOiBjYWxjKDF2dyArIDN2aCk7XG59XG4uY29udGFpbmVyIC5yZWdpc3RyYXRpb24tZm9ybSAuZGl2LWZvci1maWVsZCB7XG4gIG1hcmdpbjogMC41dnc7XG4gIG1hcmdpbi1yaWdodDogMS41dnc7XG4gIG1hcmdpbi1sZWZ0OiAxLjV2dztcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAyNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNvbnRhaW5lciAucmVnaXN0cmF0aW9uLWZvcm0gLmRpdi1mb3ItZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbjogMC43dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiAzLjV2dztcbiAgICBtYXJnaW4tbGVmdDogMy41dnc7XG4gIH1cbn1cbi5jb250YWluZXIgLnJlZ2lzdHJhdGlvbi1mb3JtIC5kaXYtZm9yLWZpZWxkIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5yZWdpc3RyYXRpb24tZm9ybSAuZmllbGQge1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6ICM3NTczNzMgMnB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlNWU1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udGFpbmVyIC5yZWdpc3RyYXRpb24tZm9ybSAucmVkLWJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuLmNvbnRhaW5lciAucmVnaXN0cmF0aW9uLWZvcm0gLnN1Ym1pdC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBjb2xvcjogI2U3ZTVlNTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E1YzUwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IDRweCByZ2JhKDEwNSwgMTA0LCAxMDQsIDAuNzA1KTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluZXIgLnJlZ2lzdHJhdGlvbi1mb3JtIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgfVxufVxuLmNvbnRhaW5lciAucmVnaXN0cmF0aW9uLWZvcm0gLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzk4YzgxO1xufVxuLmNvbnRhaW5lciAucmVnaXN0cmF0aW9uLWZvcm0gLnN1Ym1pdC1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNDgyZTtcbn1cbi5jb250YWluZXIgLnJlZ2lzdHJhdGlvbi1mb3JtIC5zdWJtaXQtYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhNmU2YjtcbiAgY29sb3I6ICNlN2U1ZTU7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuY29udGFpbmVyIC5yZWdpc3RyYXRpb24tZm9ybSAuc3VibWl0LWJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtaW4td2lkdGg6IDYwcHg7XG4gIH1cbn1cbi5jb250YWluZXIgLnJlZ2lzdHJhdGlvbi1mb3JtIGEge1xuICBjb2xvcjogIzQyNDE0MTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/main-response/loginin-form/loginin-form.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/main-response/loginin-form/loginin-form.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: LogininFormComponent */

  /***/
  function srcAppComponentsMainResponseLogininFormLogininFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogininFormComponent", function () {
      return LogininFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_sign_in_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/sign-in-up.service */
    "./src/app/services/sign-in-up.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_is_loading_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/is-loading-emitter.service */
    "./src/app/services/is-loading-emitter.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // import { ErrorResponseDialogComponent } from "../error-response-dialog/error-response-dialog.component";
    // import { LocalStorageService } from "src/app/services/local-storage.service";


    var LogininFormComponent =
    /*#__PURE__*/
    function () {
      function LogininFormComponent(signInUpService, dialog, // private localStorageService: LocalStorageService,
      loading, router) {
        _classCallCheck(this, LogininFormComponent);

        this.signInUpService = signInUpService;
        this.dialog = dialog;
        this.loading = loading;
        this.router = router;
        this.error = null;
      }

      _createClass(LogininFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            userPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.removeRedBorders();

          if (this.loginInForm.invalid) {
            return;
          }

          var loginInData = {
            email: this.loginInForm.get("userEmail").value,
            password: this.loginInForm.get("userPassword").value
          }; // this.loading.isLoading.next(true);

          console.log("start login in"); // this.signInUpService.singIn(loginInData).subscribe(
          //   responseData => {
          //     this.loading.isLoading.next(false);
          //     console.log("end");
          //     this.loginInForm.reset();
          //     this.router.navigate(["/home"]);
          //   },
          //   errorData => {
          //     this.loading.isLoading.next(false);
          //     console.log(errorData);
          //     if (errorData === "There is no email") {
          //       this.getRedBorderEmailInput();
          //     } else if (errorData === "Bad password") {
          //       this.getRedBorderPasswordInput();
          //     } else if (errorData.name === "HttpErrorResponse") {
          //       this.openErrorResponseDialog(errorData.message);
          //     }
          //   }
          // );

          this.loading.isLoading.next(true);
          var success = this.signInUpService.singIn(loginInData);

          if (success.success) {
            this.loading.isLoading.next(false);
            console.log("end");
            this.loginInForm.reset();
            this.router.navigate(["/home"]);
          } else {
            this.loading.isLoading.next(false);
            console.log(success.errorMessage);

            if (success.errorMessage === "There is no email") {
              this.getRedBorderEmailInput();
            } else if (success.errorMessage === "Bad password") {
              this.getRedBorderPasswordInput();
            }
          }
        }
      }, {
        key: "removeRedBorders",
        value: function removeRedBorders() {
          var emailInput = document.getElementsByName("userEmail")[0];
          emailInput.classList.remove("red-border");
          var passwordInput = document.getElementsByName("userPassword")[0];
          passwordInput.classList.remove("red-border");
        }
      }, {
        key: "getRedBorderEmailInput",
        value: function getRedBorderEmailInput() {
          this.loginInForm.get("userEmail").setErrors({
            doesNotRegistered: true
          });
          var emailInput = document.getElementsByName("userEmail")[0];
          emailInput.classList.add("red-border");
        }
      }, {
        key: "getRedBorderPasswordInput",
        value: function getRedBorderPasswordInput() {
          this.loginInForm.get("userPassword").setErrors({
            incorrectPassword: true
          });
          var passwordInput = document.getElementsByName("userPassword")[0];
          passwordInput.classList.add("red-border");
        }
      }]);

      return LogininFormComponent;
    }();

    LogininFormComponent.ctorParameters = function () {
      return [{
        type: src_app_services_sign_in_up_service__WEBPACK_IMPORTED_MODULE_3__["SignInUpService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: src_app_services_is_loading_emitter_service__WEBPACK_IMPORTED_MODULE_5__["IsPageLoading"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    LogininFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-loginin-form",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loginin-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/loginin-form/loginin-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loginin-form.component.scss */
      "./src/app/components/main-response/loginin-form/loginin-form.component.scss")).default]
    })], LogininFormComponent);
    /***/
  },

  /***/
  "./src/app/components/main-response/main-response.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/main-response/main-response.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainResponseMainResponseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat&display=swap\");\n.loading-div {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: rgba(66, 65, 65, 0.281);\n  z-index: 1000;\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL0Q6XFxKT0JcXE9uZVRpbWVcXE9uZVRpbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW4tcmVzcG9uc2VcXG1haW4tcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1yZXNwb25zZS9tYWluLXJlc3BvbnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhFQUFBO0FBRVI7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tcmVzcG9uc2UvbWFpbi1yZXNwb25zZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuLmxvYWRpbmctZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA2NSwgNjUsIDAuMjgxKTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuXHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwXCIpO1xuLmxvYWRpbmctZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsIDY1LCA2NSwgMC4yODEpO1xuICB6LWluZGV4OiAxMDAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/main-response/main-response.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/main-response/main-response.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MainResponseComponent */

  /***/
  function srcAppComponentsMainResponseMainResponseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainResponseComponent", function () {
      return MainResponseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_is_loading_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/is-loading-emitter.service */
    "./src/app/services/is-loading-emitter.service.ts");

    var MainResponseComponent =
    /*#__PURE__*/
    function () {
      function MainResponseComponent(loading) {
        _classCallCheck(this, MainResponseComponent);

        this.loading = loading;
        this.isLoading = false;
      }

      _createClass(MainResponseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.loading.isLoading.subscribe(function (loading) {
            _this2.isLoading = loading;
          });
        }
      }]);

      return MainResponseComponent;
    }();

    MainResponseComponent.ctorParameters = function () {
      return [{
        type: src_app_services_is_loading_emitter_service__WEBPACK_IMPORTED_MODULE_2__["IsPageLoading"]
      }];
    };

    MainResponseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-main-response",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-response.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/main-response.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-response.component.scss */
      "./src/app/components/main-response/main-response.component.scss")).default]
    })], MainResponseComponent);
    /***/
  },

  /***/
  "./src/app/components/main-response/registration-form/registration-form.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/main-response/registration-form/registration-form.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainResponseRegistrationFormRegistrationFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat&display=swap\");\n.container {\n  width: 100%;\n  height: 91%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.container .registration-form {\n  margin-top: 5vw;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 1.5vw;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #cac5b9;\n  box-shadow: 0 5px 50px 12px rgba(37, 36, 36, 0.705);\n  border-radius: 10px;\n  font-family: \"Montserrat\", sans-serif;\n  color: #5f5530;\n}\n.container .registration-form .form-text-div {\n  flex-wrap: wrap;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 2vh;\n  font-size: calc(1vw + 3vh);\n}\n.container .registration-form .div-for-field {\n  margin: 0.5vw;\n  margin-right: 1.5vw;\n  margin-left: 1.5vw;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  max-width: 260px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n@media (max-width: 450px) {\n  .container .registration-form .div-for-field {\n    font-size: 1em;\n    margin: 0.7vw;\n    margin-right: 3.5vw;\n    margin-left: 3.5vw;\n  }\n}\n.container .registration-form .div-for-field label {\n  font-weight: bold;\n}\n.container .registration-form div .div-for-field {\n  margin: 0.5vw;\n  margin-right: 1.5vw;\n  margin-left: 1.5vw;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  max-width: 260px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n@media (max-width: 450px) {\n  .container .registration-form div .div-for-field {\n    font-size: 1em;\n    margin: 0.7vw;\n    margin-right: 3.5vw;\n    margin-left: 3.5vw;\n  }\n}\n.container .registration-form .field {\n  padding-left: 2%;\n  padding-right: 2%;\n  font-size: 1.7em;\n  font-family: \"Montserrat\", sans-serif;\n  border: #757373 2px solid;\n  background-color: #e7e5e5;\n  border-radius: 5px;\n}\n.container .registration-form .red-border {\n  border-color: red;\n}\n.container .registration-form .submit-button {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.5em;\n  padding: 0.5em;\n  color: #e7e5e5;\n  border: none;\n  background-color: #ca5c50;\n  border-radius: 50px;\n  box-shadow: 0 4px 14px 4px rgba(105, 104, 104, 0.705);\n  min-width: 100px;\n  cursor: pointer;\n}\n@media (max-width: 450px) {\n  .container .registration-form .submit-button {\n    font-size: 1.2em;\n    min-width: 60px;\n  }\n}\n.container .registration-form .submit-button:hover {\n  background-color: #c98c81;\n}\n.container .registration-form .submit-button:active {\n  background-color: #db482e;\n}\n.container .registration-form .submit-button:disabled {\n  background-color: #6a6e6b;\n  color: #e7e5e5;\n  cursor: no-drop;\n}\n@media (max-width: 450px) {\n  .container .registration-form .submit-button:disabled {\n    font-size: 1.2em;\n    min-width: 60px;\n  }\n}\n.container .registration-form a {\n  color: #424141;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL3JlZ2lzdHJhdGlvbi1mb3JtL0Q6XFxKT0JcXE9uZVRpbWVcXE9uZVRpbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW4tcmVzcG9uc2VcXHJlZ2lzdHJhdGlvbi1mb3JtXFxyZWdpc3RyYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL3JlZ2lzdHJhdGlvbi1mb3JtL3JlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhFQUFBO0FBR1I7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDREY7QURHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1EQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQ0FBQTtFQUNBLGNBQUE7QUNGSjtBRElJO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0ZOO0FES0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0hOO0FES007RUFWRjtJQVdJLGNBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ0ZOO0FBQ0Y7QURJTTtFQUNFLGlCQUFBO0FDRlI7QURZTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDVlI7QURZUTtFQVZGO0lBV0ksY0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VDVFI7QUFDRjtBRGFJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNYTjtBRGNJO0VBQ0UsaUJBQUE7QUNaTjtBRGVJO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsbUJBQUE7RUFDQSxxREFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2ROO0FEZ0JNO0VBYkY7SUFjSSxnQkFBQTtJQUNBLGVBQUE7RUNiTjtBQUNGO0FEZ0JJO0VBQ0UseUJBQUE7QUNkTjtBRGdCSTtFQUNFLHlCQUFBO0FDZE47QURnQkk7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDZE47QURnQk07RUFMRjtJQU1JLGdCQUFBO0lBQ0EsZUFBQTtFQ2JOO0FBQ0Y7QURnQkk7RUFDRSxjQUFBO0FDZE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tcmVzcG9uc2UvcmVnaXN0cmF0aW9uLWZvcm0vcmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkxJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLnJlZ2lzdHJhdGlvbi1mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDV2dztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDEuNXZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjNWI5O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNTBweCAxMnB4IHJnYmEoMzcsIDM2LCAzNiwgMC43MDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzVmNTUzMDtcclxuXHJcbiAgICAuZm9ybS10ZXh0LWRpdiB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBwYWRkaW5nOiAydmg7XHJcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxdncgKyAzdmgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtZm9yLWZpZWxkIHtcclxuICAgICAgbWFyZ2luOiAwLjV2dztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjV2dztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEuNXZ3O1xyXG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBtYXgtd2lkdGg6IDI2MHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIG1hcmdpbjogMC43dnc7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzLjV2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMy41dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIC5wYXNzd29yZC1kbnQtbWF0Y2gge1xyXG4gICAgLy8gICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIC5kaXYtZm9yLWZpZWxkIHtcclxuICAgICAgICBtYXJnaW46IDAuNXZ3O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41dnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXZ3O1xyXG4gICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAuN3Z3O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzLjV2dztcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzLjV2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmllbGQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICAgICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICBib3JkZXI6IHJnYigxMTcsIDExNSwgMTE1KSAycHggc29saWQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIyOSwgMjI5KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWQtYm9yZGVyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICBjb2xvcjogcmdiKDIzMSwgMjI5LCAyMjkpO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYTVjNTA7XHJcblxyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IDRweCByZ2JhKDEwNSwgMTA0LCAxMDQsIDAuNzA1KTtcclxuICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3VibWl0LWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE0MCwgMTI5KTtcclxuICAgIH1cclxuICAgIC5zdWJtaXQtYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDcyLCA0Nik7XHJcbiAgICB9XHJcbiAgICAuc3VibWl0LWJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDYsIDExMCwgMTA3KTtcclxuICAgICAgY29sb3I6IHJnYigyMzEsIDIyOSwgMjI5KTtcclxuICAgICAgY3Vyc29yOiBuby1kcm9wO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IHJnYig2NiwgNjUsIDY1KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXBcIik7XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTElO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnJlZ2lzdHJhdGlvbi1mb3JtIHtcbiAgbWFyZ2luLXRvcDogNXZ3O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDEuNXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhYzViOTtcbiAgYm94LXNoYWRvdzogMCA1cHggNTBweCAxMnB4IHJnYmEoMzcsIDM2LCAzNiwgMC43MDUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNWY1NTMwO1xufVxuLmNvbnRhaW5lciAucmVnaXN0cmF0aW9uLWZvcm0gLmZvcm0tdGV4dC1kaXYge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMnZoO1xuICBmb250LXNpemU6IGNhbGMoMXZ3ICsgM3ZoKTtcbn1cbi5jb250YWluZXIgLnJlZ2lzdHJhdGlvbi1mb3JtIC5kaXYtZm9yLWZpZWxkIHtcbiAgbWFyZ2luOiAwLjV2dztcbiAgbWFyZ2luLXJpZ2h0OiAxLjV2dztcbiAgbWFyZ2luLWxlZnQ6IDEuNXZ3O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDI2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuY29udGFpbmVyIC5yZWdpc3RyYXRpb24tZm9ybSAuZGl2LWZvci1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luOiAwLjd2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNXZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAzLjV2dztcbiAgfVxufVxuLmNvbnRhaW5lciAucmVnaXN0cmF0aW9uLWZvcm0gLmRpdi1mb3ItZmllbGQgbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnJlZ2lzdHJhdGlvbi1mb3JtIGRpdiAuZGl2LWZvci1maWVsZCB7XG4gIG1hcmdpbjogMC41dnc7XG4gIG1hcmdpbi1yaWdodDogMS41dnc7XG4gIG1hcmdpbi1sZWZ0OiAxLjV2dztcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAyNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNvbnRhaW5lciAucmVnaXN0cmF0aW9uLWZvcm0gZGl2IC5kaXYtZm9yLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW46IDAuN3Z3O1xuICAgIG1hcmdpbi1yaWdodDogMy41dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDMuNXZ3O1xuICB9XG59XG4uY29udGFpbmVyIC5yZWdpc3RyYXRpb24tZm9ybSAuZmllbGQge1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6ICM3NTczNzMgMnB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlNWU1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udGFpbmVyIC5yZWdpc3RyYXRpb24tZm9ybSAucmVkLWJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuLmNvbnRhaW5lciAucmVnaXN0cmF0aW9uLWZvcm0gLnN1Ym1pdC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBjb2xvcjogI2U3ZTVlNTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E1YzUwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IDRweCByZ2JhKDEwNSwgMTA0LCAxMDQsIDAuNzA1KTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluZXIgLnJlZ2lzdHJhdGlvbi1mb3JtIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgfVxufVxuLmNvbnRhaW5lciAucmVnaXN0cmF0aW9uLWZvcm0gLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzk4YzgxO1xufVxuLmNvbnRhaW5lciAucmVnaXN0cmF0aW9uLWZvcm0gLnN1Ym1pdC1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNDgyZTtcbn1cbi5jb250YWluZXIgLnJlZ2lzdHJhdGlvbi1mb3JtIC5zdWJtaXQtYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhNmU2YjtcbiAgY29sb3I6ICNlN2U1ZTU7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuY29udGFpbmVyIC5yZWdpc3RyYXRpb24tZm9ybSAuc3VibWl0LWJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtaW4td2lkdGg6IDYwcHg7XG4gIH1cbn1cbi5jb250YWluZXIgLnJlZ2lzdHJhdGlvbi1mb3JtIGEge1xuICBjb2xvcjogIzQyNDE0MTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/main-response/registration-form/registration-form.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/main-response/registration-form/registration-form.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: RegistrationFormComponent */

  /***/
  function srcAppComponentsMainResponseRegistrationFormRegistrationFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function () {
      return RegistrationFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_sign_in_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/sign-in-up.service */
    "./src/app/services/sign-in-up.service.ts");
    /* harmony import */


    var src_app_validators_sign_in_up_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/validators/sign-in-up.validator */
    "./src/app/validators/sign-in-up.validator.ts");
    /* harmony import */


    var _successfully_registered_dialog_successfully_registered_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../successfully-registered-dialog/successfully-registered-dialog.component */
    "./src/app/components/main-response/successfully-registered-dialog/successfully-registered-dialog.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_is_loading_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/is-loading-emitter.service */
    "./src/app/services/is-loading-emitter.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // import { ErrorResponseDialogComponent } from "../error-response-dialog/error-response-dialog.component";
    // import { LocalStorageService } from "src/app/services/local-storage.service";


    var RegistrationFormComponent =
    /*#__PURE__*/
    function () {
      function RegistrationFormComponent(signInUpService, singInUpValidator, dialog, loading, router) {
        _classCallCheck(this, RegistrationFormComponent);

        this.signInUpService = signInUpService;
        this.singInUpValidator = singInUpValidator;
        this.dialog = dialog;
        this.loading = loading;
        this.router = router;
        this.emailAlreadyRegistered = false;
        this.positions = [{
          positionId: 1,
          positionName: "Developer"
        }, {
          positionId: 2,
          positionName: "Project Manager"
        }];
      }

      _createClass(RegistrationFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.singInUpValidator.nameValidator]),
            userSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.singInUpValidator.surnameValidator]),
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.singInUpValidator.emailValidator]),
            passwords: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              userPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.singInUpValidator.passwordValidator]),
              userConfirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.singInUpValidator.matchPasswordsValidator])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.removeRedBorders();

          if (this.registrationForm.invalid) {
            return;
          } // const inputData: IUserData = {
          //   firstName: this.registrationForm.get("userName").value,
          //   secondName: this.registrationForm.get("userSurname").value,
          //   email: this.registrationForm.get("userEmail").value,
          //   password: this.registrationForm.get("passwords").get("userPassword")
          //     .value,
          //   positionId: 1
          // };


          var inputData = {
            firstName: this.registrationForm.get("userName").value,
            secondName: this.registrationForm.get("userSurname").value,
            email: this.registrationForm.get("userEmail").value,
            password: this.registrationForm.get("passwords").get("userPassword").value
          }; // this.isLoading = true;
          // this.loading.isLoading.next(true);
          // this.signInUpService.signUp(inputData).subscribe(
          //   responseUserData => {
          //     this.loading.isLoading.next(false);
          //     this.openSuccessfullyRegisteredDialog(responseUserData.firstName);
          //     // TODO доробити
          //     this.registrationForm.reset();
          //     this.router.navigate(["/home"]);
          //   },
          //   errorData => {
          //     this.loading.isLoading.next(false);
          //     console.log(errorData);
          //     // TODO сюди треба додати обробку помилки, якщо ще щось сталось, хоча, тут єдиний трабл
          //     // це як раз або ВЖЕ ЗАРЕЄСТРОВАНИЙ емейл, або ж трабл з підключенням до сервака ;)
          //     if (errorData === "Email is in use.") {
          //       this.getRedBorderEmailInput();
          //     } else if (errorData.name === "HttpErrorResponse") {
          //       this.openErrorResponseDialog(errorData.message);
          //     }
          //   }
          // );

          this.loading.isLoading.next(true);
          var response = this.signInUpService.signUp(inputData);

          if (response.success) {
            this.loading.isLoading.next(false);
            this.openSuccessfullyRegisteredDialog(response.userName);
            this.registrationForm.reset();
            this.router.navigate(["/home"]);
          } else if (response.errorMessage === "Email is in use.") {
            this.loading.isLoading.next(false);
            this.getRedBorderEmailInput();
          } // console.log(inputData);

        }
      }, {
        key: "removeRedBorders",
        value: function removeRedBorders() {
          var emailInput = document.getElementsByName("userEmail")[0];
          emailInput.classList.remove("red-border");
        }
      }, {
        key: "getRedBorderEmailInput",
        value: function getRedBorderEmailInput() {
          this.registrationForm.get("userEmail").setErrors({
            alreadyRegistered: true
          });
          var emailInput = document.getElementsByName("userEmail")[0];
          emailInput.classList.add("red-border");
        }
      }, {
        key: "openSuccessfullyRegisteredDialog",
        value: function openSuccessfullyRegisteredDialog(userName) {
          var dialogRef = this.dialog.open(_successfully_registered_dialog_successfully_registered_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SuccessfullyRegisteredDialogComponent"], {
            width: "fit-content",
            data: userName
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog was closed");
          });
        }
      }]);

      return RegistrationFormComponent;
    }();

    RegistrationFormComponent.ctorParameters = function () {
      return [{
        type: src_app_services_sign_in_up_service__WEBPACK_IMPORTED_MODULE_3__["SignInUpService"]
      }, {
        type: src_app_validators_sign_in_up_validator__WEBPACK_IMPORTED_MODULE_4__["SignInUpValidator"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: src_app_services_is_loading_emitter_service__WEBPACK_IMPORTED_MODULE_7__["IsPageLoading"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }];
    };

    RegistrationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-registration-form",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/registration-form/registration-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration-form.component.scss */
      "./src/app/components/main-response/registration-form/registration-form.component.scss")).default]
    })], RegistrationFormComponent);
    /***/
  },

  /***/
  "./src/app/components/main-response/successfully-registered-dialog/successfully-registered-dialog.component.scss":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/components/main-response/successfully-registered-dialog/successfully-registered-dialog.component.scss ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainResponseSuccessfullyRegisteredDialogSuccessfullyRegisteredDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".new-event-dialog {\n  font-family: \"Montserrat\", sans-serif;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  line-height: 2em;\n  padding-right: 0.7em;\n  padding-left: 0.7em;\n}\n.new-event-dialog h1 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: wrap column;\n}\n.new-event-dialog p {\n  margin-top: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: wrap column;\n}\n.new-event-dialog .submit-button {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1em;\n  padding: 0.5em;\n  color: white;\n  border: white 2px solid;\n  background-color: #0a0a0a00;\n  border-radius: 50px;\n  box-shadow: 0 4px 14px 4px rgba(24, 23, 23, 0.705);\n  min-width: 100px;\n  cursor: pointer;\n}\n.new-event-dialog .submit-button:hover {\n  background-color: #615f5e;\n}\n.new-event-dialog .submit-button:active {\n  background-color: #9c3623;\n}\n@media (max-width: 450px) {\n  body {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL3N1Y2Nlc3NmdWxseS1yZWdpc3RlcmVkLWRpYWxvZy9EOlxcSk9CXFxPbmVUaW1lXFxPbmVUaW1lL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluLXJlc3BvbnNlXFxzdWNjZXNzZnVsbHktcmVnaXN0ZXJlZC1kaWFsb2dcXHN1Y2Nlc3NmdWxseS1yZWdpc3RlcmVkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL3N1Y2Nlc3NmdWxseS1yZWdpc3RlcmVkLWRpYWxvZy9zdWNjZXNzZnVsbHktcmVnaXN0ZXJlZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUVBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FKO0FESUU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBRUEsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDSEo7QURNRTtFQUNFLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNMSjtBRE9FO0VBQ0UseUJBQUE7QUNMSjtBRE9FO0VBQ0UseUJBQUE7QUNMSjtBRFNBO0VBQ0U7SUFDRSxVQUFBO0VDTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1yZXNwb25zZS9zdWNjZXNzZnVsbHktcmVnaXN0ZXJlZC1kaWFsb2cvc3VjY2Vzc2Z1bGx5LXJlZ2lzdGVyZWQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1ldmVudC1kaWFsb2cge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuICBsaW5lLWhlaWdodDogMmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuN2VtO1xyXG4gIHBhZGRpbmctbGVmdDogMC43ZW07XHJcblxyXG4gIGgxIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgZmxleC1mbG93OiB3cmFwIGNvbHVtbjtcclxuICB9XHJcbiAgLy8gYm94LXNoYWRvdzogMCA1cHggNTBweCAxMnB4IHJnYmEoMzcsIDM2LCAzNiwgMC43MDUpO1xyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgZmxleC1mbG93OiB3cmFwIGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5zdWJtaXQtYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyOiB3aGl0ZSAycHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhMDA7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggNHB4IHJnYmEoMjQsIDIzLCAyMywgMC43MDUpO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnN1Ym1pdC1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NSwgOTQpO1xyXG4gIH1cclxuICAuc3VibWl0LWJ1dHRvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgNTQsIDM1KTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuIiwiLm5ldy1ldmVudC1kaWFsb2cge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgcGFkZGluZy1yaWdodDogMC43ZW07XG4gIHBhZGRpbmctbGVmdDogMC43ZW07XG59XG4ubmV3LWV2ZW50LWRpYWxvZyBoMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogd3JhcCBjb2x1bW47XG59XG4ubmV3LWV2ZW50LWRpYWxvZyBwIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXAgY29sdW1uO1xufVxuLm5ldy1ldmVudC1kaWFsb2cgLnN1Ym1pdC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHdoaXRlIDJweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMGEwYTAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IDRweCByZ2JhKDI0LCAyMywgMjMsIDAuNzA1KTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5ldy1ldmVudC1kaWFsb2cgLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE1ZjVlO1xufVxuLm5ldy1ldmVudC1kaWFsb2cgLnN1Ym1pdC1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMzYyMztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIGJvZHkge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/main-response/successfully-registered-dialog/successfully-registered-dialog.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/components/main-response/successfully-registered-dialog/successfully-registered-dialog.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: SuccessfullyRegisteredDialogComponent */

  /***/
  function srcAppComponentsMainResponseSuccessfullyRegisteredDialogSuccessfullyRegisteredDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessfullyRegisteredDialogComponent", function () {
      return SuccessfullyRegisteredDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var SuccessfullyRegisteredDialogComponent =
    /*#__PURE__*/
    function () {
      function SuccessfullyRegisteredDialogComponent(dialogRef, userName) {
        _classCallCheck(this, SuccessfullyRegisteredDialogComponent);

        this.dialogRef = dialogRef;
        this.userName = userName;
      }

      _createClass(SuccessfullyRegisteredDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return SuccessfullyRegisteredDialogComponent;
    }();

    SuccessfullyRegisteredDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    SuccessfullyRegisteredDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-successfully-registered-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./successfully-registered-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/successfully-registered-dialog/successfully-registered-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./successfully-registered-dialog.component.scss */
      "./src/app/components/main-response/successfully-registered-dialog/successfully-registered-dialog.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], SuccessfullyRegisteredDialogComponent);
    /***/
  },

  /***/
  "./src/app/components/main-response/welcome-page/welcome-page.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/main-response/welcome-page/welcome-page.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainResponseWelcomePageWelcomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\n  position: fixed;\n  top: 3vh;\n  right: 5vw;\n  font-size: 1.5em;\n  z-index: 100;\n}\nnav :hover {\n  color: black;\n}\na {\n  text-decoration: none;\n  color: white;\n  margin: 1vw;\n}\nmain {\n  margin-top: 4.2vw;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 90%;\n}\nmain .left-part {\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nmain .right-part {\n  width: 50%;\n}\nmain .heading {\n  text-align: left;\n  font-size: 4em;\n  color: white;\n  letter-spacing: 6px;\n  line-height: 1.4em;\n  font-weight: bold;\n}\nmain .card {\n  align-self: center;\n  text-align: center;\n  width: 60%;\n}\nmain .text {\n  text-align: left;\n  font-size: 2em;\n  line-height: 1em;\n  letter-spacing: 3px;\n  color: lightsteelblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL3dlbGNvbWUtcGFnZS9EOlxcSk9CXFxPbmVUaW1lXFxPbmVUaW1lL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluLXJlc3BvbnNlXFx3ZWxjb21lLXBhZ2VcXHdlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlc3BvbnNlL3dlbGNvbWUtcGFnZS93ZWxjb21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtBQ0NSO0FER0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURHQTtFQUNFLGlCQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0FDREY7QURFSTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQVI7QURHSTtFQUNJLFVBQUE7QUNEUjtBRElJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0ZSO0FES0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0hKO0FETUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1yZXNwb25zZS93ZWxjb21lLXBhZ2Uvd2VsY29tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzdmg7XHJcbiAgICByaWdodDogNXZ3O1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAxdnc7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDQuMnZ3O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgICAubGVmdC1wYXJ0e1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICB9XHJcbiAgICAucmlnaHQtcGFydHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkaW5ne1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuLmNhcmR7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlXHJcbn1cclxuXHJcbiAgICAudGV4dHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICBjb2xvcjogbGlnaHRzdGVlbGJsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwibmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDN2aDtcbiAgcmlnaHQ6IDV2dztcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgei1pbmRleDogMTAwO1xufVxubmF2IDpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDF2dztcbn1cblxubWFpbiB7XG4gIG1hcmdpbi10b3A6IDQuMnZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA5MCU7XG59XG5tYWluIC5sZWZ0LXBhcnQge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbm1haW4gLnJpZ2h0LXBhcnQge1xuICB3aWR0aDogNTAlO1xufVxubWFpbiAuaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiA2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5tYWluIC5jYXJkIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG59XG5tYWluIC50ZXh0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/main-response/welcome-page/welcome-page.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/main-response/welcome-page/welcome-page.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: WelcomePageComponent */

  /***/
  function srcAppComponentsMainResponseWelcomePageWelcomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function () {
      return WelcomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WelcomePageComponent =
    /*#__PURE__*/
    function () {
      function WelcomePageComponent() {
        _classCallCheck(this, WelcomePageComponent);
      }

      _createClass(WelcomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomePageComponent;
    }();

    WelcomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-response/welcome-page/welcome-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome-page.component.scss */
      "./src/app/components/main-response/welcome-page/welcome-page.component.scss")).default]
    })], WelcomePageComponent);
    /***/
  },

  /***/
  "./src/app/interfaces/user-class.model.ts":
  /*!************************************************!*\
    !*** ./src/app/interfaces/user-class.model.ts ***!
    \************************************************/

  /*! exports provided: User */

  /***/
  function srcAppInterfacesUserClassModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(email, firstName, secondName, id) {
      _classCallCheck(this, User);

      this.email = email;
      this.firstName = firstName;
      this.secondName = secondName;
      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/services/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/services/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sign_in_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-in-up.service */
    "./src/app/services/sign-in-up.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(signInUpService, router, route) {
        _classCallCheck(this, AuthGuard);

        this.signInUpService = signInUpService;
        this.router = router;
        this.route = route;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, router) {
          var _this3 = this;

          return this.signInUpService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            return !!user;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (isAuth) {
            if (!isAuth) {
              _this3.router.navigate(["/login"]);
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _sign_in_up_service__WEBPACK_IMPORTED_MODULE_3__["SignInUpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], AuthGuard); // @Injectable({ providedIn: "root" })
    // export class ProjectListGuard implements CanActivate {
    //   constructor(
    //     private signInUpService: SignInUpService,
    //     private router: Router,
    //     private route: ActivatedRoute
    //   ) {}
    //   canActivate(
    //     route: ActivatedRouteSnapshot,
    //     router: RouterStateSnapshot
    //   ): boolean | Promise<boolean> | Observable<boolean> {
    //     return this.signInUpService.user.pipe(
    //       take(1),
    //       map(user => {
    //         return !!user;
    //       }),
    //       tap(isAuth => {
    //         if (!isAuth) {
    //           this.router.navigate(["/login"]);
    //         } else if (JSON.parse(localStorage.getItem('userData')).positionId !== 3) {
    //           console.log('TU NE PM');
    //           this.router.navigate(["/home"]);
    //         }
    //       })
    //     );
    //   }
    // }
    // @Injectable({ providedIn: "root" })
    // export class NotifiedListGuard implements CanActivate {
    //   constructor(
    //     private signInUpService: SignInUpService,
    //     private router: Router,
    //     private route: ActivatedRoute
    //   ) {}
    //   canActivate(
    //     route: ActivatedRouteSnapshot,
    //     router: RouterStateSnapshot
    //   ): boolean | Promise<boolean> | Observable<boolean> {
    //     return this.signInUpService.user.pipe(
    //       take(1),
    //       map(user => {
    //         return !!user;
    //       }),
    //       tap(isAuth => {
    //         if (!isAuth) {
    //           this.router.navigate(["/login"]);
    //         } else if (JSON.parse(localStorage.getItem('userData')).positionId === 1) {
    //           console.log('TU DEV');
    //           this.router.navigate(["/home"]);
    //         }
    //       })
    //     );
    //   }
    // }

    /***/
  },

  /***/
  "./src/app/services/bcrypt.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/bcrypt.service.ts ***!
    \********************************************/

  /*! exports provided: BCryptService */

  /***/
  function srcAppServicesBcryptServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BCryptService", function () {
      return BCryptService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! md5 */
    "./node_modules/md5/md5.js");
    /* harmony import */


    var md5__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_2__);

    var BCryptService =
    /*#__PURE__*/
    function () {
      function BCryptService() {
        _classCallCheck(this, BCryptService);
      }

      _createClass(BCryptService, [{
        key: "hash",
        value: function hash(rawPassword) {
          var salt = new Date(2000, 0, 20).getTime();
          var rounds = 10423;
          var hashed = md5__WEBPACK_IMPORTED_MODULE_2__(rawPassword + salt);

          for (var i = 0; i <= rounds; i++) {
            hashed = md5__WEBPACK_IMPORTED_MODULE_2__(hashed);
          }

          return "".concat(salt, "$").concat(rounds, "$").concat(hashed);
        }
      }, {
        key: "compare",
        value: function compare(rawPassword, hashedPasswordId) {
          try {
            var hashedRawPassword = this.hash(rawPassword);
            var passwords = JSON.parse(localStorage.getItem("passwords"));
            var hashedPassword = passwords.find(function (pass) {
              return pass.id === hashedPasswordId;
            }).passwordHash;
            return hashedPassword === hashedRawPassword;
          } catch (error) {
            throw Error(error.message);
          }
        }
      }]);

      return BCryptService;
    }();

    BCryptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], BCryptService);
    /***/
  },

  /***/
  "./src/app/services/is-loading-emitter.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/is-loading-emitter.service.ts ***!
    \********************************************************/

  /*! exports provided: IsPageLoading */

  /***/
  function srcAppServicesIsLoadingEmitterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsPageLoading", function () {
      return IsPageLoading;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var IsPageLoading = function IsPageLoading() {
      _classCallCheck(this, IsPageLoading);

      this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    };

    IsPageLoading = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], IsPageLoading);
    /***/
  },

  /***/
  "./src/app/services/report-http.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/report-http.service.ts ***!
    \*************************************************/

  /*! exports provided: ReportService */

  /***/
  function srcAppServicesReportHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportService", function () {
      return ReportService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_main_response_home_share_with_dialog_share_with_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/main-response/home/share-with-dialog/share-with-dialog.component */
    "./src/app/components/main-response/home/share-with-dialog/share-with-dialog.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js"); // import { Observable } from "rxjs";


    var ReportService =
    /*#__PURE__*/
    function () {
      function ReportService(dialog) {
        _classCallCheck(this, ReportService);

        this.dialog = dialog;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/report";
      }

      _createClass(ReportService, [{
        key: "postData",
        value: function postData(reportData) {
          var reports = JSON.parse(localStorage.getItem("reportsData")) || [];
          reportData.id = reports.length > 0 ? reports[reports.length - 1].id + 1 : 0;
          reportData.creatorEmail = JSON.parse(localStorage.getItem("userData")).email;
          reports.push(reportData);
          localStorage.setItem("reportsData", JSON.stringify(reports));
          var reportsOfUsers = JSON.parse(localStorage.getItem("reportsOfUsers")) || [];
          reportsOfUsers.push({
            reportId: reportData.id,
            userId: JSON.parse(localStorage.getItem("userData")).id
          });
          localStorage.setItem("reportsOfUsers", JSON.stringify(reportsOfUsers));
          return reportData;
        }
      }, {
        key: "getData",
        value: function getData(userId) {
          var reportsForUser = [];
          var reportsOfUsers = JSON.parse(localStorage.getItem("reportsOfUsers"));

          if (reportsOfUsers !== null) {
            var reports = JSON.parse(localStorage.getItem("reportsData"));

            var _loop = function _loop(i) {
              if (reportsOfUsers[i].userId === userId) {
                reportsForUser.push(reports.find(function (report) {
                  return report.id === reportsOfUsers[i].reportId;
                }));
              }
            };

            for (var i = 0; i < reportsOfUsers.length; ++i) {
              _loop(i);
            }
          }

          console.log(reportsForUser);
          return reportsForUser;
        }
      }, {
        key: "putData",
        value: function putData(report, id) {
          var reports = JSON.parse(localStorage.getItem("reportsData"));
          console.log(reports);
          var currentReport = reports.find(function (report) {
            return report.id === id;
          });
          var index = reports.indexOf(currentReport);
          currentReport.name = report.name;
          currentReport.description = report.description;
          reports.splice(index, 1, currentReport);
          localStorage.setItem("reportsData", JSON.stringify(reports));
          return currentReport;
        }
      }, {
        key: "shareReport",
        value: function shareReport(report) {
          var dialogRef = this.dialog.open(_components_main_response_home_share_with_dialog_share_with_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ShareTaskWithDialogComponent"], {
            width: "fit-content",
            data: report
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog was closed!!! arr: " + result);
            var reportsOfUsers = JSON.parse(localStorage.getItem("reportsOfUsers"));
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              var _loop2 = function _loop2() {
                var res = _step.value;
                var NotExistedReport = reportsOfUsers.find(function (reportOfUser) {
                  return reportOfUser.reportId === report.id && reportOfUser.userId === res;
                });

                if (NotExistedReport === undefined) {
                  console.log("yeah!!! userID: " + res);
                  reportsOfUsers.push({
                    reportId: report.id,
                    userId: res
                  });
                }
              };

              for (var _iterator = result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                _loop2();
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            console.log(reportsOfUsers);
            localStorage.setItem("reportsOfUsers", JSON.stringify(reportsOfUsers));
          });
        }
      }, {
        key: "deleteData",
        value: function deleteData(reportToDelete) {
          var reports = JSON.parse(localStorage.getItem("reportsData"));
          var reportsOfUsers = JSON.parse(localStorage.getItem("reportsOfUsers"));

          for (var i = 0; i < reportsOfUsers.length; ++i) {
            if (reportsOfUsers[i].reportId === reportToDelete.id) {
              reportsOfUsers.splice(i, 1);
            }
          }

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = reports[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var report = _step2.value;

              if (report.id === reportToDelete.id) {
                reports.splice(reports.indexOf(report), 1);
                break;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          if (reports.length === 0) {
            reportsOfUsers = [];
          }

          localStorage.setItem("reportsData", JSON.stringify(reports));
          localStorage.setItem("reportsOfUsers", JSON.stringify(reportsOfUsers));
          return this.getData(JSON.parse(localStorage.getItem("userData")).id);
        }
      }]);

      return ReportService;
    }();

    ReportService.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ReportService);
    /***/
  },

  /***/
  "./src/app/services/sign-in-up.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/sign-in-up.service.ts ***!
    \************************************************/

  /*! exports provided: SignInUpService */

  /***/
  function srcAppServicesSignInUpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInUpService", function () {
      return SignInUpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _interfaces_user_class_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../interfaces/user-class.model */
    "./src/app/interfaces/user-class.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _bcrypt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./bcrypt.service */
    "./src/app/services/bcrypt.service.ts");

    var SignInUpService =
    /*#__PURE__*/
    function () {
      function SignInUpService(http, router, bCryptService) {
        _classCallCheck(this, SignInUpService);

        this.http = http;
        this.router = router;
        this.bCryptService = bCryptService;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
      } // signUp(userSignUpData: IUserData) {
      //   return this.http
      //     .post<IUserData>(environment.apiUrl + "/Account/SignUp", userSignUpData)
      //     .pipe(
      //       catchError(this.errorHandling),
      //       tap(responseData => {
      //         this.authHandling(
      //           responseData.email,
      //           responseData.firstName,
      //           responseData.secondName,
      //           responseData.id,
      //           responseData.positionId
      //         );
      //       })
      //     );
      // }


      _createClass(SignInUpService, [{
        key: "signUp",
        value: function signUp(userSignUpData) {
          // localStorage.removeItem("usersData");
          // localStorage.removeItem("passwords");
          var usersData = JSON.parse(localStorage.getItem("usersData"));
          console.log(usersData);

          if (usersData === null) {
            console.warn("NULL");
            usersData = [];
          } else {
            var emeilExist = this.doesEmailExist(userSignUpData.email);

            if (emeilExist) {
              return {
                success: false,
                errorMessage: "Email is in use."
              };
            }
          }

          var newUser = this.newUserCreate(userSignUpData);
          delete newUser.password;
          usersData.push(newUser);
          console.log("------------");
          console.log(usersData);
          console.log("------------");
          localStorage.setItem("usersData", JSON.stringify(usersData));
          this.authHandling(newUser.email, newUser.firstName, newUser.secondName, newUser.id);
          return {
            success: true,
            userName: newUser.firstName
          };
        } // singIn(userLoginInData: IUserData) {
        //   console.log(userLoginInData);
        //   return this.http
        //     .post<IUserData>(environment.apiUrl + "/Account/SignIn", userLoginInData)
        //     .pipe(
        //       catchError(this.errorHandling),
        //       tap(responseData => {
        //         this.authHandling(
        //           responseData.email,
        //           responseData.firstName,
        //           responseData.secondName,
        //           responseData.id
        //         );
        //       })
        //     );
        // }

      }, {
        key: "singIn",
        value: function singIn(userLoginInData) {
          var usersData = JSON.parse(localStorage.getItem("usersData"));

          if (usersData === null) {
            return {
              success: false,
              errorMessage: "There is no email"
            };
          }

          var userToLogin = usersData.find(function (user) {
            return user.email === userLoginInData.email;
          });

          if (userToLogin === undefined) {
            return {
              success: false,
              errorMessage: "There is no email"
            };
          }

          if (this.bCryptService.compare(userLoginInData.password, userToLogin.id)) {
            this.authHandling(userToLogin.email, userToLogin.firstName, userToLogin.secondName, userToLogin.id);
            return {
              success: true
            };
          } else {
            return {
              success: false,
              errorMessage: "Bad password"
            };
          }
        }
      }, {
        key: "newUserCreate",
        value: function newUserCreate(userData) {
          var usersData = JSON.parse(localStorage.getItem("usersData"));
          userData.id = usersData ? usersData[usersData.length - 1].id + 1 : 0;
          userData.passwordId = this.hashingPassword(userData.password);
          console.log(userData);
          return userData;
        }
      }, {
        key: "hashingPassword",
        value: function hashingPassword(passwordToHash) {
          var passwords = JSON.parse(localStorage.getItem("passwords")) ? JSON.parse(localStorage.getItem("passwords")) : [];
          var hashedPassword = {
            id: passwords.length !== 0 ? passwords[passwords.length - 1].id + 1 : 0,
            passwordHash: this.bCryptService.hash(passwordToHash)
          };
          console.log(hashedPassword);
          passwords.push(hashedPassword);
          localStorage.setItem("passwords", JSON.stringify(passwords));
          return hashedPassword.id;
        }
      }, {
        key: "doesEmailExist",
        value: function doesEmailExist(userEmail) {
          var usersData = JSON.parse(localStorage.getItem("usersData"));

          for (var i = 0; i < usersData.length; ++i) {
            if (usersData[i].email === userEmail) {
              console.error("Email exist");
              return true;
            }
          }

          return false;
        } // getUserInfoById() {
        //   console.log("we r here!!!");
        //   return this.http.get<IFullUserData>(
        //     environment.apiUrl +
        //       "/user/GetInfo/" +
        //       JSON.parse(localStorage.getItem("userData")).id
        //   );
        // }

      }, {
        key: "autoLogin",
        value: function autoLogin() {
          var userData = JSON.parse(localStorage.getItem("userData"));

          if (!userData) {
            return;
          }

          var loadedUser = new _interfaces_user_class_model__WEBPACK_IMPORTED_MODULE_5__["User"](userData.email, userData.firstName, userData.secondName, userData.id);
          this.user.next(loadedUser);
          this.autoLogout();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.user.next(null);
          console.log(JSON.parse(localStorage.getItem("userData")).id);
          this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/Account/Logout/" + JSON.parse(localStorage.getItem("userData")).id).subscribe(function (responseData) {});
          this.router.navigate(["/login"]);
          localStorage.removeItem("userData");

          if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
          }

          this.tokenExpirationTimer = null;
        }
      }, {
        key: "autoLogout",
        value: function autoLogout() {
          var _this4 = this;

          this.tokenExpirationTimer = setTimeout(function () {
            _this4.logout();
          }, 3600000);
        }
      }, {
        key: "authHandling",
        value: function authHandling(email, name, surname, id) {
          var user = new _interfaces_user_class_model__WEBPACK_IMPORTED_MODULE_5__["User"](email, name, surname, id);
          this.user.next(user);
          this.autoLogout();
          localStorage.setItem("userData", JSON.stringify(user));
        }
      }, {
        key: "errorHandling",
        value: function errorHandling(errorResponse) {
          console.log(errorResponse);

          switch (errorResponse.error) {
            case "Bad password":
              {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorResponse.error);
              }

            case "Email is in use.":
              {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorResponse.error);
              }

            case "There is no email":
              {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorResponse.error);
              }
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])({
            name: errorResponse.name,
            message: errorResponse.message
          });
        }
      }]);

      return SignInUpService;
    }();

    SignInUpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _bcrypt_service__WEBPACK_IMPORTED_MODULE_7__["BCryptService"]
      }];
    };

    SignInUpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SignInUpService);
    /***/
  },

  /***/
  "./src/app/validators/reports.validator.ts":
  /*!*************************************************!*\
    !*** ./src/app/validators/reports.validator.ts ***!
    \*************************************************/

  /*! exports provided: ReportValidator */

  /***/
  function srcAppValidatorsReportsValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportValidator", function () {
      return ReportValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // to do


    var ReportValidator =
    /*#__PURE__*/
    function () {
      function ReportValidator() {
        _classCallCheck(this, ReportValidator);
      }

      _createClass(ReportValidator, [{
        key: "startDateValidation",
        value: function startDateValidation(startDateInput) {
          var currentDate = new Date(new Date().toDateString());

          if (startDateInput.value !== null && startDateInput !== undefined) {
            var inputDate = new Date(new Date(startDateInput.value).toDateString());

            if (currentDate > inputDate || currentDate.toDateString() === inputDate.toDateString()) {
              return null;
            }

            return {
              incorrectStartDate: true
            };
          }
        }
      }, {
        key: "timePerDayValidator",
        value: function timePerDayValidator(reports, report, idEdited) {
          var sum = 0;
          var limit = 8;
          var overtimeSum = 0;
          var overtimeLimit = 16;
          console.log(reports);
          console.log(report);
          var oldReportTime;
          reports.filter(function (elem) {
            return elem.startDate == report.startDate;
          }).forEach(function (r) {
            return sum += r.time, overtimeSum += r.overtime;
          });

          if (idEdited) {
            console.log(reports.filter(function (elem) {
              return elem.id === report.id;
            }));
            oldReportTime = reports.filter(function (elem) {
              return elem.id === report.id;
            })[0].time;
            sum -= oldReportTime;
          }

          console.log("fsadgdfgdffd  " + sum);
          return {
            enoughtTime: sum + report.time <= limit,
            time: limit - sum,
            enoughtOverTime: overtimeSum + report.overtime <= overtimeLimit,
            overtime: overtimeLimit - overtimeSum
          };
        }
      }, {
        key: "DateValidation",
        value: function DateValidation(startDateInput) {
          var date = new Date(startDateInput.value);
          console.log('This is the ' + date.getDay());

          if (date.getDay() == 6 || date.getDay() == 0) {
            return {
              weekendDay: true
            };
          }

          return null;
        }
      }]);

      return ReportValidator;
    }();
    /***/

  },

  /***/
  "./src/app/validators/sign-in-up.validator.ts":
  /*!****************************************************!*\
    !*** ./src/app/validators/sign-in-up.validator.ts ***!
    \****************************************************/

  /*! exports provided: SignInUpValidator */

  /***/
  function srcAppValidatorsSignInUpValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInUpValidator", function () {
      return SignInUpValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SignInUpValidator =
    /*#__PURE__*/
    function () {
      function SignInUpValidator() {
        _classCallCheck(this, SignInUpValidator);
      }

      _createClass(SignInUpValidator, [{
        key: "nameValidator",
        value: function nameValidator(control) {
          if (control !== undefined) {
            var name = control.value;

            if (name !== null) {
              name = name.trim();
              var regex = /^[A-Z][a-z]{0,}$/;
              var isContains = regex.test(name);

              if (isContains) {
                document.getElementsByName("userName")[0].classList.remove("red-border");
                return null;
              }

              document.getElementsByName("userName")[0].classList.add("red-border");
              return {
                incorrectName: true
              };
            }
          }
        }
      }, {
        key: "surnameValidator",
        value: function surnameValidator(control) {
          if (control !== null) {
            var surname = control.value;

            if (surname !== null) {
              surname = surname.trim();
              var regex = /^[A-Z][a-z]{0,}$/;
              var isContains = regex.test(surname);

              if (isContains) {
                document.getElementsByName("userSurname")[0].classList.remove("red-border");
                return null;
              }

              document.getElementsByName("userSurname")[0].classList.add("red-border");
              return {
                incorrectSurname: true
              };
            }
          }
        }
      }, {
        key: "emailValidator",
        value: function emailValidator(control) {
          if (control !== null) {
            var email = control.value;

            if (email !== null) {
              email = email.trim().toLowerCase();
              var regex = /^[a-zA-Z](([^=+&#$%!<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]#!\.,;:\s@\"]{2,})$/i;
              var isContains = regex.test(email);

              if (isContains) {
                document.getElementsByName("userEmail")[0].classList.remove("red-border");
                return null;
              }

              document.getElementsByName("userEmail")[0].classList.add("red-border");
              return {
                incorrectEmail: true
              };
            }
          }
        }
      }, {
        key: "passwordValidator",
        value: function passwordValidator(control) {
          if (control !== null) {
            var password = control.value;

            if (password !== null) {
              password = password.trim();
              var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
              var isContains = regex.test(password);

              if (isContains) {
                document.getElementsByName("userPassword")[0].classList.remove("red-border");
                return null;
              }

              document.getElementsByName("userPassword")[0].classList.add("red-border");
              return {
                doesNotStrongPassword: true
              };
            }
          }
        }
      }, {
        key: "matchPasswordsValidator",
        value: function matchPasswordsValidator(group) {
          var password = group.value.userPassword;
          var confirmPassword = group.value.userConfirmPassword;

          if (password !== null) {
            if (confirmPassword !== null && confirmPassword.length > 0) {
              if (password !== confirmPassword) {
                document.getElementsByName("userConfirmPassword")[0].classList.add("red-border");
                return {
                  passwordsDoNotMatch: true
                };
              }

              document.getElementsByName("userConfirmPassword")[0].classList.remove("red-border");
              return null;
            }

            document.getElementsByName("userConfirmPassword")[0].classList.remove("red-border");
            return null;
          }

          return null;
        }
      }]);

      return SignInUpValidator;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:5000'
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\JOB\OneTime\OneTime\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
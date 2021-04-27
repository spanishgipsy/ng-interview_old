(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var QuestionsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsService = void 0;
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const question_entity_1 = __webpack_require__(3);
let QuestionsService = QuestionsService_1 = class QuestionsService {
    constructor() {
        this.questions = [];
    }
    create(dto) {
        const question = QuestionsService_1.dtoToQuestion(dto);
        this.questions.push(question);
        return question;
    }
    findAll(params) {
        console.log(params);
        return this.questions;
    }
    findOne(id) {
        return this.questions.find(q => q.id === id);
    }
    update(id, updateQuestionDto) {
        const question = this.questions.find(q => q.id === id);
        if (question) {
            Object.assign(question, updateQuestionDto);
            return question;
        }
    }
    remove(id) {
        const idx = this.questions.findIndex(q => q.id === id);
        if (idx !== -1) {
            this.questions.splice(idx, 1);
        }
        return idx;
    }
    static dtoToQuestion(dto) {
        const question = new question_entity_1.Question();
        Object.assign(question, dto);
        return question;
    }
};
QuestionsService = QuestionsService_1 = tslib_1.__decorate([
    common_1.Injectable()
], QuestionsService);
exports.QuestionsService = QuestionsService;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
var data_1 = __webpack_require__(11);
Object.defineProperty(exports, "Question", { enumerable: true, get: function () { return data_1.Question; } });


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuestionDto = void 0;
const question_entity_1 = __webpack_require__(3);
class CreateQuestionDto {
    constructor(question) {
        if (question) {
            Object.assign(this, question);
        }
    }
    toQuestion() {
        const question = new question_entity_1.Question();
        Object.assign(question, this);
        return question;
    }
}
exports.CreateQuestionDto = CreateQuestionDto;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to ng-interview-backend!' };
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const core_1 = __webpack_require__(8);
const app_module_1 = __webpack_require__(9);
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            console.log('Listening at port: ' + port);
        });
    });
}
bootstrap();


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const questions_module_1 = __webpack_require__(10);
const serve_static_1 = __webpack_require__(17);
const path_1 = __webpack_require__(18);
const app_controller_1 = __webpack_require__(19);
const app_service_1 = __webpack_require__(5);
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'ng-interview'),
                exclude: ['/api*']
            }),
            questions_module_1.QuestionsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsModule = void 0;
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const questions_service_1 = __webpack_require__(2);
const questions_controller_1 = __webpack_require__(13);
let QuestionsModule = class QuestionsModule {
};
QuestionsModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [questions_controller_1.QuestionsController],
        providers: [questions_service_1.QuestionsService]
    })
], QuestionsModule);
exports.QuestionsModule = QuestionsModule;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(12), exports);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
class Question {
    constructor() {
        this.id = Math.random() * 1000 * 1000 + Math.random() * 1000;
    }
}
exports.Question = Question;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsController = void 0;
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const questions_service_1 = __webpack_require__(2);
const create_question_dto_1 = __webpack_require__(4);
const update_question_dto_1 = __webpack_require__(14);
const list_all_questions_1 = __webpack_require__(16);
let QuestionsController = class QuestionsController {
    constructor(questionsService) {
        this.questionsService = questionsService;
    }
    create(createQuestionDto) {
        return this.questionsService.create(createQuestionDto);
    }
    findAll(params) {
        const questions = this.questionsService.findAll(params);
        if (!questions) {
            throw new common_1.InternalServerErrorException();
        }
        return questions;
    }
    findOne(id) {
        const question = this.questionsService.findOne(+id);
        if (!question) {
            throw new common_1.NotFoundException();
        }
        return question;
    }
    update(id, updateQuestionDto) {
        const question = this.questionsService.update(+id, updateQuestionDto);
        if (!question) {
            throw new common_1.NotFoundException();
        }
        return question;
    }
    remove(id) {
        const deletedIndex = this.questionsService.remove(+id);
        if (deletedIndex === -1) {
            throw new common_1.NotFoundException();
        }
    }
};
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof create_question_dto_1.CreateQuestionDto !== "undefined" && create_question_dto_1.CreateQuestionDto) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], QuestionsController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof list_all_questions_1.ListAllQuestions !== "undefined" && list_all_questions_1.ListAllQuestions) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], QuestionsController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], QuestionsController.prototype, "findOne", null);
tslib_1.__decorate([
    common_1.Patch(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_c = typeof update_question_dto_1.UpdateQuestionDto !== "undefined" && update_question_dto_1.UpdateQuestionDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], QuestionsController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    common_1.HttpCode(204),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], QuestionsController.prototype, "remove", null);
QuestionsController = tslib_1.__decorate([
    common_1.Controller('questions'),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof questions_service_1.QuestionsService !== "undefined" && questions_service_1.QuestionsService) === "function" ? _d : Object])
], QuestionsController);
exports.QuestionsController = QuestionsController;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestionDto = void 0;
const mapped_types_1 = __webpack_require__(15);
const create_question_dto_1 = __webpack_require__(4);
class UpdateQuestionDto extends mapped_types_1.PartialType(create_question_dto_1.CreateQuestionDto) {
}
exports.UpdateQuestionDto = UpdateQuestionDto;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mapped-types");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllQuestions = void 0;
class ListAllQuestions {
}
exports.ListAllQuestions = ListAllQuestions;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(5);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map
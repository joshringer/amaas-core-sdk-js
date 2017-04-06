'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../../core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Code (a Transaction children type)
 * @extends AMaaSModel
 */
var Code = function (_AMaaSModel) {
  _inherits(Code, _AMaaSModel);

  /**
   * Construct a new Code object
   * @param {object} params - Code creation options
   * @param {string} params.codeValue - The code itself
   * @param {bool} params.active - Whether this Code is active
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new Code)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing Code)
   * @param {date} params.createdTime - Time that the Code was created (required if creating new Code)
   * @param {date} params.updatedTime - Time that the Code was updated (required if amending existing Code)
   * @param {number} params.version - Version number of the Code
   */
  function Code(_ref) {
    var codeValue = _ref.codeValue,
        active = _ref.active,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Code);

    var _this = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.defineProperties(_this, {
      _active: { writable: true, enumerable: false },
      active: {
        get: function get() {
          return _this._active;
        },
        set: function set(newActive) {
          switch (newActive) {
            case false:
              _this._active = false;
              break;
            case undefined:
              _this._active = true;
              break;
            default:
              _this._active = newActive;
          }
        }, enumerable: true
      }
    });
    _this.codeValue = codeValue;
    _this.active = active;
    return _this;
  }

  // set active(newActive) {
  //   switch (newActive) {
  //     case false:
  //       this._active = false
  //       break
  //     case undefined:
  //       this._active = true
  //       break
  //     default:
  //       this._active = newActive
  //   }
  // }
  //
  // get active() {
  //   return this._active
  // }

  // toJSON() {
  //   return Object.assign({}, {
  //     active: this.active
  //   }, this)
  // }


  return Code;
}(_core.AMaaSModel);

exports.default = Code;
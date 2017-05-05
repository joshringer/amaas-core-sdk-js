'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing a AMaaSModel.
 * This is the base class for almost every other class.
 * @memberof module:core
 */
var AMaaSModel =
/**
 * Construct new AMaaSModel object
 * @param {object} params - AMaaSModel creation options:
 * @param {string} [params.createdBy] - ID of the user that created the AMaaSModel
 * @param {string} [params.updatedBy] - ID of the user that updated the AMaaSModel
 * @param {date} [params.createdTime] - Time that the AMaaSModel was created
 * @param {date} [params.updatedTime] - Time that the AMaaSModel was updated
 * @param {number} [params.version] - Version number of the AMaaSModel
*/
function AMaaSModel(_ref) {
  var _ref$createdBy = _ref.createdBy,
      createdBy = _ref$createdBy === undefined ? 'TEMP' : _ref$createdBy,
      _ref$updatedBy = _ref.updatedBy,
      updatedBy = _ref$updatedBy === undefined ? 'TEMP' : _ref$updatedBy,
      createdTime = _ref.createdTime,
      updatedTime = _ref.updatedTime,
      _ref$version = _ref.version,
      version = _ref$version === undefined ? 1 : _ref$version;

  _classCallCheck(this, AMaaSModel);

  this.createdBy = createdBy;
  this.updatedBy = updatedBy;
  this.createdTime = createdTime;
  this.updatedTime = updatedTime;
  this.version = version;
};

exports.default = AMaaSModel;
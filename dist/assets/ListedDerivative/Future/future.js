'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decimal = require('decimal.js');

var _listedDerivative = require('../ListedDerivative/listedDerivative');

var _listedDerivative2 = _interopRequireDefault(_listedDerivative);

var _enums = require('../../enums.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Future = function (_ListedDerivative) {
  _inherits(Future, _ListedDerivative);

  function Future(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Future' : _ref$assetClass,
        fungible = _ref.fungible,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        currency = _ref.currency,
        issueDate = _ref.issueDate,
        maturityDate = _ref.maturityDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        settlementType = _ref.settlementType,
        contractSize = _ref.contractSize,
        pointValue = _ref.pointValue,
        tickSize = _ref.tickSize,
        quoteUnit = _ref.quoteUnit,
        underlyingAssetId = _ref.underlyingAssetId,
        expiryDate = _ref.expiryDate,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Future);

    var _this = _possibleConstructorReturn(this, (Future.__proto__ || Object.getPrototypeOf(Future)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: assetClass,
      fungible: fungible,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      issueDate: issueDate,
      maturityDate: maturityDate,
      description: description,
      clientId: clientId,
      comments: comments,
      links: links,
      references: references,
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.defineProperties(_this, {
      _settlementType: { writable: true, enumerable: false },
      settlementType: {
        get: function get() {
          return _this._settlementType;
        },
        set: function set(newSettlementType) {
          if (settlementType) {
            if (_enums.FUTURE_SETTLEMENT_TYPES.indexOf(newSettlementType) === -1) {
              throw new Error('Invalid Settlement Type: ' + newSettlementType);
            }
            _this._settlementType = newSettlementType;
          }
        },
        enumerable: true
      },
      _pointValue: { writable: true, enumerable: false },
      pointValue: {
        get: function get() {
          return _this._pointValue;
        },
        set: function set(newPointValue) {
          // TODO: This should be replaced with a calculation
          if (newPointValue) {
            _this._pointValue = newPointValue;
          }
        },
        enumerable: true
      },
      _tickSize: { writable: true, enumerable: false },
      tickSize: {
        get: function get() {
          return _this._tickSize;
        },
        set: function set(newTickSize) {
          if (!newTickSize) {
            _this._tickSize = new _decimal.Decimal(0);
          } else {
            _this._tickSize = new _decimal.Decimal(newTickSize);
          }
        },
        enumerable: true
      },
      _contractSize: { writable: true, enumerable: false },
      contractSize: {
        get: function get() {
          return _this._contractSize;
        },
        set: function set(newContractSize) {
          if (!newContractSize) {
            _this._contractSize = new _decimal.Decimal(0);
          } else {
            _this._contractSize = new _decimal.Decimal(newContractSize);
          }
        },
        enumerable: true
      },
      _expiryDate: { writable: true, enumerable: false },
      expiryDate: {
        get: function get() {
          return _this._expiryDate;
        },
        set: function set(newExpiryDate) {
          if (newExpiryDate) {
            var dArray = newExpiryDate.split('-');
            var date = new Date(dArray[0], dArray[1] - 1, dArray[2]);
            _this._expiryDate = date;
          }
        },
        enumerable: true
      }
    });
    _this.settlementType = settlementType;
    _this.contractSize = contractSize;
    _this.pointValue = pointValue;
    _this.tickSize = tickSize;
    _this.quoteUnit = quoteUnit;
    _this.underlyingAssetId = underlyingAssetId;
    _this.expiryDate = expiryDate;
    return _this;
  }

  _createClass(Future, [{
    key: 'getTickValue',
    value: function getTickValue() {
      return this.tickSize.times(this.contractSize);
    }
  }]);

  return Future;
}(_listedDerivative2.default);

exports.default = Future;
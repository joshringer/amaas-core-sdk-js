'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decimal = require('decimal.js');

var _asset = require('../Asset/asset');

var _asset2 = _interopRequireDefault(_asset);

var _enums = require('../enums.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForeignExchangeOption = function (_Asset) {
  _inherits(ForeignExchangeOption, _Asset);

  function ForeignExchangeOption(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'ForeignExchange' : _ref$assetClass,
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
        optionType = _ref.optionType,
        strike = _ref.strike,
        premium = _ref.premium,
        underlyingAssetId = _ref.underlyingAssetId,
        optionStyle = _ref.optionStyle,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, ForeignExchangeOption);

    var _this = _possibleConstructorReturn(this, (ForeignExchangeOption.__proto__ || Object.getPrototypeOf(ForeignExchangeOption)).call(this, {
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
      _optionType: { writable: true, enumerable: false },
      optionType: {
        get: function get() {
          return _this._optionType;
        },
        set: function set(newOptionType) {
          if (newOptionType) {
            if (_enums.OPTION_TYPES.indexOf(newOptionType) === -1) {
              throw new Error('Invalid Option Type: ' + newOptionType);
            }
            _this._optionType = newOptionType;
          }
        },
        enumerable: true
      },
      _optionStyle: { writable: true, enumerable: false },
      optionStyle: {
        get: function get() {
          return _this._optionStyle;
        },
        set: function set(newOptionStyle) {
          if (newOptionStyle) {
            if (_enums.OPTION_STYLES.indexOf(newOptionStyle) === -1) {
              throw new Error('Invalid Option Style: ' + newOptionStyle);
            }
            _this._optionStyle = newOptionStyle;
          }
        },
        enumerable: true
      },
      _strike: { writable: true, enumerable: false },
      strike: {
        get: function get() {
          return _this._strike;
        },
        set: function set(newStrike) {
          if (!newStrike) {
            _this._strike = new _decimal.Decimal(0);
          } else {
            _this._strike = new _decimal.Decimal(newStrike);
          }
        },
        enumerable: true
      },
      _premium: { writable: true, enumerable: false },
      premium: {
        get: function get() {
          return _this._premium;
        },
        set: function set(newPremium) {
          if (!newPremium) {
            _this._premium = new _decimal.Decimal(0);
          } else {
            _this._premium = new _decimal.Decimal(newPremium);
          }
        },
        enumerable: true
      }
    });
    _this.optionType = optionType;
    _this.strike = strike;
    _this.premium = premium;
    _this.underlyingAssetId = underlyingAssetId;
    _this.optionStyle = optionStyle;
    return _this;
  }

  return ForeignExchangeOption;
}(_asset2.default);

exports.default = ForeignExchangeOption;
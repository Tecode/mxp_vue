import _regeneratorRuntime from "babel-runtime/regenerator";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";


import fetch from "@/utils/fetch";
import utilsApi from "@/utils/utilsApi";
import { Toast } from 'mint-ui';
// import store from '@/store/index'
export default {
    //新增方法判定
    operaPost: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(utils, data) {
            var res;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return fetch.post(utils, data);

                        case 2:
                            res = _context.sent;

                            if (!(res.status == 200)) {
                                _context.next = 8;
                                break;
                            }

                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.data.msg,
                            //     type: "success"
                            // });
                            return _context.abrupt("return", true);

                        case 8:
                            if (!(res.status == 422)) {
                                _context.next = 13;
                                break;
                            }

                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.msg,
                            //     type: "error"
                            // });
                            return _context.abrupt("return", false);

                        case 13:
                            if (!(res.status == 403)) {
                                _context.next = 18;
                                break;
                            }

                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.msg,
                            //     type: "error"
                            // });
                            return _context.abrupt("return", false);

                        case 18:
                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.msg,
                            //     type: "error"
                            // });
                            return _context.abrupt("return", false);

                        case 20:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function operaPost(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return operaPost;
    }(),
    //修改方法
    operaPut: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(utils, data) {
            var res;
            return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return fetch.put(utils, data);

                        case 2:
                            res = _context2.sent;

                            if (!(res.status == 200)) {
                                _context2.next = 8;
                                break;
                            }

                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.data.msg,
                            //     type: "success"
                            // });
                            return _context2.abrupt("return", true);

                        case 8:
                            if (!(res.status == 422)) {
                                _context2.next = 13;
                                break;
                            }

                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.msg,
                            //     type: "error"
                            // });
                            return _context2.abrupt("return", false);

                        case 13:
                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.msg,
                            //     type: "error"
                            // });
                            return _context2.abrupt("return", false);

                        case 15:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function operaPut(_x3, _x4) {
            return _ref2.apply(this, arguments);
        }

        return operaPut;
    }(),
    //审批提交与暂存方法 
    operaApprovalPut: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(utils, data) {
            var res;
            return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return fetch.put(utils, data);

                        case 2:
                            res = _context3.sent;

                            if (!(res.status == 200)) {
                                _context3.next = 7;
                                break;
                            }

                            return _context3.abrupt("return", res.data.url);

                        case 7:
                            if (!(res.status == 422)) {
                                _context3.next = 12;
                                break;
                            }

                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.msg,
                            //     type: "error"
                            // });
                            return _context3.abrupt("return", false);

                        case 12:
                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.msg,
                            //     type: "error"
                            // });
                            return _context3.abrupt("return", false);

                        case 14:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function operaApprovalPut(_x5, _x6) {
            return _ref3.apply(this, arguments);
        }

        return operaApprovalPut;
    }(),

    //删除方法
    operaDelete: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(utils) {
            var res;
            return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return fetch.delete(utils);

                        case 2:
                            res = _context4.sent;

                            if (!(res.status == 200)) {
                                _context4.next = 8;
                                break;
                            }

                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.data.msg,
                            //     type: "success"
                            // });
                            return _context4.abrupt("return", true);

                        case 8:
                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.msg,
                            //     type: "error"
                            // });

                        case 9:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function operaDelete(_x7) {
            return _ref4.apply(this, arguments);
        }

        return operaDelete;
    }(),
    operaPostData: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(utils, data) {
            var res;
            return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return fetch.post(utils, data);

                        case 2:
                            res = _context5.sent;

                            if (!(res.status == 200)) {
                                _context5.next = 7;
                                break;
                            }

                            return _context5.abrupt("return", res.data);

                        case 7:
                            if (!(res.status == 422)) {
                                _context5.next = 12;
                                break;
                            }

                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.msg,
                            //     type: "error"
                            // });
                            return _context5.abrupt("return", false);

                        case 12:
                            Toast({
                                message: res.data.msg,
                                duration: 3000
                            });
                            // Message({
                            //     showClose: true,
                            //     message: res.msg,
                            //     type: "error"
                            // });
                            return _context5.abrupt("return", false);

                        case 14:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function operaPostData(_x8, _x9) {
            return _ref5.apply(this, arguments);
        }

        return operaPostData;
    }()
};
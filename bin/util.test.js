'use strict';

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//override console warn&log function so that jest can detect the function calls
console = {
    warn: jest.fn(),
    log: jest.fn()

};
test('someFunc outputs "Hello World"', function () {
    var x = new _util2.default();
    x.someFunc();
    expect(console.log).toHaveBeenCalledWith('Hello World');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLnRlc3QuanMiXSwibmFtZXMiOlsiY29uc29sZSIsIndhcm4iLCJqZXN0IiwiZm4iLCJsb2ciLCJ0ZXN0IiwieCIsInNvbWVGdW5jIiwiZXhwZWN0IiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7OztBQUVBO0FBQ0FBLFVBQVU7QUFDTkMsVUFBTUMsS0FBS0MsRUFBTCxFQURBO0FBRU5DLFNBQU1GLEtBQUtDLEVBQUw7O0FBRkEsQ0FBVjtBQUtBRSxLQUFLLGdDQUFMLEVBQXVDLFlBQUk7QUFDdkMsUUFBSUMsSUFBSSxvQkFBUjtBQUNBQSxNQUFFQyxRQUFGO0FBQ0FDLFdBQU9SLFFBQVFJLEdBQWYsRUFBb0JLLG9CQUFwQixDQUF5QyxhQUF6QztBQUNILENBSkQiLCJmaWxlIjoidXRpbC50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgVXRpbCAgZnJvbSAnLi91dGlsJ1xyXG5cclxuLy9vdmVycmlkZSBjb25zb2xlIHdhcm4mbG9nIGZ1bmN0aW9uIHNvIHRoYXQgamVzdCBjYW4gZGV0ZWN0IHRoZSBmdW5jdGlvbiBjYWxsc1xyXG5jb25zb2xlID0ge1xyXG4gICAgd2FybjogamVzdC5mbigpLFxyXG4gICAgbG9nIDogamVzdC5mbigpXHJcblxyXG59XHJcbnRlc3QoJ3NvbWVGdW5jIG91dHB1dHMgXCJIZWxsbyBXb3JsZFwiJywgKCk9PntcclxuICAgIGxldCB4ID0gbmV3IFV0aWwgKClcclxuICAgIHguc29tZUZ1bmMoKVxyXG4gICAgZXhwZWN0KGNvbnNvbGUubG9nKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCgnSGVsbG8gV29ybGQnKVxyXG59KSJdfQ==
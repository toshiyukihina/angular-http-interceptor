'use strict';

describe('Service: myHttpInterceptor', function () {

  // load the service's module
  beforeEach(module('angularHttpInterceptorApp'));

  // instantiate service
  var myHttpInterceptor;
  beforeEach(inject(function (_myHttpInterceptor_) {
    myHttpInterceptor = _myHttpInterceptor_;
  }));

  it('should do something', function () {
    expect(!!myHttpInterceptor).toBe(true);
  });

});

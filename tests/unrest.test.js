describe('Unrest', function () {
  var provider;
  beforeEach(module('ngUnrest', function (unrestProvider) {
    provider = unrestProvider;
    provider.configure('/api-test',{});
  }));
  beforeEach(inject(function () {}));

  it('can get an instance of unrest', inject(function(unrest) {
    expect(unrest).toBeDefined();
  }));
  it('can query', inject(function(unrest) {
    expect(unrest('Table').query).toBeDefined();
  }));
  it('can be configured', inject(function(unrest) {
    expect(unrest("Table").url == '/api-test/Table').toBe(true);
  }));
});

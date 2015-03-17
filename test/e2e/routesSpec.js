describe("E2E: Testing Routes", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have a working /create_user route', function() {
    var lemons = true;
    browser().navigateTo('#/create_user');
    expect(browser().location().path()).toBe("/create_user");
    expect(lemons).toBe(undefined);
  });

  // it('should have a working /edit/ID route', function() {
  //   browser().navigateTo('#/edit/42');
  //   expect(browser().location().path()).toBe("/edit/42");
  // });

  // it('should have a working /profile/ID route', function() {
  //   browser().navigateTo('#/profile/42');
  //   expect(browser().location().path()).toBe("/profile/42");
  // });

  // it('should have a working /search_users route', function() {
  //   browser().navigateTo('#/search_users');
  //   expect(browser().location().path()).toBe("/search_users");
  // });

});

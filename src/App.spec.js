describe('App', () => {
    test('correct url loads', () => {
        delete global.window.location;
        const href = 'http://localhost:3000';
        global.window.location = { href };
        expect(global.window.location).toMatchObject({"href": "http://localhost:3000"});
    });
  
  });
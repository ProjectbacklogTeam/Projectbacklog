window.onload = function () {
    const router = new Smart.Router('mainView', './');

    router.setRoutes([
        { path: '/', template: 'homeTemplate', title: 'Home' },
        { path: '/about', template: 'aboutTemplate', title: 'About' },
        { path: '/contacts', template: 'contactsTemplate', title: 'Contacts' }
    ]);

    router.route('/');
};
module.exports = app => {
    const controller = app.controller.customer;

    app.route('/api/v1/customer')
    .get(controller.listCustomer)
    .post(controller.saveCustomer);
}
module.exports = app => {
    const controller = app.controllers.customer;

    app.route('/api/v1/customer')
    .get(controller.listCustomer)
    .post(controller.saveCustomer);

    app.route('/api/v1/customer/:customerId')
    .delete(controller.removeCustomer)
    .put(controller.updateCustomer);
}


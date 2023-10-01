export default interface ordersInterface {
    name: string,
    trackingTime: string,
    statusID: number,
    trackingNumber: string,
    additionalComments: string,
    addressLabel: string,
    alternativePhoneNumber: string,
    amount: number,
    userID: number,
    area: string,
    city: string,
    country: string,
    coupon: number,
    couponDetails: string,
    courierServiceAddress: string,
    createdAt: string,
    currency: string,
    discount: number,
    email: string,
    orderID: number,
    ordersShippingAddressID: string,
    paymentGatewayResponse: string,
    paymentID: number,
    paymentMethod: string,
    paymentPhoneNumber: string,
    phoneNumber: string,
    shipping: number,
    status: string,
    statusMassage: string,
    subtotal: number,
    transactionID: string,
    isApproved: boolean,
    isComplete: string,
    isCancel: string,
    cancelReason: string,
}

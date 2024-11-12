import {configureStore} from "@reduxjs/toolkit";
import orderUserSlice from "./slices/orderUserSlice";
import authSlice from "./slices/authSlice";
import withdrawHistorySlice from "./slices/withdrawHistorySlice";
import makeEventSlice from "./slices/makeEventSlice";
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";
import productVendorSlice from "./slices/productVendorSlice";
import requestSlice from "./slices/requestSlice"
import orderHistoryVendorSlice from "./slices/orderHistoryVendor"
import invoiceCustomerSlice from "./slices/invoiceCustomerSlice"
import historyEventSlice from "./slices/historyEvent"
import profileSlice from "./slices/profileSlice"
import eventSlice from "./slices/eventSlice";


export default configureStore({
    reducer: {
        auth: authSlice,
        withdrawHistory: withdrawHistorySlice,
        orderUser: orderUserSlice,
        makeEventSlice: makeEventSlice,
        categorySlice: categorySlice,
        productSlice: productSlice,
        productVendor: productVendorSlice,
        request: requestSlice,
        orderHistoryVendor: orderHistoryVendorSlice,
        invoiceCustomer: invoiceCustomerSlice,
        historyEvent: historyEventSlice,
        profile: profileSlice,
        event: eventSlice
    },
});

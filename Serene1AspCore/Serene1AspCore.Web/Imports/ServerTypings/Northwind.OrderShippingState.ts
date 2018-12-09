namespace Serene1AspCore.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Serene1AspCore.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

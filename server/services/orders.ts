import { Order } from "@prisma/client";
import { prisma } from "../core/database";

export async function getOrder(orderId: string) {
    const order = await prisma.order.findUnique({
        where: {
            id: orderId
        }
    })
    return order;
}

export async function getAllOrders(filters: any, page: any, sort: any) {
    await prisma.order.findMany({
        where: {
            ...filters
        },
        orderBy: {
            code: 'desc'
        },
        skip: (page.number - 1) * page.size,
        take: page.size
    });
}

export async function updateOrder(orderId: string, order: Order) {
    await prisma.order.update({
        where: {
            id: orderId
        },
        data: {
            ...order
        }
    })
}

export async function deleteOrder() {

}
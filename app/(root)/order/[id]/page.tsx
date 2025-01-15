import { Metadata } from 'next';
import { getOrderById } from '@/lib/actions/order.actions';
import { notFound } from 'next/navigation';
import { ShippingAddress } from '@/types';
import OrderDetailsTable from './order-details-table';

export const metadata = {
  title: 'Order Details',
};

const OrderDetailsPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const params = await props.params;

  const { id } = params;

  const order = await getOrderById(id);
  if (!order) notFound();

  const orderItems = order.orderItems.map((item) => ({
    ...item,
    price: item.price.toString(),
  }));

  return (
    <OrderDetailsTable
      order={{
        ...order,
        orderItems,
        shippingAddress: order.shippingAddress as ShippingAddress,
        itemsPrice: order.itemsPrice.toString(),  // TODO: Fix this by Bashir
        shippingPrice: order.shippingPrice.toString(), // TODO: Fix this
        taxPrice: order.taxPrice.toString(),
        totalPrice: order.totalPrice.toString(),
      }}
    />
  );
};


export default OrderDetailsPage;
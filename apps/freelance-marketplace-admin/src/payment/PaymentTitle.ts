import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "freelancer";

export const PaymentTitle = (record: TPayment): string => {
  return record.freelancer?.toString() || String(record.id);
};

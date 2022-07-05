import React from "react";
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Paypal({price}) {
    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: price,
              },
            },
          ],
        });
      }

    const onApprove = (data, actions) =>  {
        return actions.order.capture();
      }

  return (
    <div>
      <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </div>
  )
}

export default Paypal
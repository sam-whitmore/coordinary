import { useEffect, useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isStripeLoading, setIsStripeLoading] = useState(true)

  useEffect(() => {
    if (!stripe) {
      return
    }
    setIsStripeLoading(false)
  }, [stripe])

  useEffect(() => {
    if (!elements) {
      return
    }
    const paymentElement = elements.create('payment')
    paymentElement.mount('#payment-element')
    return () => {
      paymentElement.unmount()
    }
  }, [elements])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements || isStripeLoading) {
      return
    }
    setIsLoading(true)
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:5173',
      },
    })
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Payment succeeded!')
    }
    setIsLoading(false)
  }

  const paymentElementOptions = {
    layout: {
      type: 'tabs',
    },
  }

  return (
    <>
      {isStripeLoading ? (
        <div>Loading Stripe...</div>
      ) : (
        <PaymentElement id="payment-element" options={paymentElementOptions} />
      )}
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </>
  )
}

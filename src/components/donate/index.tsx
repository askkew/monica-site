import "./index.css"

const Donate = () => {
  return (
    <div>
      <button
        className="button-57"
        role="button"
        onClick={() =>
          window.open('https://www.paypal.com/donate/?hosted_button_id=QVWQ9UZMQMDFA', '_blank')
        }
      >
        <span className="text">Donate</span>
        <span>Your donation helps me make cool art!</span>
      </button>
    </div>
  )
}

export default Donate
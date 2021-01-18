const BitcoinPriceTracker = ({ price }) => {
  return <h1>Bitcoin Price: {price}</h1>
}

// gets called on every request
export const getServerSideProps = async () => {
  // fetch data from api
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const price = await res.json()

  return { props: { price: price.bpi.USD.rate } }
}

export default BitcoinPriceTracker

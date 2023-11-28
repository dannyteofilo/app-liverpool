import './App.css'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        <span className="loading loading-spinner text-secondary"></span>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </h1>
    </>
  )
}

export default App

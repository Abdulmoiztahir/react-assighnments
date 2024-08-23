import './App.css'

function App() {
        const cards = [{
          key : 1,
          name : "T-shirt",
          price : 10,
          image : "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D"
        },{
          key : 2,
          name : "Shoes",
          price : 20,
          image : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
        },{
          key : 3,
          name : "Watch",
          price : 30,
          image : "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
        },{
          key : 4,
          name : "Phone",
          price : 40,
          image : "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
        },{
          key : 5,
          name : "Laptop",
          price : 50,
          image : "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
        },{
          key : 6,
          name : "Headphone",
          price : 60,
          image : "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
        }
      ]
  return (
    <>
    <h1 className='text-4xl  '>CARDS WITH REACTS</h1>
    <br />
        <div className="flex flex-wrap -m-4">
          {cards.map(cards =>(
            <div key={cards.key} className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a className="block relative h-48 rounded overflow-hidden">
      <img
        alt="ecommerce"
        className="object-cover object-center w-full h-full block"
        src={cards.image}
      />
    </a>
    <div className="mt-4">
      <h2 className="text-gray-900 title-font text-lg font-medium">
        {cards.name}
      </h2>
      <p className="mt-1">{cards.price}</p>
    </div>
  </div>
          ))}
</div>

    </>
  )
}

export default App

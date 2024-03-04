import react from 'react';

function Card({name, img, flavour, price, quantity}) {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={img} alt="Ice Cream Image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Ice Cream Name</div>
          <p className="text-gray-700 text-base">
            Flavor: {name}<br />
            Price:  ₹{price}<br />
            Flavour: {flavour} <br/>
            Quantity: {quantity}
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#IceCream</span>
        </div>
        <div className="px-6 py-4">
          {/* <a href="#" className="text-blue-500">Read More</a> */}
        </div>
      </div>
    );
}

export default Card;
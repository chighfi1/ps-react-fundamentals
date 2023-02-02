import currencyFormatter from "../helpers/currencyFormatter";

const HouseRow = ({ house }) => {
// const HouseRow = ( {house: { address, country, price }})
//  vvv primitives instead of complex house object vvv 
// const HouseRow = ({ address, country, price })
  return (
    <tr>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {/* vv directory helper vv */}
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
    

    // <tr>
    //   <td>{address}</td>
    //   <td>{country}</td>
    //   <td>{currencyFormatter.format(house.price)}</td>
    // </tr>
  );
};

export default HouseRow;

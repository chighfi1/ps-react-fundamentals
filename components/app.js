import Banner from "./banner";
import HouseList from "./houseList";

const App = () => {
  return (
    <>
      <Banner>
        {/* uses special property called children */}
        <div>Providing houses all over the world</div>
      </Banner>
      {/* vv using prop */}
      {/* <Banner headerText="Providing houses all over the world"/> */}

      <HouseList />
    </>
  );
};

export default App;

import { GetPackages } from "../DatabaseSchema/dbSchema";
const Packages = () => {
  const packages = GetPackages();
  return <div id="packages">
    {packages.map((pkg, index) => (<div key={index}>
      <img src={pkg.imageURL} alt="Package" className="packageImage"/>
      <h3>{pkg.name}</h3>
      <p>Price: ${pkg.price.toFixed(2)}</p>
    </div>))}
  </div>;
};
export default Packages;
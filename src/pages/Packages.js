import { GetPackages } from "../DatabaseSchema/dbSchema";
const Packages = () => {
  const packages = GetPackages();
  return <div id="packages" className="mt-4">
    {packages.map((pkg, index) => (<div key={index} className="package">
      <img src={pkg.imageURL} alt="Package" className="packageImage"/>
      <h3 className="text-center">{pkg.name}</h3>
      <p className="text-center">Price: ${pkg.price.toFixed(2)}</p>
    </div>))}
  </div>;
};
export default Packages;
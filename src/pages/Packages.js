import { GetPackages } from "../DatabaseSchema/dbSchema";
const Packages = () => {
  const packages = GetPackages();
  return <div id="packages">
    {packages.map((pkg, index) => (<div key={index}>
      <h3>{pkg.name}</h3>
    </div>))}
  </div>;
};
export default Packages;
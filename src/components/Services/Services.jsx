import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-5xl font-semibold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-3 gap-6">
        {services.events.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

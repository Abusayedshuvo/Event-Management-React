import { useLoaderData, useParams } from "react-router-dom";

const ServicesDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const service = services.events.find((service) => service.id == id);
  const { name, image, price, shortDescription } = service;
  console.log(service);

  return (
    <div className="container mx-auto py-20">
      <img src={image} alt="" />
      <p className="text-[#f4a492] text-3xl font-semibold mt-6">
        Price: {price}
      </p>
      <p className="text-5xl my-6 font-semibold">{name}</p>
      <p>
        {shortDescription} Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Vero quibusdam commodi officiis quo expedita dolore ut, qui a
        aliquam, impedit ipsam voluptates! Earum amet maiores eveniet et vitae,
        quia voluptates.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        dignissimos ipsum at tempore earum unde, optio, eos omnis ducimus
        praesentium nulla minus totam eum aut et consectetur, ab nam nesciunt.
      </p>
    </div>
  );
};

export default ServicesDetails;

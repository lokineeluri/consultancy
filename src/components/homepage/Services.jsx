import { useState, useRef } from "react";
import svc from "../../assets/services.mp4";
import svcs from "../../assets/svc_bg.png";
import backupbg from "../../assets/svc_bg.png";
import "./homepage.css";

const data = [
  {
    title: "Website Development",
    description:
      "Backed by a dedicated web app development and management team, we elevate user experiences through ongoing innovation and a research-driven approach.",
    p_description: ` In today's digital era, websites have become essential to showcasing your business or product on a global scale. At Stratosys Inc., we understand the importance of a universal online presence and work closely with our clients to deliver responsive, user-friendly, and visually appealing websites that enhance customer trust and engagement. 
Whether you need a simple single-page static website or a complex e-commerce platform, we offer comprehensive website development services tailored to your needs. Our team of expert front-end, back-end, and full-stack developers leverages the latest technologies to build dynamic, high-performing websites that are both stunning and scalable. 
Using an agile development methodology, we ensure your project is ready for GoLive with well-documented system and architectural designs, UML diagrams, and hardware architecture plans. 
We believe web applications should be robust, secure, and accessible to users worldwide. Our dedicated web app development and management team conducts thorough research and development to enhance user experience and performance. We also educate our clients on the benefits of high-quality web applications, enabling informed decisions throughout the project lifecycle. 
`,
    image: "", // Add your image src here
  },
  {
    title: "Cloud Migration",
    description:
      "Choose from the transfer and services of applications, websites, databases, storage, physical and virtual servers, or entire data centres",
    p_description: `Accelerate Your Cloud Transition and Modernisation 
Leading cloud platforms like AWS, Azure, and Google Cloud offer a broad suite of migration and modernization solutions to seamlessly move workloads from on-premises environments, colocation facilities, or other public clouds. Whether you're migrating applications, websites, databases, storage, physical or virtual servers — or even entire data centers — these platforms provide the tools and services to support every stage of your journey. At  Stratosys  Inc., we empower organizations to stay ahead of the curve by delivering tailored cloud solutions that drive speed, scalability, and cost efficiency. Our proven methodology helps businesses address critical challenges faster and more effectively. We've successfully guided numerous clients through their cloud migration journey, helping them transition from on-premises infrastructure to agile, modern cloud environments. Let  Stratosys  give your company a competitive edge — modernize smarter, migrate faster. 
`,
    image: "", // Add your image src here
  },
  {
    title: "Mobile Application Development",
    description:
      "Stratosys Inc. possesses deep expertise in designing and developing applications tailored to the unique needs of organizations, with specialized proficiency ",
    p_description: `At Stratosys Inc., our team of seasoned experts specializes in designing and developing mobile applications tailored to your specific requirements. Whether you need solutions for Android, iOS, Windows, or cross-platform environments, we build native and hybrid apps that give you a competitive edge in the market. These applications are fully deployable to all major marketplaces, including the Apple App Store, Google Play Store, and other global platforms. 
We believe every customer's vision deserves to be brought to life and made available across app stores worldwide. 
What sets us apart is not just our expertise—we're committed to delivering high-quality applications within your budget and timeline. With extensive experience in mobile application development, we treat each project as a unique opportunity. Our approach involves thorough research, meticulous planning, and focused execution to ensure your success. 
`,
    image: "", // Add your image src here
  },

  {
    title: "ERP Services",
    description:
      "Implementation, Maintenance and Upgrade - The need for a solution to migrate ERP data has increased, especially in recent years",
    p_description: `Enterprise Resource Planning (ERP) is a software that helps organizations to operate their business effectively and efficiently. ERP application supports and integrates most of the business functionality such as procurement of goods and services, finance, accounting, HR operations, sales and distribution, manufacturing, warehouse management, production planning and logistics.

ERP Services – SAP Implementation, Maintenance and Upgrade: The need for a solution to migrate ERP data has increased, especially in recent years. For server or storage hardware replacement, website consolidation, maintenance or upgrades, application migration, disaster recovery or data centre re-installation, many organizations transfer data from one ERP application to another. With the right tools and expertise, Stratosys team of experts creates a data migration plan that integrates with the overall implementation project plan.

SAP stood in the top, capturing huge market in providing ERP solutions and services.

Functional modules:

• Financial Accounting (FI)
• Financial Supply Chain Management (FSCM)
• Controlling (CO)
• Materials Management (MM)
• Sales and Distribution (SD)
• Logistics Execution (LE)
• Production Planning (PP)
• Quality Management (QM)
• Plant Maintenance (PM)
• Project System (PS)
• Human Resources (HR)`,
    image: "", // Add your image src here
  },
  {
    title: "Databases",
    description:
      "We offer expert data management and integration consulting services to give your business a strategic advantage at an affordable cost.",
    p_description: `Unlock the full potential of your data with our end-to-end Data Analysis and Migration services. We specialize in extracting valuable insights, ensuring seamless data movement, and modernizing your data infrastructure. Whether you're transitioning to the cloud, consolidating databases, or preparing for analytics at scale, our team ensures accuracy, security, and minimal downtime. `,
    image: "", // Add your image src here
  },
  {
    title: "Digital Expansion",
    description:
      "When executed effectively, a digital growth strategy boosts website traffic, increases online inquiries, and guides prospects through the digital sales funnel",
    p_description: `At the heart of digital transformation lies the power of leveraging robust platforms across data centers, cloud, and edge environments. At  Stratosys   , we help organizations develop the optimal platform strategy, execute migrations quickly and accurately, and consolidate data centers with minimal disruption. 
 
Switching between data centers or transitioning to/from cloud platforms is a high-stakes operation—downtime can be costly, and data integrity is non-negotiable. With our expert migration and analytics services, we ensure a smooth, secure, and efficient transition. 10+ years of average experience in data analytics and migration services 
 
`,
    image: "", // Add your image src here
  },
];

function Servicecard(props) {
  const dialog = useRef();
  return (
    <>
      <dialog ref={dialog}>
        <div className="popup">
          <h1>{props.title}</h1>
          {props.image && (
            <div className="popup-image-container">
              <img
                src={props.image}
                alt={props.title}
                className="popup-image"
              />
            </div>
          )}
          <p>{props.p_description || props.description}</p>
          <div className="popup-close-container">
            <button onClick={() => dialog.current.close()}>close</button>
          </div>
        </div>
      </dialog>
      <div className="servicecard" onClick={() => dialog.current.showModal()}>
        <div>
          <h1>{props.title}</h1>
        </div>
        <p>{props.description}</p>
        <b>Read more....</b>
        <button onClick={() => dialog.current.showModal()}>Explore more</button>
      </div>
    </>
  );
}

function Services() {
  return (
    <div className="service" id="services">
      <video
        className="hero-bg svcbg"
        autoPlay
        loop
        muted
        playsInline
        loading="lazy"
        poster={backupbg}
      >
        <source src={svc} type="video/mp4" />
      </video>

      <div className="srvc">
        <div className="Service-left">
          <h1 className="hh1">Dev Technologies</h1>
        </div>
        <div className="service-cards-container">
          {data.map((item, index) => (
            <Servicecard
              key={index}
              title={item.title}
              description={item.description}
              p_description={item.p_description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

import * as React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionImg from "../../assets/API_page/accordion-img1.png";

export default function AccordionExpandDefault() {
  const data = [
    {
      title: "Service List",
      details: [
        {
          Description: ["Your key API", "Add"],
          code: `// Example: Fetching service list from API
fetch('https://api.example.com/services')
  .then(response => response.json())
  .then(data => console.log('Service List:', data))
  .catch(error => console.error('Error fetching services:', error));`,
        },
      ],
    },

    {
      title: "Add order ",
      details: [
        {
          Description: ["Your key API", "Add"],
          code: `// Example: Adding a new order using POST request
const newOrder = {
  product_id: 1,
  quantity: 2,
  customer_id: 123,
  address: '123 Main St, Springfield, USA'
};

fetch('https://api.example.com/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newOrder),
})
  .then(response => response.json())
  .then(data => console.log('Order added:', data))
  .catch(error => console.error('Error adding order:', error));`,
        },
      ],
    },
    {
      title: "Order status ",
      details: [
        {
          Description: ["Your key API", "Add"],
          code: `// Example: Fetching order status by order ID
const orderId = 456;

fetch(\`https://api.example.com/orders/\${orderId}/status\`)
  .then(response => response.json())
  .then(data => console.log('Order Status:', data))
  .catch(error => console.error('Error fetching order status:', error));`,
        },
      ],
    },
    {
      title: "Multiple orders status",
      details: [
        {
          Description: ["Your key API", "Add"],
          code: `// Example: Fetching statuses of multiple orders using POST request
const orderIds = [123, 456, 789];

fetch('https://api.example.com/orders/statuses', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ order_ids: orderIds }),
})
  .then(response => response.json())
  .then(data => console.log('Multiple Orders Status:', data))
  .catch(error => console.error('Error fetching multiple orders status:', error));`,
        },
      ],
    },
    {
      title: "Service",
      details: [
        {
          Description: ["Your key API", "Add"],
          code: `// Example: Fetching details of a specific service by ID
const serviceId = 123;

fetch(\`https://api.example.com/services/\${serviceId}\`)
  .then(response => response.json())
  .then(data => console.log('Service Details:', data))
  .catch(error => console.error('Error fetching service details:', error));`,
        },
      ],
    },
    {
      title: "Create multiple refill",
      details: [
        {
          Description: ["Your key API", "Add"],
          code: `// Example: Creating multiple refills using POST request
const refillOrders = [
  { product_id: 1, quantity: 2 },
  { product_id: 2, quantity: 1 },
  { product_id: 3, quantity: 3 },
];

fetch('https://api.example.com/refills', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ customer_id: 123, orders: refillOrders }),
})
  .then(response => response.json())
  .then(data => console.log('Multiple Refills Created:', data))
  .catch(error => console.error('Error creating refills:', error));`,
        },
      ],
    },
  ];

  const [accordionData, setAccordionData] = useState(data);
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [copyMsg, setCopyMsg] = useState("Copy code");

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);

    setCopyMsg("Copied");
    setTimeout(() => {
      setCopyMsg("Copy code");
    }, 2000);
  };

  return (
    <div className="accordion-wrapper">
      {accordionData.map((item, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            className="accordion-wrapper-inner"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography className="accordion-title">{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`panel${index}-body`}>
              <table className="accordion-table">
                <thead>
                  <tr className="accordion-table-title-bar">
                    <th>Parameters</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="accordion-table-body">
                    <td>key</td>
                    <td>{item.details[0].Description[0]}</td>
                  </tr>
                  <tr className="accordion-table-body">
                    <td>Action</td>
                    <td>{item.details[0].Description[1]}</td>
                  </tr>
                </tbody>
              </table>
              <pre className="code-block-in-accordion">
                <code>{item.details[0].code}</code>
              </pre>
              <button
                className="accordion-table-code-copy"
                onClick={() => handleCopyCode(item.details[0].code)}
              >
                {copyMsg}
              </button>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

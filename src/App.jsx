import Card from "./Card";
import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
function App() {
  let data = [
    {
      PlanName: "Netflix Mobile-only plan",
      price: 149,
      features: [
        {
          name: "1 screen at a time ",
          enabled : true
        },
        {
          name: "480p streaming quality ",
          enabled : true
        },
        {
          name: "Support for only mobile devices",
          enabled : true
        },
        {
          name: " Email not support  ",
          enabled : false
        },
      ],
    },
    {
      PlanName: "Netflix Basic Plan",
      price: 199,
      features: [
        {
          name: "1 screen at a time ",
          enabled : true
        },
        {
          name: "720p streaming quality ",
          enabled : true
        },
        {
          name: "Support for mobile, tablet,",
          enabled : true
        },
        {
          name: " Email not support ",
          enabled : false
        },
      ],
    },
    {
      PlanName: "Netflix Standard Plan",
      price: 499,
      features: [
        {
          name: "2 screen at a time ",
          enabled : true
        },
        {
          name: "1080p streaming quality ",
          enabled : true
        },
        {
          name: "Support for mobile, tablet, laptop",
          enabled : true
        },
        {
          name: " Priority Email support  ",
          enabled : true
        },
      ],
      buttonFocus : true
      
    },
    {
      PlanName: "Netflix Premium Plan",
      price: 649,
      features: [
        {
          name: "4 screen at a time ",
          enabled : true
        },
        {
          name: "4k streaming quality ",
          enabled : true
        },
        {
          name: "Support for mobile,tablet,laptop,TV",
          enabled : true
        },
        {
          name: "Priority Email and Call support  ",
          enabled : true
        },
      ],
      buttonFocus : true
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row">
          {data.map((item, index) => {
            return <Card item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

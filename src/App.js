import logo from './logo.svg';
import './App.css';
import Pricecard from './Pricecard';

function App() {
  let Pricelist = [ { plan : "FREE",
      price : 0,
      currency : "$",
      period : "month",
      features : [
        {
          name : "Single User",
          enable : true
        },
        {
          name : "5GB Storage",
          enable : true
        },
        {
          name : "Unlimited Public Projects",
          enable : true
        },
        {
          name : "Community Access",
          enable : true
        },
        {
          name : "Unlimited Private Projects",
          enable : false
        },
        {
          name : "Dedicated Phone Support",
          enable : false
        },
        {
          name : "Free Subdomain",
          enable : false
        },
        {
          name : "Monthly Status Reports",
          enable : false
        }
      ]
   },
   { plan : "FREE",
      price : 9,
      currency : "$",
      period : "month",
      features : [
        {
          name : "5 Users",
          enable : true
        },
        {
          name : "50GB Storage",
          enable : true
        },
        {
          name : "Unlimited Public Projects",
          enable : true
        },
        {
          name : "Community Access",
          enable : true
        },
        {
          name : "Unlimited Public Projects",
          enable : true
        },
        {
          name : "Dedicated Phone Support",
          enable : true
        },
        {
          name : "Free Subdomain",
          enable : true
        },
        {
          name : "Monthly Status Reports",
          enable : false
        }
      ]
   },
   { plan : "FREE",
      price : 49,
      currency : "$",
      period : "month",
      features : [
        {
          name : "Unlimited User",
          enable : true
        },
        {
          name : "150GB Storage",
          enable : true
        },
        {
          name : "Unlimited Public Projects",
          enable : true
        },
        {
          name : "Community Access",
          enable : true
        },
        {
          name : "Unlimited Private Projects",
          enable : true
        },
        {
          name : "Dedicated Phone Support",
          enable : true
        },
        {
          name : "Unlimited Free Subdomain",
          enable : true
        },
        {
          name : "Monthly Status Reports",
          enable : true
        }
      ]
   }
  ]
  
return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
        {
          Pricelist.map(obj => <Pricecard data={obj}></Pricecard>)
        }
        </div>
      </div>
    </section>
  );
}

export default App;

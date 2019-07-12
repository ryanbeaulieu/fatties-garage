import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/Card/Card';



class Shop extends Component {
  // ReactFC.fcRoot(FusionCharts);

  state = {
    merchandise: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/products')
    .then(response => {
      return response.json();
    })
    .then(products => {
      this.setState({
        merchandise: products.products
      })
    })
    .then(() => {
      const targets = document.querySelectorAll('img[data-src]');

      const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if(entry.isIntersecting) {
              const img = entry.target;
              const src = img.getAttribute("data-src");
              img.src = src;
              // img.classList.add("loaded");
  
              observer.disconnect();
            }
          });
        });

        io.observe(target);
      };
      targets.forEach(lazyLoad);
    })
  }

  render(props) {
    return (
        <div>
        {/* {this.state.merchandise.length === 0 ? "LOADING" : null} */}
        <Grid container spacing={3}>
          {
            this.state.merchandise.map((item, idx) =>{
              return (
                <Grid item xs={6} md={4} lg={3} key={item._id}>
                  <Card details={item}  idx={idx} />
                </Grid>
              )
            })
          }
        </Grid>
        </div>
        
    );
  }
}

export default Shop;

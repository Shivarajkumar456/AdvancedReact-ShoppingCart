import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_items = [{id:'p1', title:'My first Book', price:6, description:'This is my first Book'},
{id:'p2', title:'My second Book', price:8, description:'This is my second Book'}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {Dummy_items.map(item=>
        <ProductItem
          key= {item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      )}
        
      </ul>
    </section>
  );
};

export default Products;

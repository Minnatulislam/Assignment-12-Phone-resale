import React from 'react';
import Categories from '../Categories/Categories';
import ExtraSection from '../ExtraSection/ExtraSection';
import HomeBennar from '../HomeBennar/HomeBennar';





const Home = () => {

    //   const productsItems = useLoaderData()
         
    
    return (
        <div className='mx-5'>
            
             <HomeBennar></HomeBennar>
              
             <Categories></Categories>
             <ExtraSection></ExtraSection>

                  
        </div>
    );
};

export default Home;
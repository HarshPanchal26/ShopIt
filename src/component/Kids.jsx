import React from 'react'
import '../css/kids.css';
import SimpleImageSlider from "react-simple-image-slider";
import BrandList from './BrandList';
import Footer from './Footer';

const BrandForKids=[
    {
        id :1,
        url : 'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/ab69d015-a975-4bda-990c-49e68938f6b31604926460802-19-FavBrands-AllenSollyJuniors.jpg'
    },
    {
        id :2,
        url :'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/fee6018d-c5dd-44b7-b1d1-9b994c1ae1e21604926460545-13-FavBrands-UCB.jpg'
    },
    {
        id :3,
        url :'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4d3f0e9d-1b7a-458e-b05b-75d1f51db0411604926460628-15-FavBrands-NautiNati.jpg'
    },
    {
        id :4,
        url :'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/a505cf6b-beab-4bea-ba8d-06d7302486761604926460589-14-FavBrands-USPA.jpg'
    },
    {
        id :5,
        url :'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/10/5843d479-8331-4c70-9e44-796b984a258e1604993081657-17-FavBrands-MiniKlub--1-.jpg'
    },
    {
        id :6,
        url :'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/20/dc3e538c-bdbe-4df6-b38d-e628f1b18e211605856135445-ShopBybrands-lilpicks.jpg'
    },
    {
        id :7,
        url :'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/0bb2a638-7a84-4e75-bbbb-152140d32fd51604926460667-16-FavBrands-Peppermint.jpg'
    },
    {
        id :8,
        url :'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7a43b5cc-7b14-465a-9043-153fe35fb4d91604926460506-12-FavBrands-Gini_Jony.jpg'
    },
    {
        id :9,
        url :'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4f79cccf-f8af-4a41-b531-a02ffc8bb1151604926460459-11-FavBrands-YK.jpg'
    },
    {
        id :10,
        url :'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/fee6018d-c5dd-44b7-b1d1-9b994c1ae1e21604926460545-13-FavBrands-UCB.jpg'
    },

];
export default function Kids() {
  return (
    <>
    <div className='kids'>
      <div className='kids-slideshow'>
        {/* <SimpleImageSlider
            width={896}
            height={504}
            images={kidsImageForSlideShow}
            showBullets={true}
            showNavs={true}
          /> */}
          {/* <h1>Slide_Show</h1> */}
          <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/a606c305-a23f-4fe3-a630-343ced4a10261649782019470-Kids-Wear_Desk_Banner.jpg?v1' alt='Kids-secstion'></img>
      </div>
      <div className='title'><h2>Brands For Your little One</h2></div>
      <BrandList list={BrandForKids}></BrandList>
      <h2>Explore More</h2>
      <div className='explore-more'>
        <div className='exp-img'>
          <img src='https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/630c5d84-b4fa-4ba8-aa92-c91cd134b9201604906586823-39-Banner-LogoMania.jpg' alt='image1'></img>
        </div>
        <div className='exp-img'>
          <img src='https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7e5d76b3-afd1-4e82-8eee-179269cbab1c1604906586871-40-Banner-CharacterStore.jpg' alt='image2'></img>
        </div>
        <div className='exp-img'>
          <img src='https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/cd843509-16fe-4437-a814-90f3eea6bb4b1604906586922-41-Banner-AllOrganic.jpg' alt='image2'></img>
        </div>
        <div className='exp-img'>
          <img src='https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/d878e27a-f64d-45c9-bd9b-ee257b49894f1604906586980-42-Banner-EssentialStore.jpg' alt='image2'></img>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
    </>
  )
}

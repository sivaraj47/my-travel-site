import React from "react";

function Banner(){
    return(
     <div className="container p-4 mb-4">
        <div className="row">         
   <svg width="708" height="666" viewBox="0 0 708 666" class="blur" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_4687_3057)">
<rect x="198.201" y="163.387" width="311.63" height="304.727" fill="#3D9FFB" fill-opacity="0.18"/>
</g>
<defs>
<filter id="filter0_f_4687_3057" x="0.966705" y="-33.8477" width="706.099" height="699.196" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="98.6172" result="effect1_foregroundBlur_4687_3057"/>
</filter>
</defs>
</svg>

            <div className="col-md-5 col-12 text-start">
             <span className="fnt13 mb-5 p-3 shadow-sm">Explore the world!</span>
             <span className="fnt71 d-block my-4">Travel <span className="fntclr">with Codingwithssr </span> world</span>
             <span className="fntsub">Where adventure meets comfort. We create unforgettable travel experiences</span>
             <div className="row mt-3">
             <button className="getstartedbtn">Get Started</button>
                   <button className="watchbtn">Watch Demo</button>
             </div>
            </div>
          
            <div className="col-md-7 col-12">
                <div className="banner-text">   
                    <img src="https://i.postimg.cc/SNw8yFC1/Group-1000001855.png" className="img-fluid"/>
                     <button className="toplace">
                        <svg width="18" height="20" class="m-1" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.523254 8.41348C0.523254 3.87717 4.31398 0.210693 8.89921 0.210693C13.4974 0.210693 17.2882 3.87717 17.2882 8.41348C17.2882 10.6993 16.4568 12.8215 15.0885 14.6202C13.579 16.6043 11.7185 18.3331 9.62415 19.69C9.14487 20.0036 8.71233 20.0272 8.18621 19.69C6.08008 18.3331 4.21952 16.6043 2.72291 14.6202C1.35359 12.8215 0.523254 10.6993 0.523254 8.41348ZM6.13875 8.6689C6.13875 10.1885 7.37883 11.3837 8.89921 11.3837C10.4207 11.3837 11.6727 10.1885 11.6727 8.6689C11.6727 7.16104 10.4207 5.90764 8.89921 5.90764C7.37883 5.90764 6.13875 7.16104 6.13875 8.6689Z" fill="#FACD49"/>
                  </svg>Top Place</button>  
                   <button className="tophotel">
                        <svg width="18" height="20" class="m-1" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.523254 8.41348C0.523254 3.87717 4.31398 0.210693 8.89921 0.210693C13.4974 0.210693 17.2882 3.87717 17.2882 8.41348C17.2882 10.6993 16.4568 12.8215 15.0885 14.6202C13.579 16.6043 11.7185 18.3331 9.62415 19.69C9.14487 20.0036 8.71233 20.0272 8.18621 19.69C6.08008 18.3331 4.21952 16.6043 2.72291 14.6202C1.35359 12.8215 0.523254 10.6993 0.523254 8.41348ZM6.13875 8.6689C6.13875 10.1885 7.37883 11.3837 8.89921 11.3837C10.4207 11.3837 11.6727 10.1885 11.6727 8.6689C11.6727 7.16104 10.4207 5.90764 8.89921 5.90764C7.37883 5.90764 6.13875 7.16104 6.13875 8.6689Z" fill="#FACD49"/>
                  </svg>Top Hotel</button>               
                </div>
                <img className="travlimg pl-1" src="https://i.postimg.cc/Njq4drJ0/menina-de-cabelos-escuros-com-oculos-e-chapeu-de-palha-detem-ingressos-e-mala-azul-retrato-de-viajan.png"/>
             

                </div>
            </div>
        </div>
  
    );
}
export default Banner;

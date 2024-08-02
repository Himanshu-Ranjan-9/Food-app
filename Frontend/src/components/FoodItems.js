import './css/foodtems.css'
// import img1 from "../assets/"
const FoodItems=()=>{
    return(
        <>
            <div className="container mx-auto flex py-12 ">
            <div className="text  pl-20 text-center flex flex-col items-center justify-center">
                <h1 className='heading font-Pompiere text-orange-600 text-2xl  font-semibold underline '>New Product</h1>
                <div className="discription">
                <p className='text-black'>Milatino is a London based jewellery brand. Each piece in our collection has been meticulously designed in our studio near London Bridge and embodies our principals of simplicity, detail and understated masculinity. Our collection of Pendants, Cuffs and Rings have been designed to be worn individually or layered and stacked together.</p>

                </div>
            </div>
            <div className="right-side flex ml-12">
                <div className="image-laft-container m-2">
                    <img src="https://www.posist.com/restaurant-times/wp-content/uploads/2017/11/Effective-Strategies-To-Improve-Your-Restaurant-Service-And-Provide-A-Stellar-Guest-Experience.jpg" className="pic-1 w-14 " alt="images1" />
                </div>
                <div className="image-right-container flex flex-col">
                    <img src="https://www.mahoneyes.com/wp-content/uploads/2021/06/What-Are-the-Main-Restaurant-Service-Providers-1024x683.webp" alt="image2" className='m-2 w-72 h-52'/>
                    <img src="https://23rdgroup.com/assets/images/related/industry-service-restaurant-1310x900%20(1).jpg" alt="image3" className='m-2 w-72 h-60' />
                </div>
            </div>

            </div>
        </>

    )
}
export default FoodItems;
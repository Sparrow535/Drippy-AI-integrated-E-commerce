import Button from "../components/Button";
import sampleImage from "../assets/landing1.png"; // Adjust the path as necessary

export default function Landing() {
  return (
    <div className="flex flex-col justify-start  h-full w-full ">
      <div className="flex flex-row justify-between items-center w-full px-20 py-4">
        <div>
          <p className="flex gap-2">
            Sign up and get 20% off to your first order.
            <a href="">Sign Up Now</a>
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <a href="" className="font-semibold hover:underline">
            Sign Up
          </a>
          <div className="h-7 w-px bg-gray-800"></div> {/* Vertical Divider */}
          <a href="" className="font-semibold hover:underline">
            Login
          </a>
        </div>
      </div>
      <div className="mt-10 px-20">
        <h1 className="text-5xl font-bold">DRIPPY</h1>
      </div>
      <div className="flex mt-10">
        {/* Left Section - 70% */}
        <div className="w-[70%] bg-customGreen flex flex-col justify-center items-start p-12 text-white">
          <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
          <p className="mt-4 text-lg">
            Get the best deals and exclusive offers. Shop now and enjoy amazing
            discounts!
          </p>
          <div className="mt-6">
            <Button text="Shop Now" onClick={() => alert("Button Clicked!")} />
          </div>
        </div>

        {/* Right Section - 30% */}
        <div className="w-[30%] flex items-center justify-center bg-gray-100">
          <img
            src={sampleImage}
            alt="Shop Now"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

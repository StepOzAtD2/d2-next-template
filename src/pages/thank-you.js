import Image from "next/image";


export default function ThankYou() {
  return (
    <div className="px-8 py-4 mx-auto max-w-full lg:max-w-screen-xl">
      <div className="">
        
        <div className="flex flex-col justify-center"> 
          <div className="max-w-full">
            <div className="mb-120px">
              <Image
                src="/images/D2_Logo_Symbol.svg"
                width="100"
                height="50"
              />
            </div>
            <div className="max-w-lg mb-6 text-2xl tracking-tight text-gray-900">
              Cảm ơn / Tak / Thank you / Merci 🙏
            </div>
            <p className="max-w-screen text-4xl text-gray-700 leading-tight">
              Thank you for filling out our form, your time is much appreciated. <br />
              We look forward to learn more about the project.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
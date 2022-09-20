import Image from 'next/image';

const Header = () => {
  return (
    <div className="px-8 py-4 mx-auto md:max-w-full lg:max-w-screen-xl">
      <div className="grid lg:grid-cols-2">
        
        <div className="flex flex-col justify-center"> 
          <div className="max-w-xl">
            <div className="mb-120px">
              <Image
                src="/images/D2_Logo_Symbol.svg"
                width="100"
                height="50"
              />
            </div>
            <div className="max-w-lg mb-6 text-2xl tracking-tight text-gray-900">
              Xin chào / Hej / Hello / Bonjour 🙏
            </div>
            <p className="text-4xl text-gray-700 leading-tight">
              Welcome to our Dojo. Before we begin we'd like to collect a few information about your new project.
            </p>
          </div>
        </div>

        <div className="relative">
          {/*  */}
        </div>

      </div>
    </div>
  );
};

export default Header;
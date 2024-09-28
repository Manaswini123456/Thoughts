const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Column 1: About */}
            <div className="md:col-start-1">
              <h2 className="text-lg font-semibold mb-4">About Us</h2>
              <p className="text-sm text-gray-400 w-[70%]">
                We are a team dedicated to bringing mindfulness to your everyday life with soothing thoughts and reflections.
              </p>
            </div>
  
            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-end md:col-start-2 px-8 ">
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    Home
                  </a>
                </li>
                
                </ul>
                </div>
          </div>
  
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Mindful Musings. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
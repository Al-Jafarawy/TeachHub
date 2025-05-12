const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">TeachHub</h2>
            <p className="text-gray-400 text-sm">Where modern learning meets smart technology.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/courses" className="text-gray-400 hover:text-white">Course</a></li>
              <li><a href="/login" className="text-gray-400 hover:text-white">Login</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@teachhub.com</li>
              <li>Phone: +20100-XXX-XXXX</li>
              <li>Cairo, Egypt</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} TeachHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

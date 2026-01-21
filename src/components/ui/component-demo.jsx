import { useState } from 'react';
import Button from './button';
import Input from './input';
import SocialIcons from './social-icons';
import { ArrowIcon, MenuIcon, CloseIcon } from './icons';

/**
 * Demo component showcasing all UI components
 * This can be imported and used to test the components
 */
const ComponentDemo = () => {
  const [email, setEmail] = useState('');
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <h1 className="text-3xl font-bold text-center mb-8">Fauna UI Components Demo</h1>

      {/* Button Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Get in touch</Button>
            <Button variant="outline">Learn More</Button>
            <Button variant="link">Link Style</Button>
            <Button variant="register">Register</Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="small">Small</Button>
            <Button size="default">Default</Button>
            <Button size="large">Large</Button>
            <Button disabled>Disabled</Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary">
              <span className="mr-2">With Arrow</span>
              <ArrowIcon width={16} height={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Input Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Input Fields</h2>
        <div className="max-w-md space-y-4">
          <Input
            type="email"
            placeholder="Your e-mail..."
          />

          <Input
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            label="Password"
            placeholder="Enter password"
            required
          />

          <Input
            type="email"
            label="Email with Error"
            placeholder="Enter your email"
            error="Please enter a valid email address"
          />

          <Input
            type="text"
            label="Disabled Input"
            placeholder="This is disabled"
            disabled
          />
        </div>
      </section>

      {/* Social Icons Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Social Icons</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg mb-2">Default Style</h3>
            <SocialIcons />
          </div>

          <div>
            <h3 className="text-lg mb-2">Centered with White Hover</h3>
            <SocialIcons
              className="justify-center"
              iconClassName="inline-block mx-2 text-gray-600 hover:text-white hover:bg-teal-900 p-2 rounded"
            />
          </div>

          <div>
            <h3 className="text-lg mb-2">With Labels</h3>
            <SocialIcons showLabels />
          </div>
        </div>
      </section>

      {/* Icon Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Icons</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MenuIcon className="text-gray-600" />
              <span>Menu Icon</span>
            </div>

            <div className="flex items-center gap-2">
              <CloseIcon width={24} height={24} color="#666" />
              <span>Close Icon</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ArrowIcon direction="left" color="teal" />
              <span>Left Arrow</span>
            </div>

            <div className="flex items-center gap-2">
              <ArrowIcon direction="right" className="text-lime-500" />
              <span>Right Arrow</span>
            </div>

            <div className="flex items-center gap-2">
              <ArrowIcon direction="up" color="blue" />
              <span>Up Arrow</span>
            </div>

            <div className="flex items-center gap-2">
              <ArrowIcon direction="down" color="red" />
              <span>Down Arrow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Nav Demo */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Mobile Navigation Demo</h2>
        <div className="border rounded-lg p-4 bg-teal-900">
          <div className="flex justify-between items-center">
            <span className="text-white font-semibold">Logo</span>
            <button
              onClick={() => setShowMobileNav(!showMobileNav)}
              className="text-white hover:text-lime-500"
            >
              {showMobileNav ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {showMobileNav && (
            <div className="mt-4 pt-4 border-t border-white/20">
              <nav className="space-y-2">
                <a href="#" className="block text-white hover:text-lime-500 py-2">Home</a>
                <a href="#" className="block text-white hover:text-lime-500 py-2">About</a>
                <a href="#" className="block text-white hover:text-lime-500 py-2">Pricing</a>
                <a href="#" className="block text-white hover:text-lime-500 py-2">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ComponentDemo;
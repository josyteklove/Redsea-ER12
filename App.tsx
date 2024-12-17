import { useState } from 'react';

interface Hero {
  title: string;
  description: string;
  cta: string;
}

interface Feature {
  title: string;
  description: string;
}

const App = () => {
  const [selectedTab, setSelectedTab] = useState('features');
  const [selectedFeature, setSelectedFeature] = useState('feature1');

  const hero: Hero = {
    title: 'Transform Your Content',
    description: 'Create stunning visuals and videos with AI',
    cta: 'Get Started',
  };

  const features: Feature[] = [
    {
      title: 'AI-Powered Video Creation',
      description: 'Create stunning videos in minutes',
    },
    {
      title: 'Image Editing and Enhancement',
      description: 'Transform your images with AI-powered editing',
    },
    {
      title: 'Content Generation',
      description: 'Generate high-quality content with AI',
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto p-4 pt-6">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">{hero.title}</h1>
          <p className="text-lg text-gray-600">{hero.description}</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            {hero.cta}
          </button>
        </div>
        <div className="flex flex-wrap justify-center mb-12">
          <button
            className={`text-lg font-bold p-4 ${
              selectedTab === 'features'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-600'
            }`}
            onClick={() => setSelectedTab('features')}
          >
            Features
          </button>
          <button
            className={`text-lg font-bold p-4 ${
              selectedTab === 'pricing'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-600'
            }`}
            onClick={() => setSelectedTab('pricing')}
          >
            Pricing
          </button>
        </div>
        {selectedTab === 'features' && (
          <div className="flex flex-wrap justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`w-full md:w-1/2 xl:w-1/3 p-4 ${
                  selectedFeature === `feature${index + 1}`
                    ? 'bg-orange-100'
                    : 'bg-white'
                }`}
                onClick={() => setSelectedFeature(`feature${index + 1}`)}
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <h2 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
        {selectedTab === 'pricing' && (
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 xl:w-1/3 p-4 bg-white">
              <h2 className="text-lg font-bold text-gray-900">Basic</h2>
              <p className="text-lg text-gray-600">$9.99/month</p>
              <ul>
                <li className="text-lg text-gray-600">1 user</li>
                <li className="text-lg text-gray-600">100MB storage</li>
              </ul>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Sign up
              </button>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4 bg-white">
              <h2 className="text-lg font-bold text-gray-900">Pro</h2>
              <p className="text-lg text-gray-600">$19.99/month</p>
              <ul>
                <li className="text-lg text-gray-600">5 users</li>
                <li className="text-lg text-gray-600">1GB storage</li>
              </ul>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Sign up
              </button>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4 bg-white">
              <h2 className="text-lg font-bold text-gray-900">Enterprise</h2>
              <p className="text-lg text-gray-600">Custom pricing</p>
              <ul>
                <li className="text-lg text-gray-600">10+ users</li>
                <li className="text-lg text-gray-600">10GB storage</li>
              </ul>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Contact us
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;